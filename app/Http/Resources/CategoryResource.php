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
            'description'=>$this->whenAppended('description',$this->description),
            'can'=> [
                'view'=>Auth::user()->can('view',Category::find($this->id)),
                'update'=>Auth::user()->can('update',Category::find($this->id)),
                'delete'=>Auth::user()->can('delete',Category::find($this->id))
            ]
        ];
    }
}
