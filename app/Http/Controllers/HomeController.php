<?php

namespace App\Http\Controllers;

use App\Models\Campaign;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function dashboard()
    {
        return Inertia::render('Home',[
            'title'=>'My Dashboard',
            'categories'=> [
                'labels'=> Category::pluck('name'),
                'colors'=>Category::select('id')->get()->map(function ($category)
                {
                    return '#' . str_pad(dechex(mt_rand(0, 0xFFFFFF)), 6, '0', STR_PAD_LEFT);
                }),
                'values'=>Category::pluck('campaigns_count'),
            ],
            'campaigns'=> [
                'labels'=> Campaign::pluck('name'),
                'values'=>Campaign::pluck('donations_count'),
            ],
            'campaigns_completion'=>Campaign::orderByDesc('created_at')->paginate(3)->through(function ($campaign)
            {
                return [
                    'name'=>$campaign->name,
                    'donations_count'=>$campaign->donations_count,
                    'created_at'=>Carbon::parse($campaign->created_at)->diffForHumans(),
                    'target'=>$campaign->target,
                    'collected'=>$campaign->donations->sum('amount'),
                    'percentage'=>number_format((float)($campaign->donations->sum('amount') / $campaign->target), 2, '.', '') * 100,
                ];
            })
        ]);
    }
}
