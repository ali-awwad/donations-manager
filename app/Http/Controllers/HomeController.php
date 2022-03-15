<?php

namespace App\Http\Controllers;

use App\Http\Resources\CampaignResource;
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
                'colors'=>Category::pluck('color'),
                'values'=>Category::pluck('campaigns_count'),
            ],
            'campaigns'=> [
                'labels'=> Campaign::pluck('name'),
                'values'=>Campaign::pluck('donations_count'),
            ],
            'campaigns_completion'=>CampaignResource::collection(Campaign::orderByDesc('created_at')->paginate(3))
        ]);
    }
}
