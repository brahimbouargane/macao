<?php

namespace App\Http\Controllers;

use App\Data\ProductTypeData;
use App\Models\ProductType;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class ProductTypeController extends Controller
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

        return Inertia::render('Dashboard/productTypes/index', [
            'paginationData' => ProductTypeData::collect(
                ProductType::query()
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
        $validated = $request->validate([
            'name' => ['required', Rule::unique(ProductType::class, 'name'),  'max:255'],
        ]);

        $productType = ProductType::create([
            'name' => $validated['name'],
            "created_by" =>  \auth('web')->user()->id
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(ProductType $productType)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ProductType $productType)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ProductType $productType)
    {
        $validated = $request->validate([
            'name' => ['required', Rule::unique(ProductType::class, 'name'),  'max:255'],
        ]);


        $productType->update([
            'name' => $validated['name'],
            "last_updated_by" => \auth('web')->user()->id
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ProductType $productType)
    {
        $productType->delete();
    }
}
