<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\App;

class Donor extends Model
{
    use HasFactory, SoftDeletes;

    protected $withCount = ['donations','categories','campaigns'];

    public function donations()
    {
        return $this->hasMany(Donation::class);
    }
    public function campaigns()
    {
        return $this->belongsToMany(Campaign::class);
    }
    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function getCreatedAtReadableAttribute()
    {
        if (Carbon::parse($this->attributes['created_at'])->diffInDays(now()) > 7) {
            return Carbon::parse($this->attributes['created_at'])->locale(App::getLocale())->isoFormat('Do MMMM YYYY');
        } else {
            return Carbon::parse($this->attributes['created_at'])->locale(App::getLocale())->diffForHumans();
        }
    }

    public function scopePinId(Builder $query, int $id)
    {
        return $query->orderByRaw("CASE WHEN id = {$id} THEN 0 ELSE 1 END");
    }

}
