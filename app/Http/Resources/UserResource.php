<?php

namespace App\Http\Resources;

use App\Models\User;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class UserResource extends JsonResource
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
            'id'=>$this->id,
            'email'=>$this->email,
            'name'=>$this->name,
            'donors'=>$this->donors,
            'verified'=>$this->verified_at ? 'Verified' : 'NA',
            'user_type'=>$this->user_type,
            'can'=> [
                'view'=>Auth::user()->can('view',$this->resource),
                'update'=>Auth::user()->can('update',$this->resource),
                'delete'=>Auth::user()->can('delete',$this->resource)
            ]
        ];
    }
}
