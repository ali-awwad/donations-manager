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
            'category' => $this->category ? $this->category->name : null,
            'campaign' => $this->campaign ? $this->campaign->name : null,
            'donor' => $this->donor ? $this->donor->name : null,
            'created_at' => $this->created_at_readable,
            'description'=>$this->whenAppended('description',$this->description),
        ];
    }
}
