<?php

namespace App\Http\Controllers;

use App\Data\BrandData;
use App\Data\CategoryData;
use App\Data\ProductData;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Spatie\Image\Image;


class ProductsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $perPageValue = $request->input('per_page');
        if (!in_array($perPageValue, ['10', '20', "30", "40", "50", "200"])) {
            $perPageValue = "10";
        }

        return Inertia::render('Dashboard/products/index', [
            'paginationData' => ProductData::collect(
                Product::query()
                    ->with(['brand', 'categories'])
                    // Apply advanced filtering
                    ->advancedFilter()
                    // Paginate with configurable per page
                    ->paginate($perPageValue)
                    // Preserve query parameters in pagination links
                    ->withQueryString()
            ),
            "categories" => CategoryData::collect(Category::all(['id', 'name'])),
            "brands" => BrandData::collect(Brand::all(['id', 'name'])),


        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Dashboard/products/create', [
            "categories" => CategoryData::collect(Category::orderBy('name', "asc")->get())
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $validated =  $request->validate([
            'ref' => ['required', 'string', Rule::unique(Product::class, 'ref'), 'max:255'],
            'name' => ['required', 'string', Rule::unique(Product::class, 'name'), 'max:255'],
            'type' => ['nullable', 'string', 'max:255'],
            'description' => ['nullable', "max:2000"],
            'selected_CategoriesIds' => ['nullable', 'array'],
            'selected_CategoriesIds.*' => ['exists:categories,id'],
            "brand_id" => ["nullable", 'integer'],
            'primary_image' => ['nullable', 'array'], // Validate 'image' as an array
            'primary_image.0' => [
                'file',
                'image',
                'mimes:jpeg,png,jpg,webp,svg',
                'max:5120', // Max size 5MB
            ],
            'secondary_images' => ['nullable', 'array'], // Validate 'image' as an array
            'secondary_images.*' => [
                'file',
                'image',
                'mimes:jpeg,png,jpg,webp,svg',
                'max:5120', // Max size 5MB
            ],
            'price' => ['nullable', 'numeric'],
            'weight' => ['nullable', 'numeric'],
            'packaging' => ['nullable', 'string', 'max:255'],
            'tc_20' => ['nullable', 'string', 'max:255'],
            'tc_40' => ['nullable', 'string', 'max:255'],
        ]);


        $product = Product::create([
            'ref' => $validated['ref'],
            'name' => $validated['name'],
            'type' => $validated['type'],
            'description' => $validated['description'],
            "brand_id" => $validated['brand_id'],
            'price' => $validated['price'],
            'weight' => $validated['weight'],
            'packaging' => $validated['packaging'],
            'tc_20' => $validated['tc_20'],
            'tc_40' => $validated['tc_40'],
        ]);


        // categories MANY TO MANY
        if (!empty($validated['selected_CategoriesIds'])) {
            $product->categories()->attach($validated['selected_CategoriesIds']);
        }


        // PRIMARY IMAGE Upload
        if ($request->hasFile('primary_image.0')) {
            $image = $validated['primary_image'][0]; // Get the first image
            $media = $product->addMedia($image)->toMediaCollection('product_primary_image');
            // Optimize the uploaded image
            Image::load($media->getPath())->format('webp')->optimize()->save();
        }

        // SECONDARY IMAGES UPLOAD
        if ($request->hasFile('secondary_images')) {
            foreach ($validated['secondary_images'] as $secondaryImage) {
                $media = $product->addMedia($secondaryImage)->toMediaCollection('product_secondary_images');
                //Optimize the uploaded images
                Image::load($media->getPath())->format('webp')->optimize()->save();
            }
        }


        return \to_route('products.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {

        return Inertia::render('Dashboard/products/edit', [
            "categories" => CategoryData::collect(Category::orderBy('name', "asc")->get()),
            "product" => $product,
            "optimized_image" => $product->getFirstMediaUrl('product_images', 'optimized')
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Product $product)
    {
        $existingSecondaryImages = \collect($product->secondaryImages);
        $submittedSecondaryImages = [];
        $submittedSecondaryImagesUrls = [];
        $uploadedSecondaryImagesFiles = [];


        // filter the uploaded files and only validate the File types

        if (\is_array($request->secondary_images) && empty($request->secondary_images)) {
            // THE USER MANUALLY DELETED THE CATEGORY IMAGE
            $product->clearMediaCollection('product_secondary_images');
        } else {
            // Filter the uploaded images and seperate  the string, File and empty values
            $submittedSecondaryImages = collect($request->secondary_images);

            // Clean submitted images (remove empty values)
            $submittedSecondaryImages = $submittedSecondaryImages->filter(fn($item) => !empty($item));

            // Separate URLs and Uploaded Files
            $submittedSecondaryImagesUrls = $submittedSecondaryImages->filter(fn($item) => is_string($item));
            $uploadedSecondaryImagesFiles = $submittedSecondaryImages->filter(fn($item) => $item instanceof \Illuminate\Http\UploadedFile);




            // Append the File types to be validated
            $request->merge(['secondary_images' => $uploadedSecondaryImagesFiles->toArray()]);
        }
        if (\is_array($request->primary_image) && empty($request->primary_image)) {
            // THE USER MANUALLY DELETED THE CATEGORY IMAGE
            $product->clearMediaCollection('product_primary_image');
        } else if (isset($request->primary_image[0]) && is_string($request->primary_image[0])) {
            // THE USER SUBMITTED AN ALREADY EXISTING IMAGE (A STRING)
            $request->merge(['primary_image' => null]);
        }

        $validated =  $request->validate(['ref' => ['required', 'string', Rule::unique(Product::class)->ignore($product->id), 'max:255'],
            'name' => ['required', 'string', Rule::unique(Product::class, 'id')->ignore($product->id), 'max:255'],
            'type' => ['nullable', 'string', 'max:255'],
            'description' => ['nullable', "max:2000"],
            'selected_CategoriesIds' => ['nullable', 'array'],
            'selected_CategoriesIds.*' => ['exists:categories,id'],
            "brand_id" => ["nullable", 'integer'],
            'primary_image' => ['nullable', 'array'], // Validate 'image' as an array
            'primary_image.0' => [
                'file',
                'image',
                'mimes:jpeg,png,jpg,webp,svg',
                'max:5120', // Max size 5MB
            ],
            'secondary_images' => ['nullable', 'array'], // Validate 'image' as an array
            'secondary_images.*' => [
                'file',
                'image',
                'mimes:jpeg,png,jpg,webp,svg',
                'max:5120', // Max size 5MB
            ],
            'price' => ['nullable', 'numeric'],
            'weight' => ['nullable', 'numeric'],
            'packaging' => ['nullable', 'string', 'max:255'],
            'tc_20' => ['nullable', 'string', 'max:255'],
            'tc_40' => ['nullable', 'string', 'max:255'],
        ]);


        $product->update([
            'ref' => $validated['ref'],
            'name' => $validated['name'],
            'type' => $validated['type'],
            'description' => $validated['description'],
            "brand_id" => $validated['brand_id'],
            'price' => $validated['price'],
            'weight' => $validated['weight'],
            'packaging' => $validated['packaging'],
            'tc_20' => $validated['tc_20'],
            'tc_40' => $validated['tc_40'],
        ]);


        // PRODUCT CATEGORIES
        $product->categories()->sync($validated['selected_CategoriesIds'] ?? []);


        // PRODUCT PRIMARY IMAGE
        if ($request->hasFile('primary_image.0')) {
            $image = $validated['primary_image'][0]; // Get the first image
            $media = $product->addMedia($image)->toMediaCollection('product_primary_image');
            // Optimize the uploaded image
            Image::load($media->getPath())->format('webp')->optimize()->save();
        }

        // PRODUCT SECONDARY IMAGES
        $imagesToDelete = collect($existingSecondaryImages)->filter(fn($image) => !collect($submittedSecondaryImagesUrls)->contains($image->optimized));

        // Delete images that were replaced or removed
        foreach ($imagesToDelete as $imageToDelete) {

            $optimizedUrl = $imageToDelete->optimized;

            $mediaItem = $product->getMedia('product_secondary_images')->first(function ($media) use ($optimizedUrl) {
                // Compare the URL of the 'optimized' conversion
                return $media->getUrl('optimized') === $optimizedUrl;
            });
            if ($mediaItem) {
                $mediaItem->delete();
            }
        }




        // Add new uploaded files
        foreach ($uploadedSecondaryImagesFiles as $uploadedFile) {
            $media = $product->addMedia($uploadedFile)
                ->toMediaCollection('product_secondary_images');

            Image::load($media->getPath())->format('webp')->optimize()->save();
        }



        return \to_route('products.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();
    }
}
