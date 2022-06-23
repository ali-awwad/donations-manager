<?php

namespace App\Http\Resources;

use App\Models\Campaign;
use App\Models\Category;
use App\Models\Donation;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class DonorResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        $campaigns = Donation::where('donor_id', $this->id)->pluck('campaign_id')->toArray();
        $categories = Campaign::whereIn('id',$campaigns)->pluck('category_id')->toArray();

        return [
            'id' => $this->id,
            'alias' => $this->alias,
            'name' => $this->name,
            'user_id' => $this->user_id,
            'user' => UserResource::make($this->user),
            'remarks'=>$this->whenAppended('remarks',$this->remarks),
            'total_donations' => __('AED').' '. friendly_money($this->donations->sum('amount')),
            'categories_count' => Category::whereIn('id', $categories)->count(),
            'campaigns_count' => Campaign::whereIn('id', $campaigns)->count(),
            'donations_count' => $this->donations_count,
            'can'=> [
                'view'=>Auth::user()->can('view',$this->resource),
                'update'=>Auth::user()->can('update',$this->resource),
                'delete'=>Auth::user()->can('delete',$this->resource)
            ]
        ];
    }
}
