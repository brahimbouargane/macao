<?php
namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

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
}