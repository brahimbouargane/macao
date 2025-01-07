<?php

namespace App\Http\Controllers;

use App\Data\BrandData;
use App\Models\Brand;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class BrandsController extends Controller
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

        return Inertia::render('Dashboard/brands/index', [
            'paginationData' => BrandData::collect(
                Brand::query()
                    // Apply advanced filtering
                    ->advancedFilter()
                    // Paginate with configurable per page
                    ->paginate($perPageValue)
                    // Preserve query parameters in pagination links
                    ->withQueryString()
            ),
            "usersOptions" => User::excludeDeveloper()->get(['id', 'name']),

        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {

        $validated = $request->validate(['name' => ['required', Rule::unique(Brand::class, 'name'), 'max:255'],
        ]);

        $brand = Brand::create([
            'name' => $validated['name'],
            "created_by" =>  \auth('web')->user()->id
        ]);



       // return \back();
    }

    /**
     * Display the specified resource.
     */
    public function show(Brand $brand)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Brand $brand)
    {
     

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Brand $brand)
    {
        $validated = $request->validate(['name' => ['required', Rule::unique(Brand::class, 'name')->ignore($brand->id), 'max:255'],
        ]);

        $brand->update([
            "name" => $validated['name'],
            "last_updated_by" => \auth('web')->user()->id
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Brand $brand)
    {
        $brand->delete();
    }
}
