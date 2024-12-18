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


        $validated = $request->validate(
            [
                'email' => ['string', 'lowercase', 'email', 'max:255', Rule::unique(User::class)->ignore(Auth::user()->id)],
                'avatar' => [
                    'nullable',
                    'file',
                    'image',            // Ensure the file is an image
                    'mimes:jpeg,png,jpg', // Specify allowed image formats
                    'max:2048'
                ]
            ]
        );

        $request->user()->fill($validated);

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        if ($request->hasFile('avatar')) {

            $media = $request->user()->addMediaFromRequest("avatar")->toMediaCollection('avatars');

            $result = Image::load($media->getPath())->format('webp')->optimize()->save();
        }        //usingName()  => provide a custom name


     

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
