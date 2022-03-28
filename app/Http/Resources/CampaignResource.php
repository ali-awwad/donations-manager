<?php

namespace App\Http\Resources;

use App\Models\Campaign;
use App\Models\Donation;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class CampaignResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'slug' => $this->slug,
            'target' => friendly_money($this->target),
            'category' => $this->category ? $this->category->name : null,
            'category_id' => $this->category ? $this->category->id : null,
            'collected' => friendly_money(Donation::where('campaign_id', $this->id)->sum('amount')),
            'percentage' => completion_ratio($this->donations->sum('amount'), $this->target),
            'description'=>$this->whenAppended('description',$this->description),
            'can'=> [
                'view'=>Auth::user()->can('view',Campaign::find($this->id)),
                'update'=>Auth::user()->can('update',Campaign::find($this->id)),
                'delete'=>Auth::user()->can('delete',Campaign::find($this->id))
            ]
        ];
    }
}
