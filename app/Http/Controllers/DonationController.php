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
use Illuminate\Database\Eloquent\Builder;
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
        $this->authorize('viewAny', Donation::class);

        $query = Donation::orderBy(
            request('order_by') ?? 'id',
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
        if (!Auth::user()->isAdmin()) {
            $query->whereHas('donor', function (Builder $q) {
                $q->where('donors.user_id', Auth::id());
            });
        }
        return Inertia::render('Donations/Index', [
            'title' => 'Donations',
            'items' => DonationResource::collection($query->paginate(request('per_page', 10))->appends(request()->all())),
            'count' => Donation::count(),
            'initSearch' => request('search') ?? '',
            'order_by' => request('order_by') ?? '',
            'order_direction' => request('order_direction') ?? '',
            'columns' => [
                ['label' => 'ID', 'field' => 'id', 'data_type' => 'number'],
                ['label' => 'amount', 'field' => 'amount', 'data_type' => 'text'],
                ['label' => 'Category', 'field' => 'category', 'data_type' => 'object', 'object_data' => ['id' => 'id', 'name' => 'name', 'type' => 'categories']],
                ['label' => 'Campaign', 'field' => 'campaign', 'data_type' => 'object', 'object_data' => ['id' => 'id', 'name' => 'name', 'type' => 'campaigns']],
                ['label' => 'Donor', 'field' => 'donor', 'data_type' => 'object', 'object_data' => ['id' => 'id', 'name' => 'name', 'type' => 'donors']],
                ['label' => 'Created At', 'field' => 'created_at', 'data_type' => 'datetime'],
            ],
            'filters' => request()->only(['search', 'per_page']),
            'actions' => [
                [
                    'name' => 'destroy',
                    'text' => __('Delete'),
                    'route' => 'donations.destroy',
                    'method' => getRouteMethod('donations.destroy'),
                    'require_selection' => true
                ],
            ],
            'can' => [
                'viewAny' => Auth::user()->can('viewAny', Donation::class),
                'create' => Auth::user()->can('create', Donation::class),
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
        $this->authorize('create', Donation::class);

        $query = Donor::orderByDesc('created_at');
        if (!Auth::user()->isAdmin()) {
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
        ]);
        DB::beginTransaction();
        try {
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
        $this->authorize('delete', $donation);

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
