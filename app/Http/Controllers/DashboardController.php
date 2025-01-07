<?php

namespace App\Http\Controllers;

use App\Data\CanData;
use App\Data\ModelsCountData;
use App\Enums\AppPermissionsEnum;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use App\Models\ProductType;
use App\Models\User;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {


        return inertia('Dashboard/overview/index', [
            "modelsCount" => new ModelsCountData(User::count(), Category::count(), Product::count(), Brand::count(), ProductType::count()),
            "productsCountByCategory" => Category::withCount('products')
            ->orderByDesc('products_count')
            ->limit(10)
                ->get()
                ->map(function ($category) {
                    return [
                        'name' => $category->name,
                        'products_count' => $category->products_count,
                    ];
                })
                ->values()
                ->toArray()
        ]);
    }
}
