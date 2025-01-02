<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('auth/login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();

        $request->session()->regenerate();

        $this->cacheModelCounts();

        return redirect()->intended(route('dashboard', absolute: false));
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }

    protected function cacheModelCounts()
    {
        // Define your model classes here
        $models = [
            \App\Models\User::class,
            \App\Models\Product::class,
            \App\Models\Brand::class,
            \App\Models\Category::class,
            // Add other models
        ];

        foreach ($models as $model) {
            // Get model count
            $count = $model::count();

            // Generate cache key
            $modelName = strtolower(class_basename($model));
            $cacheKey = "{$modelName}_count";

            // Cache the count
            Cache::forever($cacheKey, $count);
        }
        logger("Cached Models");
    }
}
