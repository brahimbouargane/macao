<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\Rule;
use Inertia\Inertia;
use Inertia\Response;
use Spatie\Image\Image;


class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Dashboard/profile/edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
            "optimized_profile_image" => $request->user()->getFirstMediaUrl('avatars', 'optimized')
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(Request $request): RedirectResponse
    {

        if (\is_array($request->avatar) && empty($request->avatar)) {
            // THE USER MANUALLY DELETED THE CATEGORY IMAGE
            $request->user()->clearMediaCollection('avatars');
        } else if (isset($request->avatar[0]) && is_string($request->avatar[0])) {
            // THE USER SUBMITTED AN ALREADY EXISTING IMAGE (A STRING)
            $request->merge(['avatar' => null]);
        }


        $validated = $request->validate(
            [
                'email' => ['string', 'lowercase', 'email', 'max:255', Rule::unique(User::class)->ignore(Auth::user()->id)],

                'avatar' => ['nullable', 'array'], // Validate 'avatar' as an array
                'avatar.0' => [
                    'file',
                    'image',
                    'mimes:jpeg,png,jpg,webp,svg',
                    'max:5120', // Max size 5MB
                ],
            ]
        );

        $request->user()->fill($validated);

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();


        if ($request->hasFile('avatar.0')) {
            $avatar = $validated['avatar'][0]; // Get the first avatar
            $media = $request->user()->addMedia($avatar)->toMediaCollection('avatars');
            // Optimize the uploaded image
            Image::load($media->getPath())->format('webp')->optimize()->save();
        }
     

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
