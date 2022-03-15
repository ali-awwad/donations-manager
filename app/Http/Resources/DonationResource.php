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
            'amount' => friendly_money($this->amount),
            'category' => $this->category->name,
            'campaign' => $this->campaign->name,
            'donor' => $this->donor->name,
            'created_at' => $this->created_at_readable,
            'description'=>$this->whenAppended('description',$this->description),
        ];
    }
}
