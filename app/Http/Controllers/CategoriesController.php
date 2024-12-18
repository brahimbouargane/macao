<?php

namespace App\Http\Controllers;

use App\Data\CategoryData;
use App\Models\Category;
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
                        // Apply advanced filtering
                        ->advancedFilter()
                        // Paginate with configurable per page
                        ->paginate($perPageValue)
                        // Preserve query parameters in pagination links
                        ->withQueryString()
                ),

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
        

        $validated =  $request->validate([
            'name' => ['required', Rule::unique(Category::class, 'name')],
            'description' => ['nullable'],
            'image' => [
                'nullable',
                'file',
                'image',            
                'mimes:jpeg,png,jpg',
                'max:2048',
            ],
            "parent_id" => ["nullable", 'integer'], 
        ]);


        $category = Category::create($validated);



        if ($request->hasFile('image')) {

            $media = $category->addMediaFromRequest("image")->toMediaCollection('category_images');
            // optimize the uploaded image
            Image::load($media->getPath())->format('webp')->optimize()->save();
        }       

        return \to_route('categories.index');
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
        $validated =  $request->validate([
            'name' => ['required', Rule::unique(Category::class, 'name')->ignore($category->id)],
            'description' => ['nullable'],
            'image' => [
                'nullable',
                'file',
                'image',            
                'mimes:jpeg,png,jpg',
                'max:2048',
            ],
            "parent_id" => ["nullable", 'integer'], 
        ]);

        $category->name = $validated['name'];
        $category->description = $validated['description'];
        $category->parent_id = $validated['parent_id'] == $category->id ? null : $validated['parent_id'];

        if ($request->hasFile('image')) {

            $media = $category->addMediaFromRequest("image")->toMediaCollection('category_images');

        Image::load($media->getPath())->format('webp')->optimize()->save();
        }

        $category->save();

        return \to_route('categories.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        //
    }
}
