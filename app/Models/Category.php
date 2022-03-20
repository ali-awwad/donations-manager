<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;

class Category extends Model
{
    use HasFactory, SoftDeletes;

    protected $withCount = ['campaigns'];

    public function campaigns()
    {
        return $this->hasMany(Campaign::class);
    }

    public function getCreatedAtReadableAttribute()
    {
        return Carbon::parse($this->attributes['created_at'])->diffForHumans();
    }

    public function scopePinId(Builder $query, int $id)
    {
        return $query->orderByRaw("CASE WHEN id = {$id} THEN 0 ELSE 1 END");
    }
}
