<?php

namespace App\Http\Controllers;

use App\Data\CategoryData;
use App\Models\Category;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Spatie\Image\Image;


class CategoriesController extends Controller
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

            return Inertia::render('Dashboard/categories/index', [
                'paginationData' => CategoryData::collect(
                    Category::query()
                ->with(['parentCategories'])
                        // Apply advanced filtering
                        ->advancedFilter()
                        // Paginate with configurable per page
                        ->paginate($perPageValue)
                        // Preserve query parameters in pagination links
                        ->withQueryString()
                ),
            "categories" => CategoryData::collect(Category::with(['parentCategories'])->get()),
            "usersOptions" => User::all(['id', 'name'])
            ]);
       
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Dashboard/categories/create',[
            "parentCategories" => CategoryData::collect(Category::orderBy('name', "asc")->get())
            ]);
        
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $validated = $request->validate(['name' => ['required', Rule::unique(Category::class, 'name'),  'max:255'],
            'description' => ['nullable', 'max:255'],
            'image' => ['nullable', 'array'], // Validate 'image' as an array
            'image.0' => [
                'file',
                'image',
                'mimes:jpeg,png,jpg,webp,svg',
                'max:5120', // Max size 5MB
            ],
            'selected_ParentCategoriesIds' => ['nullable', 'array'],
            'selected_ParentCategoriesIds.*' => ['exists:categories,id'],
            
        ]);

        $category = Category::create([
            'name' => $validated['name'],
            'description' => $validated['description'],"created_by" =>  \auth('web')->user()->id

        ]);

        if ($request->hasFile('image.0')) {
            $image = $validated['image'][0]; // Get the first image
            $media = $category->addMedia($image)->toMediaCollection('category_images');
            // Optimize the uploaded image
            Image::load($media->getPath())->format('webp')->optimize()->save();
        }

        if (!empty($validated['selected_ParentCategoriesIds'])) {
            $category->parentCategories()->attach($validated['selected_ParentCategoriesIds']);
        }

       // if ($request->withBack) {
       //     return  \back();
       // } else {
//
       //     return \to_route('categories.index');
       // }
        
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Category $category)
    {
        $category->load(['parent']);

        return Inertia::render('Dashboard/categories/edit',[
            "parentCategories" => CategoryData::collect(Category::orderBy('name', "asc")->get()),
            "category"=> $category,
            "optimized_image"=> $category->getFirstMediaUrl('category_images', 'optimized')
            ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Category $category)
    {
        if (\is_array($request->image) && empty($request->image)) {
            // THE USER MANUALLY DELETED THE CATEGORY IMAGE
            $category->clearMediaCollection('category_images');
        } else if (isset($request->image[0]) && is_string($request->image[0])) {
            // THE USER SUBMITTED AN ALREADY EXISTING IMAGE (A STRING)
            $request->merge(['image' => null]);
        }


        // Validate the request with the dynamically built rules
        $validated = $request->validate(['name' => ['required', Rule::unique(Category::class, 'name')->ignore($category->id),  'max:255'],
            'description' => ['nullable', 'max:255'],
            'selected_ParentCategoriesIds' => ['nullable', 'array'],
            'selected_ParentCategoriesIds.*' => ['exists:categories,id'],
            'image' => ['nullable', 'array'], // Validate 'image' as an array
            'image.0' => [
                'file',
                'image',
                'mimes:jpeg,png,jpg,webp,svg',
                'max:5120', // Max size 5MB
            ],
        ]);


        $category->update([
            'name' => $validated['name'],
            'description' => $validated['description'],
            "last_updated_by" => \auth('web')->user()->id
        ]);


        $category->parentCategories()->sync($validated['selected_ParentCategoriesIds'] ?? []);

        if ($request->hasFile('image.0')) {
            $image = $validated['image'][0]; // Get the first image
            $media = $category->addMedia($image)->toMediaCollection('category_images');
            // Optimize the uploaded image
            Image::load($media->getPath())->format('webp')->optimize()->save();
        } 


        //return \to_route('categories.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        $category->delete();
    }

    
}
