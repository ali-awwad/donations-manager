<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Campaign extends Model
{
    use HasFactory, SoftDeletes;

    protected $withCount = ['donations'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function getCreatedAtReadableAttribute()
    {
        return Carbon::parse($this->attributes['created_at'])->diffForHumans();
    }

    public function donations()
    {
        return $this->hasMany(Donation::class);
    }

    public function scopePinId(Builder $query, int $id)
    {
        return $query->orderByRaw("CASE WHEN id = {$id} THEN 0 ELSE 1 END");
    }
}
