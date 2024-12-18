<?php

use App\Http\Controllers;
use App\Http\Controllers\CategoriesController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UsersController;
use Illuminate\Support\Facades\Route;

Route::get('/', Controllers\HomeController::class)->name('home');
Route::get('about', Controllers\AboutController::class)->name('about');


Route::get('dashboard', Controllers\DashboardController::class)->middleware(['auth'])->name('dashboard');


Route::prefix('dashboard')->middleware(['auth'])->group(function () {


    //User profile
    Route::get('profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


    // Users routes
    Route::resource('users', UsersController::class);
    Route::post('users/verifyEmail/{user}', [UsersController::class, 'verifyEmail'])->name('users.verifyEmail');


    // Categories routes
    Route::resource('categories', CategoriesController::class);

});


// Translations route
Route::get('/language/{language}', function ($language) {
    session()->put('locale', $language);
    return redirect()->back();
})->name('language');

require __DIR__ . '/auth.php';
