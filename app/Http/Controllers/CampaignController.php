<?php

namespace App\Http\Controllers;

use App\Models\Campaign;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CampaignController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Campaigns/Index', [
            'title' => 'Campaigns',
            'items'=> Campaign::orderByDesc('created_at')->paginate(10)->through(function ($campaign)
            {
                return [
                    'id'=>$campaign->id,
                    'name'=>$campaign->name,
                    'slug'=>$campaign->slug,
                    'target'=>$campaign->target,
                    'category'=>$campaign->category->name,
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
     * @param  \App\Models\Campaign  $campaign
     * @return \Illuminate\Http\Response
     */
    public function show(Campaign $campaign)
    {
        return Inertia::render('Campaigns/Show', [
            'title'=>$campaign->name,
            'item'=>  [
                    'id'=>$campaign->id,
                    'name'=>$campaign->name,
                    'slug'=>$campaign->slug,
                    'target'=>$campaign->target,
                    'description'=>$campaign->description,
                    'category'=>$campaign->category->name
                    // 'campaigns_count'=>$campaign->campaigns_count,
                    // 'campaigns'=>$campaign->campaigns()->paginate(10)
                ]
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Campaign  $campaign
     * @return \Illuminate\Http\Response
     */
    public function edit(Campaign $campaign)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Campaign  $campaign
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Campaign $campaign)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Campaign  $campaign
     * @return \Illuminate\Http\Response
     */
    public function destroy(Campaign $campaign)
    {
        //
    }
}
