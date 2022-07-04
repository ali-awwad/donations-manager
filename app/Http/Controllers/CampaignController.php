<?php

namespace App\Http\Controllers;

use App\Http\Resources\CampaignResource;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\DonationResource;
use App\Models\Campaign;
use App\Models\Category;
use App\Models\Donation;
use App\Traits\GenericTableColumns;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class CampaignController extends Controller
{
    use GenericTableColumns;

    public function initQuery()
    {
        return Campaign::orderBy(
            request('order_by') ?? 'id',
            request('order_direction') ?? 'desc'
        )
            ->leftJoin('donations', 'campaigns.id', '=', 'donations.campaign_id')
            ->leftJoin('categories', 'categories.id', '=', 'campaigns.category_id')
            ->select('campaigns.*', DB::raw('SUM(donations.amount) as collected'), DB::raw('(SELECT sum(donations.amount) FROM donations where donations.campaign_id = campaigns.id) / target as percentage'))
            // ->select('campaigns.*')
            ->when(request('search'), function ($q) {
                return $q->where('campaigns.name', 'like', '%' . request('search') . '%')
                    ->orWhere('categories.name', 'like', '%' . request('search') . '%');
            })
            ->groupBy('campaigns.id');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $this->authorize('viewAny', Campaign::class);
        $query = $this->initQuery();
        return Inertia::render('Campaigns/Index', array_merge([
            'title' => 'Campaigns',
            'items' => CampaignResource::collection($query->paginate(request('per_page', 10))->appends(request()->all())),
            'count' => Campaign::count(),
            'can' => [
                'viewAny' => Auth::user()->can('viewAny', Campaign::class),
                'create' => Auth::user()->can('create', Campaign::class),
            ]
        ], $this->settings('campaigns')));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $this->authorize('create', Campaign::class);

        return Inertia::render('Campaigns/Create', [
            'title' => 'Create Campaign',
            'selected_category_id' => request('category_id'),
            'categories' => CategoryResource::collection(Category::orderByDesc('created_at')->paginate())
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
        $this->authorize('create', Campaign::class);

        $this->validate($request, [
            'campaign_name' => 'required|max:255',
            'target' => 'required|min:0|numeric',
            'description' => 'required|max:3000',
            'category_id' => 'required|exists:categories,id',
        ]);
        DB::beginTransaction();
        try {
            $campaign = new Campaign();
            $campaign->name = $request->campaign_name;
            $campaign->description = $request->description;
            $campaign->target = $request->target;
            $campaign->category_id = $request->category_id;
            $campaign->slug = Str::slug($campaign->name);
            $campaign->save();
            DB::commit();
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->with([
                'error' => error_message($th->getMessage()),
            ]);
        }

        return Redirect::route('campaigns.show', $campaign)->with('success', 'Item created successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Campaign  $campaign
     * @return \Illuminate\Http\Response
     */
    public function show(Campaign $campaign)
    {
        $this->authorize('view', $campaign);
        $query = (new DonationController)->initQuery();
        // if (!Auth::user()->isAdmin()) {
        //     $query->whereHas('donor', function (Builder $q) {
        //         $q->where('donors.user_id', Auth::id());
        //     });
        // }

        return Inertia::render('Campaigns/Show', array_merge([
            'title' => $campaign->name,
            'item' =>  CampaignResource::make($campaign->append(['description'])),
            'items' => DonationResource::collection($query->where('campaign_id', $campaign->id)->paginate()),
            'count'=>Donation::where('campaign_id', $campaign->id)->count(),
            'can' => [
                'create_donation' => Auth::user()->can('create', Donation::class),
            ]
        ],$this->settings('donations')));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Campaign  $campaign
     * @return \Illuminate\Http\Response
     */
    public function edit(Campaign $campaign)
    {
        $this->authorize('update', $campaign);

        return Inertia::render('Campaigns/Edit', [
            'title' => 'Edit Category: ' . $campaign->name,
            'item' => CampaignResource::make($campaign->append(['description'])),
            'categories' => CategoryResource::collection(Category::orderByDesc('created_at')->paginate())
        ]);
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
        $this->authorize('update', $campaign);
        $this->validate($request, [
            'campaign_name' => 'required|max:255',
            'target' => 'required|min:0|numeric',
            'description' => 'required|max:3000',
            'category_id' => 'required|exists:categories,id',
        ]);
        DB::beginTransaction();
        try {
            $campaign->name = $request->campaign_name;
            $campaign->description = $request->description;
            $campaign->target = $request->target;
            $campaign->category_id = $request->category_id;
            $campaign->slug = Str::slug($campaign->name);
            $campaign->save();
            DB::commit();
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->with([
                'error' => error_message($th->getMessage()),
            ]);
        }

        return Redirect::route('campaigns.show', $campaign)->with('success', 'Item updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Campaign  $campaign
     * @return \Illuminate\Http\Response
     */
    public function destroy($ids)
    {
        foreach (explode(',', $ids) as $id) {
            $this->authorize('delete', Campaign::find($id));
        }
        DB::beginTransaction();
        try {
            Campaign::destroy(explode(',', $ids));
            DB::commit();
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->with([
                'error' => error_message($th->getMessage()),
            ]);
        }
        if (url()->previous() == route('campaigns.show', $ids))
            return Redirect::route('campaigns.index')->with('success', 'Item deleted successfully');
        else
            return back()->with('success', 'Item deleted successfully');
    }
}
