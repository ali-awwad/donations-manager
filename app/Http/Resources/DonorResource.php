<?php

namespace App\Http\Resources;

use App\Models\Campaign;
use App\Models\Category;
use App\Models\Donation;
use Illuminate\Http\Resources\Json\JsonResource;

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
        $categories = Donation::where('donor_id', $this->id)->pluck('category_id')->toArray();
        $campaigns = Donation::where('donor_id', $this->id)->pluck('campaign_id')->toArray();

        return [
            'id' => $this->id,
            'alias' => $this->alias,
            'name' => $this->name,
            'remarks'=>$this->whenAppended('remarks',$this->remarks),
            'total_donations' => friendly_money($this->donations->sum('amount')),
            'categories_count' => Category::whereIn('id', $categories)->count(),
            'campaigns_count' => Campaign::whereIn('id', $campaigns)->count(),
            'donations_count' => $this->donations_count,
        ];
    }
}
