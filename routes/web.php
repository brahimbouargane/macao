<?php

use App\Http\Controllers;
use App\Http\Controllers\BrandsController;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\ProductsController;
use App\Http\Controllers\ProductTypeController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReferencesController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\ProductController;
use App\Models\Category;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;


Route::get('/', Controllers\HomeController::class)->name('home');
Route::get('newhome', Controllers\NewHomeController::class)->name('newhome');
Route::get('contact', Controllers\ContactController::class)->name('contact');
Route::get('history', Controllers\HistoryController::class)->name('history');
Route::get('certification', Controllers\CertifactionController::class)->name('certification');
Route::get('career', Controllers\CareerController::class)->name('career');
Route::get('products/{parentCategory}/{childCategory}', [ProductController::class, 'showBySubcategory'])
->name('products.home');
Route::get('/products/{product}', [ProductController::class, 'show'])->name('products.display');


// Individual product route
// Route::get('products/{product}', [ProductController::class, 'show'])->name('products.show');




//??-------------------DASHBOARD ROUTES START---------------------------
Route::get('dashboard', Controllers\DashboardController::class)->middleware(['auth', 'verified'])->name('dashboard');

Route::prefix('dashboard')->middleware(['auth', 'verified'])->group(function () {


    //User profile
    Route::get('profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


    // Users routes
    Route::resource('users', UsersController::class);
    Route::post('users/verifyEmail/{user}', [UsersController::class, 'verifyEmail'])->name('users.verifyEmail');


    // Categories routes
    Route::resource('categories', CategoriesController::class);

    // Products routes
    Route::resource('products', ProductsController::class);

    // Product Type routes
    Route::resource('productTypes', ProductTypeController::class);

    // References routes
    //Route::resource('references', ReferencesController::class);

    // Brands routes
    Route::resource('brands', BrandsController::class);
});
//??-------------------DASHBOARD ROUTES END---------------------------

Route::get('products/{categoryName}', function (Request $request) {


    return Inertia::render('products', [
        "categoriesData" =>  Category::where('name', $request->categoryName)->with(['children.products'])->get()
    ]);
});



//??-------------------TRANSLATION ROUTES START---------------------------
Route::get('/language/{language}', function ($language) {
    session()->put('locale', $language);
    return redirect()->back();
})->name('language');



require __DIR__ . '/auth.php';