<?php

namespace App\Http\Controllers;

use App\Models\Reference;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class ReferencesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {



        $validated =  $request->validate([
            'ref' => ['required', 'string', Rule::unique(Reference::class, 'ref'), 'max:255'],
            'weight' => ['nullable', 'integer'],
            'packaging' => ['nullable', "string", 'max:255'],
            'tc_20' => ['nullable', "string", 'max:255'],
            'tc_40' => ['nullable', "string", 'max:255'],
            "product_id" => ["nullable", 'integer'],
        ]);


        Reference::create($validated);
    }

    /**
     * Display the specified resource.
     */
    public function show(Reference $reference)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Reference $reference)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Reference $reference)
    {
        $validated =  $request->validate([
            'ref' => ['required', 'string', Rule::unique(Reference::class, 'ref')->ignore($reference->id), 'max:255'],
            'weight' => ['nullable', 'integer'],
            'packaging' => ['nullable', "string", 'max:255'],
            'tc_20' => ['nullable', "string", 'max:255'],
            'tc_40' => ['nullable', "string", 'max:255'],
            "product_id" => ["nullable", 'integer'],
        ]);


        $reference->update($validated);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Reference $reference)
    {
        $reference->delete();
    }
}
