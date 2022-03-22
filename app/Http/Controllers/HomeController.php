<?php

namespace App\Http\Controllers;

use App\Http\Resources\CampaignResource;
use App\Models\Campaign;
use App\Models\Category;
use App\Models\Donation;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function dashboard()
    {

        $categories = Category::get();

        $labels = [];
        foreach ($categories as $key => $category) {
            $labels['label'][] = $category->name;
            $labels['target'][] = friendly_money(Campaign::where('category_id',$category->id)->sum('target'));
            $labels['collected'][] = friendly_money(Donation::whereIn('campaign_id',Campaign::where('category_id',$category->id)->pluck('id')->values())->sum('amount'));
        }
        $collection = collect($labels);

        // dd($collection->all()['label']);
        // dd($collection);

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
                'labels' => $collection->all()['label'],
                'targetValues' => $collection->all()['target'],
                'collectedValues' => $collection->all()['collected'],
            ],
            'campaigns_completion' => CampaignResource::collection(Campaign::orderByDesc('created_at')->paginate(3))
        ]);
    }
}
