<?php

namespace App\Http\Resources;

use App\Models\Category;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class CategoryResource extends JsonResource
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
            'campaigns_count' => $this->campaigns_count,
            'color' => $this->color,
            'created_at' => $this->created_at_readable,
            'description'=>$this->whenAppended('description',$this->description),
            'can'=> [
                'view'=>Auth::user()->can('view'$this->resource),
                'update'=>Auth::user()->can('update',$this->resource),
                'delete'=>Auth::user()->can('delete',$this->resource)
            ]
        ];
    }
}
