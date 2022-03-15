<?php

namespace App\Http\Resources;

use App\Models\Donation;
use Illuminate\Http\Resources\Json\JsonResource;

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
            'category' => $this->category->name,
            'collected' => friendly_money(Donation::where('this_id', $this->id)->sum('amount')),
            'percentage' => completion_ratio($this->donations->sum('amount'), $this->target),
            'description'=>$this->whenAppended('description',$this->description),
        ];
    }
}
