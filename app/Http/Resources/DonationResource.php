<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class DonationResource extends JsonResource
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
            'uuid' => $this->uuid,
            'amount' => friendly_money($this->amount),
            'category_id' => $this->campaign ? $this->campaign->category->id : null,
            'category' => $this->campaign ? $this->campaign->category->name : null,
            'campaign_id' => $this->campaign_id,
            'campaign' => $this->campaign ? $this->campaign->name : null,
            'donor_id' => $this->donor ? $this->donor->id : null,
            'donor' => $this->donor ? $this->donor->name : null,
            'created_at' => $this->created_at_readable,
            'description'=>$this->whenAppended('description',$this->description),
        ];
    }
}
