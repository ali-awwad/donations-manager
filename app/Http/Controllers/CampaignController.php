<?php

namespace App\Http\Controllers;

use App\Http\Resources\CampaignResource;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\DonationResource;
use App\Models\Campaign;
use App\Models\Category;
use App\Models\Donation;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Redirect;
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
        $this->authorize('viewAny', Campaign::class);
        $query = Campaign::orderBy(
            request('order_by') ?? 'id',
            request('order_direction') ?? 'desc'
        )
        ->leftJoin('donations', 'campaigns.id','=','donations.campaign_id')
            ->leftJoin('categories', 'categories.id', '=', 'campaigns.category_id')
            ->select('campaigns.*', DB::raw('SUM(donations.amount) as collected'), DB::raw('(SELECT sum(donations.amount) FROM donations where donations.campaign_id = campaigns.id) / target as percentage'))
            // ->select('campaigns.*')
            ->when(request('search'), function ($q) {
                return $q->where('campaigns.name', 'like', '%' . request('search') . '%')
                ->orWhere('categories.name', 'like', '%' . request('search') . '%');
            })
            ->groupBy('campaigns.id')
            ;
        return Inertia::render('Campaigns/Index', [
            'title' => 'Campaigns',
            'items' => CampaignResource::collection($query->paginate(request('per_page', 10))->appends(request()->all())),
            'count' => Campaign::count(),
            'initSearch' => request('search') ?? '',
            'order_by' => request('order_by') ?? 'id',
            'order_direction' => request('order_direction') ?? 'desc',
            'columns' => [
                ['label' => 'ID', 'field' => 'id', 'data_type' => 'number'],
                ['label' => 'Name', 'field' => 'name', 'data_type' => 'text'],
                ['label' => 'Category', 'field' => 'category', 'data_type' => 'object', 'object_data' => ['id' => 'id', 'name' => 'name', 'type' => 'categories']],
                ['label' => 'Target', 'field' => 'target', 'data_type' => 'number'],
                ['label' => 'Percentage', 'field' => 'percentage', 'data_type' => 'number'],
                ['label' => 'Collected', 'field' => 'collected', 'data_type' => 'number'],
                ['label' => 'Created At', 'field' => 'created_at', 'data_type' => 'datetime'],
            ],
            'filters' => request()->only(['search', 'per_page']),
            'actions' => [
                [
                    'name' => 'destroy',
                    'text' => __('Delete'),
                    'route' => 'campaigns.destroy',
                    'method' => getRouteMethod('campaigns.destroy'),
                    'require_selection' => true
                ],
            ],
            'can' => [
                'viewAny' => Auth::user()->can('viewAny', Campaign::class),
                'create' => Auth::user()->can('create', Campaign::class),
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
        $query = Donation::orderByDesc('id');
        if (!Auth::user()->isAdmin()) {
            $query->whereHas('donor', function (Builder $q) {
                $q->where('donors.user_id', Auth::id());
            });
        }

        return Inertia::render('Campaigns/Show', [
            'title' => $campaign->name,
            'item' =>  CampaignResource::make($campaign->append(['description'])),
            'donations' => DonationResource::collection($query->where('campaign_id', $campaign->id)->paginate())
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
    public function destroy(Campaign $campaign)
    {
        $this->authorize('delete', $campaign);

        DB::beginTransaction();
        try {
            $campaign->delete();
            DB::commit();
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->with([
                'error' => error_message($th->getMessage()),
            ]);
        }
        return Redirect::route('campaigns.index')->with('success', 'Item deleted successfully');
    }
}
