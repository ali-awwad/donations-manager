<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;

class Donation extends Model
{
    use HasFactory, SoftDeletes;

    public function donor()
    {
        return $this->belongsTo(Donor::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    public function Campaign()
    {
        return $this->belongsTo(Campaign::class);
    }

    public function getCreatedAtAttribute()
    {
        return Carbon::parse($this->attributes['created_at'])->diffForHumans();
    }
    public function getCreatedAtReadableAttribute()
    {
        return Carbon::parse($this->attributes['created_at'])->diffForHumans();
    }
}
