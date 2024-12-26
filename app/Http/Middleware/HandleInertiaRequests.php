<?php

namespace App\Http\Middleware;

use App\Data\AuthenticatedUserData;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {

        return [
            ...parent::share($request),
            'auth' => [
                'user' => $request->user() ? AuthenticatedUserData::from($request->user()) : null,
            ],
            'ziggy' => fn () => [
                'location' => $request->url(),
                'query' => $request->query(),
            ],
            'flash_message' => fn () => [
                'type' => $request->session()->get('type') ?? 'success',
                'message' => $request->session()->get('message'),
            ],
            "modelsCount" => [
                "user" => Cache::get('user_count') ?? 0,
                "category" => Cache::get('category_count') ?? 0,
                "product" => Cache::get('product_count') ?? 0,
                "brand" => Cache::get('brand_count') ?? 0,
            ],
            // Pass the current locale
            'locale' => function () {
                return app()->getLocale();
            },
            // Pass translations as a JSON object
            'translations' => function () {
                return translations(
                    resource_path('lang/' . app()->getLocale() . '.json')
                );
            },
                ];
            }
}
