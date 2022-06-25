<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

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
            'amount' => __(config('services.currency')).' '.friendly_money($this->amount),
            'amount_raw' => $this->amount,
            'category'=> [
                'id'=>$this->campaign && $this->campaign->category ? $this->campaign->category->id : null,
                'name'=>$this->campaign && $this->campaign->category ? $this->campaign->category->name : null,
            ],
            'donor'=> [
                'id'=>$this->donor ? $this->donor->id : null,
                'name'=>$this->donor ? $this->donor->name : null,
            ],
            'campaign'=> [
                'id'=>$this->campaign ? $this->campaign->id : null,
                'name'=>$this->campaign ? $this->campaign->name : null,
            ],
            'created_at' => $this->created_at_readable,
            'donation_date' => $this->donation_date,
            'description'=>$this->whenAppended('description',$this->description),
            'can'=> [
                'view'=>Auth::user()->can('view',$this->resource),
                'update'=>Auth::user()->can('update',$this->resource),
                'delete'=>Auth::user()->can('delete',$this->resource)
            ]
        ];
    }
}
