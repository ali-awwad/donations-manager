<?php

namespace App\Http\Controllers;

use App\Http\Resources\CampaignResource;
use App\Models\Campaign;
use App\Models\Category;
use App\Models\Donation;
use App\Models\Donor;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Auth;
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
                'labels' => Campaign::pluck('name'),//select(DB::raw("LEFT(name, 16) as short_name"))
                'values' => Campaign::pluck('donations_count'),
            ],
            'categoriesTargetCollected' => [
                'labels' => $collection->all() ? $collection->all()['label'] : null,
                'targetValues' => $collection->all() ? $collection->all()['target'] : null,
                'collectedValues' => $collection->all() ? $collection->all()['collected'] : null,
            ],
            'campaigns_completion' => CampaignResource::collection(Campaign::orderByDesc('created_at')->paginate(3)),
            'donationsData'=>
                [
                    'label'=>'Total Donations '.__(config('services.currency')),
                    'all'=> Donation::selectRaw('year(donation_date) year, monthname(donation_date) month, month(donation_date) monthNumber, sum(amount) / 100 data')
                    ->when(request('year') && request('year')!='Max',function ($q)
                    {
                        $q->whereYear('donation_date',request('year'));
                    })
                    ->groupBy('year', 'month','monthNumber')
                    ->orderBy('year', 'asc')
                    ->orderBy('monthNumber', 'asc')
                    ->get(),
                    // TODO : below omitts the months without donor results.
                    'currentUserDonors' => Donation::selectRaw('year(donation_date) year, monthname(donation_date) month, month(donation_date) monthNumber, sum(amount) / 100 data')
                    ->groupBy('year', 'month','monthNumber')
                    ->orderBy('monthNumber', 'asc')
                    ->orderBy('year', 'asc')
                    ->whereIn('donor_id',Donor::where('user_id',Auth::id())->pluck('id'))
                    ->get(),
                ]
            ,
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
