<?php

namespace App\Http\Controllers;

use App\Http\Resources\CampaignResource;
use App\Models\Campaign;
use App\Models\Category;
use App\Models\Donation;
use App\Models\Donor;
use Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function dashboard()
    {
        $categories = Category::get();

        $labels = [];
        foreach ($categories as $key => $category) {
            $labels['label'][] = $category->name;
            $labels['target'][] = friendly_money(Campaign::where('category_id', $category->id)->sum('target'));
            $labels['collected'][] = friendly_money(Donation::whereIn('campaign_id', Campaign::where('category_id', $category->id)->pluck('id')->values())->sum('amount'));
        }
        $collection = collect($labels);

        return Inertia::render('Home', [
            'title' => 'My Dashboard',
            'categories' => [
                'labels' => Category::pluck('name'),
                'colors' => Category::pluck('color'),
                'values' => Category::pluck('campaigns_count'),
            ],
            'campaigns' => [
                'labels' => Campaign::pluck('name'),
                'values' => Campaign::pluck('donations_count'),
            ],
            'categoriesTargetCollected' => [
                'labels' => $collection->all() ? $collection->all()['label'] : null,
                'targetValues' => $collection->all() ? $collection->all()['target'] : null,
                'collectedValues' => $collection->all() ? $collection->all()['collected'] : null,
            ],
            'campaigns_completion' => CampaignResource::collection(Campaign::orderByDesc('created_at')->paginate(3)),
            'can' => [
                'campaign' => [
                    'create' => Auth::user()->can('create', Campaign::class),
                ],
                'donation' => [
                    'create' => Auth::user()->can('create', Donation::class),
                ],
                'reports' => [
                    'view' => true //Auth::user()->isAdmin()
                ]
            ]
        ]);
    }

    public function fixCampaignCategoryCount(Request $request)
    {
        abort_if(!Auth::user()->isAdmin(), 403);

        $donors = Donor::get();

        DB::beginTransaction();
        try {
            foreach ($donors as $donor) {
                $campaigns = Donation::where('donor_id', $donor->id)->pluck('campaign_id')->toArray();
                $donor->campaigns()->syncWithoutDetaching($campaigns);
                $categories = Campaign::whereIn('id', $campaigns)->pluck('category_id')->toArray();
                $donor->categories()->syncWithoutDetaching($categories);
            }
            DB::commit();
            return back()->with('success','Sync process completed successfully.');
        } catch (\Throwable $th) {
            DB::rollBack();
            return back()->with('error',error_message($th->getMessage()));
        }

    }
}
