<?php
namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        // Show all products or categories
        return inertia('products/index');
    }

    public function confiserieChocolat()
    {
        // Show confiserie and chocolate products
        return view('products/confiserie-chocolat');
    }

    public function fetesEvenements()
    {
        // Show special events products
        return view('products/fetes-evenements');
    }

    public function gaufrettes()
    {
        // Show wafer products
        return view('products/gaufrettes');
    }

    public function patisserie()
    {
        // Show pastry products
        return view('products/patisserie');
    }

//     public function show(Product $product)
//     {
//         // Show individual product
//         return view('products.show', compact('product'));
//     }

    public function showBySubcategory($parentCategory, $childCategory)
        {
            $category = Category::whereHas('parentCategories', function ($query) use ($parentCategory) {
                    $query->where('name', $parentCategory);
                })
                ->where('name', $childCategory)
                ->with(['products.productType']) // Just adding productType to the eager loading
                ->firstOrFail();

            return Inertia::render('products/index', [
                'products' => $category->products->map(function ($product) {
                    // Add type to the existing product data
                    $product = $product->toArray();
                    $product['type'] = $product['product_type'] ? $product['product_type']['name'] : null;
                    return $product;
                }),
                'parentCategory' => $category->parentCategories->first(),
                'childCategory' => $category
            ]);
        }

    public function show(Product $product)
        {
            // Get related products (same category or type)
            $relatedProducts = Product::where('id', '!=', $product->id)
                ->whereHas('categories', function ($query) use ($product) {
                    $query->whereIn('categories.id', $product->categories->pluck('id'));
                })
                ->orWhere('product_type_id', $product->product_type_id)
                ->with(['productType', 'media'])
                ->take(4)
                ->get();

            return Inertia::render('products/show', [
                'product' => $product->load([
                    'categories',
                    'brand',
                    'productType'
                ])->append([
                    'primaryImage',
                    'secondaryImages',
                    'categoriesNames'
                ]),
                'relatedProducts' => $relatedProducts->map(function ($product) {
                    return [
                        'id' => $product->id,
                        'name' => $product->name,
                        'ref' => $product->ref,
                        'primaryImage' => $product->primaryImage,
                        'product_type' => $product->productType
                    ];
                })
            ]);
        }

}