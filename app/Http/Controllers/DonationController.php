<?php

namespace App\Http\Controllers;

use App\Http\Resources\CampaignResource;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\DonationResource;
use App\Http\Resources\DonorResource;
use App\Models\Campaign;
use App\Models\Category;
use App\Models\Donation;
use App\Models\Donor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class DonationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Inertia::render('Donations/Index', [
            'title' => 'Donations',
            'items' => DonationResource::collection(Donation::orderByDesc('created_at')->paginate(10)),
            'can'=>[
                'viewAny'=> Auth::user()->can('viewAny',Donation::class),
                'create'=> Auth::user()->can('create',Donation::class),
            ]
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Donations/Create', [
            'title' => 'Add New Donation',
            'selected_campaign_id' => request('campaign_id'),
            'donors' => DonorResource::collection(Donor::orderByDesc('created_at')->when(request('donor_search'), function ($q, $donor_search) {
                return $q->where('name', 'like', '%' . $donor_search . '%');
            })->paginate(3)),
            'campaigns' => CampaignResource::collection(Campaign::orderByDesc('created_at')
                ->when(request('campaign_search'), function ($q, $campaign_search) {
                    return $q->where('name', 'like', '%' . $campaign_search . '%');
                })->paginate()),

        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'donor_id' => 'required|exists:donors,id',
            'campaign_id' => 'required|exists:campaigns,id',
            'description' => 'required|max:3000',
            'amount' => 'required|min:0|numeric',
        ]);
        DB::beginTransaction();
        try {
            $donation = new Donation();
            $donation->uuid = Str::uuid();
            $donation->description = $request->description;
            $donation->amount = $request->amount;
            $donation->campaign_id = $request->campaign_id;
            $donation->donor_id = $request->donor_id;

            $donation->save();
            DB::commit();
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->with([
                'error' => error_message($th->getMessage()),
            ]);
        }

        return Redirect::route('donations.show', $donation)->with('success', 'Item created successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Donation  $donation
     * @return \Illuminate\Http\Response
     */
    public function show(Donation $donation)
    {
        return Inertia::render('Donations/Show', [
            'title' => $donation->name,
            'donation' =>  DonationResource::make($donation->append(['description'])),

        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Donation  $donation
     * @return \Illuminate\Http\Response
     */
    public function edit(Donation $donation)
    {
        return Inertia::render('Donations/Edit', [
            'title' => $donation->uuid,
            'item'=>DonationResource::make($donation->append(['description'])),
            'donors' => DonorResource::collection(Donor::pinId($donation->donor_id)->orderByDesc('created_at')->when(request('donor_search'), function ($q, $donor_search) {
                return $q->where('name', 'like', '%' . $donor_search . '%');
            })->paginate()),
            'campaigns' => CampaignResource::collection(Campaign::pinId($donation->campaign_id)->orderByDesc('created_at')
                ->when(request('campaign_search'), function ($q, $campaign_search) {
                    return $q->where('name', 'like', '%' . $campaign_search . '%');
                })->paginate()),

        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Donation  $donation
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Donation $donation)
    {
        $this->validate($request, [
            'donor_id' => 'required|exists:donors,id',
            'campaign_id' => 'required|exists:campaigns,id',
            'description' => 'required|max:3000',
            'amount' => 'required|min:0|numeric',
        ]);
        DB::beginTransaction();
        try {
            $donation->uuid = Str::uuid();
            $donation->description = $request->description;
            $donation->amount = $request->amount;
            $donation->campaign_id = $request->campaign_id;
            $donation->donor_id = $request->donor_id;

            $donation->save();
            DB::commit();
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->with([
                'error' => error_message($th->getMessage()),
            ]);
        }

        return Redirect::route('donations.show', $donation)->with('success', 'Item updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Donation  $donation
     * @return \Illuminate\Http\Response
     */
    public function destroy(Donation $donation)
    {
        DB::beginTransaction();
        try {
            $donation->delete();
            DB::commit();
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->with([
                'error' => error_message($th->getMessage()),
            ]);
        }
        return Redirect::route('donors.index')->with('success', 'Item deleted successfully');
    }
}
