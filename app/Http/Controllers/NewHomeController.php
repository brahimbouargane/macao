<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NewHomeController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return inertia('home');
    }
}