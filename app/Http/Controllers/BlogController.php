<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;


class BlogController extends Controller
{

    public function actualites()
    {
        // Show confiserie and chocolate products
        return inertia('blog/actualites-macao');
    }
    public function recettes()
    {
        // Show confiserie and chocolate products
        return inertia('blog/recettes-produits-macao');
    }
    public function displayBlog()
    {
        // Show confiserie and chocolate products
        return inertia('blog/blog-show');
    }
    public function media()
    {
        // Show confiserie and chocolate products
        return inertia('media');
    }
}