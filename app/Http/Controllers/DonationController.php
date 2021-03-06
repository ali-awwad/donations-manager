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
use App\Traits\GenericTableColumns;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class DonationController extends Controller
{
    use GenericTableColumns;

    public function initQuery()
    {
        return Donation::orderBy(
            request('order_by') ?? 'donation_date',
            request('order_direction') ?? 'desc'
        )
            ->leftJoin('donors', 'donors.id', '=', 'donations.donor_id')
            ->leftJoin('campaigns', 'campaigns.id', '=', 'donations.campaign_id')
            ->leftJoin('categories', 'categories.id', '=', 'campaigns.category_id')
            ->select('donations.*')
            ->when(request('search'), function ($q) {
                return $q->where('campaigns.name', 'like', '%' . request('search') . '%')
                    ->orWhere('categories.name', 'like', '%' . request('search') . '%')
                    ->orWhere('donors.name', 'like', '%' . request('search') . '%');
            });
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->authorize('viewAny', Donation::class);

        $query = $this->initQuery();
        // if (!Auth::user()->isAdmin() && !Auth::user()->isSuperAdmin()) {
        //     $query->whereHas('donor', function (Builder $q) {
        //         $q->where('donors.user_id', Auth::id());
        //     });
        // }
        return Inertia::render('Donations/Index', array_merge([
            'title' => 'Donations',
            'items' => DonationResource::collection($query->paginate(request('per_page', 10))->appends(request()->all())),
            'count' => Donation::count(),
            'can' => [
                'viewAny' => Auth::user()->can('viewAny', Donation::class),
                'create' => Auth::user()->can('create', Donation::class),
            ]
        ], $this->settings('donations')));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $this->authorize('create', Donation::class);

        $query = Donor::orderByDesc('created_at');
        if (!Auth::user()->isAdmin() && !Auth::user()->isSuperAdmin()) {
            $query->where('donors.user_id', Auth::id());
        }

        return Inertia::render('Donations/Create', [
            'title' => 'Add New Donation',
            'selected_campaign_id' => request('campaign_id'),
            'donors' => DonorResource::collection($query->when(request('donor_search'), function ($q, $donor_search) {
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
        $this->authorize('create', Donation::class);

        $this->validate($request, [
            'donor_id' => 'required|exists:donors,id',
            'campaign_id' => 'required|exists:campaigns,id',
            'description' => 'required|max:3000',
            'amount' => 'required|min:0|numeric',
            'donation_date' => 'required|date|max:today',
        ]);
        DB::beginTransaction();
        try {
            $donation = new Donation();
            $donation->uuid = Str::uuid();
            $donation->description = $request->description;
            $donation->amount = $request->amount;
            $donation->campaign_id = $request->campaign_id;
            $donation->donor_id = $request->donor_id;
            $donation->donation_date = $request->donation_date;

            $donation->save();

            $donor = Donor::find($request->donor_id);
            $campaign = Campaign::find($request->campaign_id);
            $donor->campaigns()->syncWithoutDetaching([$campaign->id]);
            $donor->categories()->syncWithoutDetaching([$campaign->category_id]);

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
        $this->authorize('view', $donation);

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
        $this->authorize('update', $donation);

        return Inertia::render('Donations/Edit', [
            'title' => $donation->uuid,
            'item' => DonationResource::make($donation->append(['description'])),
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
        $this->authorize('update', $donation);

        $this->validate($request, [
            'donor_id' => 'required|exists:donors,id',
            'campaign_id' => 'required|exists:campaigns,id',
            'description' => 'required|max:3000',
            'amount' => 'required|min:0|numeric',
            'donation_date' => 'required|date|max:today',
        ]);
        DB::beginTransaction();
        try {
            $donation->description = $request->description;
            $donation->amount = $request->amount;
            $donation->campaign_id = $request->campaign_id;
            $donation->donor_id = $request->donor_id;
            $donation->donation_date = $request->donation_date;

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
    public function destroy($ids)
    {
        foreach (explode(',',$ids) as $id) {
            $this->authorize('delete', Donation::find($id));
        }
        DB::beginTransaction();
        try {
            Donation::destroy(explode(',',$ids));
            DB::commit();
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->with([
                'error' => error_message($th->getMessage()),
            ]);
        }
        if(url()->previous()==route('donations.show',$ids))
        return Redirect::route('donations.index')->with('success', 'Item deleted successfully');
        else
        return back()->with('success', 'Item deleted successfully');
    }
}
