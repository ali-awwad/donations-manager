<?php

namespace App\Http\Controllers;

use App\Models\Cause;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CauseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Causes/Index', [
            'title' => 'Causes',
            'items'=> Cause::orderByDesc('created_at')->paginate(10)->through(function ($cause)
            {
                return [
                    'id'=>$cause->id,
                    'name'=>$cause->name,
                    'slug'=>$cause->slug,
                    'category'=>$cause->category->name,
                ];
            })
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Cause  $cause
     * @return \Illuminate\Http\Response
     */
    public function show(Cause $cause)
    {
        return Inertia::render('Causes/Show', [
            'title'=>$cause->name,
            'item'=>  [
                    'id'=>$cause->id,
                    'name'=>$cause->name,
                    'slug'=>$cause->slug,
                    'description'=>$cause->description,
                    'category'=>$cause->category->name
                    // 'causes_count'=>$cause->causes_count,
                    // 'causes'=>$cause->causes()->paginate(10)
                ]
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Cause  $cause
     * @return \Illuminate\Http\Response
     */
    public function edit(Cause $cause)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Cause  $cause
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Cause $cause)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Cause  $cause
     * @return \Illuminate\Http\Response
     */
    public function destroy(Cause $cause)
    {
        //
    }
}
