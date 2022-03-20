<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;

class Donor extends Model
{
    use HasFactory, SoftDeletes;

    protected $withCount = ['donations'];

    public function donations()
    {
        return $this->hasMany(Donation::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function getCreatedAtReadableAttribute()
    {
        return Carbon::parse($this->attributes['created_at'])->diffForHumans();
    }

}
