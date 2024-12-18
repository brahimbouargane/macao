<?php

namespace App\Http\Controllers;

use App\Data\UserData;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class UsersController extends Controller implements HasMiddleware
{

    public static function middleware()
    {
        return [new Middleware([])];
    }


    public function index(Request $request)
    {



        $perPageValue = $request->input('per_page');
        if (!in_array($perPageValue, ['10', '20', "30", "40", "50", "200"])) {
            $perPageValue = "10";
        }



            return Inertia::render('Dashboard/users/index', [
                'paginationData' => UserData::collect(
                    User::query()
                        // Apply advanced filtering
                        ->advancedFilter()
                        // Paginate with configurable per page
                        ->paginate($perPageValue)
                        // Preserve query parameters in pagination links
                        ->withQueryString()
                ),

            ]);
        



    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Dashboard/users/create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated =   $request->validate([
            'name' => ['required', 'min:5', 'max:255'],
            "email" => ['required', 'email', 'unique:users,email', 'lowercase', "max:255"],
            "password" => ['required', 'min:8', 'confirmed', 'max:255'],
        ]);

        $user =  User::create($validated);



        return \to_route('users.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(User $user)
    {

        return Inertia::render('Dashboard/users/show', ["user" => $user]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(User $user)
    {
        


        return Inertia::render('Dashboard/users/edit', [
            "user" => $user,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, User $user)
    {


        $validated = $request->validate([
            'name' => ['required', 'min:5', 'max:255'],
            "email" => ['required', "lowercase", 'email', Rule::unique(User::class)->ignore($user->id)],
            "password" => ['nullable', 'min:8', 'confirmed'],
        ]);


        $user->email = $validated['email'];
        $user->name = $validated['name'];

        // the email was changed
        if ($user->isDirty('email')) {
            $user->email_verified_at = null;
        }

        if ($request->filled('password')) {
            $user->password = Hash::make($validated['password']);
        }

        $user->save();


        return \to_route('users.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {

        $user->delete();
    }


    public function verifyEmail(User $user)
    {
        $user->email_verified_at = now();
        $user->save();
        return \to_route('users.index');
    }
}
