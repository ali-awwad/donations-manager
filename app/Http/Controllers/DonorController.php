<?php

namespace App\Http\Controllers;

use App\Models\Campaign;
use App\Models\Category;
use App\Models\Donation;
use App\Models\Donor;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DonorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Donors/Index', [
            'title' => 'Donors Page',
            'donors' => Donor::orderByDesc('created_at')->paginate(10)->through(function ($donor) {
                $categories = Donation::where('donor_id', $donor->id)->pluck('category_id')->toArray();
                $campaigns = Donation::where('donor_id', $donor->id)->pluck('campaign_id')->toArray();

                return [
                    'id' => $donor->id,
                    'alias' => $donor->alias,
                    'name' => $donor->name,
                    'total_donations' => friendly_money($donor->donations->sum('amount')),
                    'categories_count' => Category::whereIn('id', $categories)->count(),
                    'campaigns_count' => Campaign::whereIn('id', $campaigns)->count(),
                    'donations_count' => $donor->donations_count,
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
     * @param  \App\Models\Donor  $donor
     * @return \Illuminate\Http\Response
     */
    public function show(Donor $donor)
    {
        $categories = Donation::where('donor_id', $donor->id)->pluck('category_id')->toArray();
        $campaigns = Donation::where('donor_id', $donor->id)->pluck('campaign_id')->toArray();
        return Inertia::render('Donors/Show', [
            'title' => $donor->name,
            'donor' =>  [
                'id' => $donor->id,
                'alias' => $donor->alias,
                'remarks' => $donor->remarks,
                'name' => $donor->name,
                'total_donations' => friendly_money($donor->donations->sum('amount')),
                'categories_count' => Category::whereIn('id', $categories)->count(),
                'campaigns_count' => Campaign::whereIn('id', $campaigns)->count(),
                'donations_count' => $donor->donations_count,
                'items' => $donor->donations()->paginate(10)->through(function ($donation) {
                    return [
                        'id' => $donation->id,
                        'amount' => friendly_money($donation->amount),
                        'category' => $donation->category->name,
                        'campaign' => $donation->campaign->name,
                        'donor' => $donation->donor->name,
                        'created_at' => $donation->created_at_readable,
                    ];
                })
            ]
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Donor  $donor
     * @return \Illuminate\Http\Response
     */
    public function edit(Donor $donor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Donor  $donor
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Donor $donor)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Donor  $donor
     * @return \Illuminate\Http\Response
     */
    public function destroy(Donor $donor)
    {
        //
    }
}
