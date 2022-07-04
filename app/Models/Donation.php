<?php

namespace App\Models;

use App\Traits\Multitenantable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\App;

class Donation extends Model
{
    use HasFactory, SoftDeletes, Multitenantable;

    public function donor()
    {
        return $this->belongsTo(Donor::class);
    }

    public function campaign()
    {
        return $this->belongsTo(Campaign::class);
    }

    public function getCreatedAtAttribute()
    {
        if (Carbon::parse($this->attributes['created_at'])->diffInDays(now()) > 7) {
            return Carbon::parse($this->attributes['created_at'])->locale(App::getLocale())->isoFormat('Do MMMM YYYY');
        } else {
            return Carbon::parse($this->attributes['created_at'])->locale(App::getLocale())->diffForHumans();
        }
    }
    public function getCreatedAtReadableAttribute()
    {
        if (Carbon::parse($this->attributes['created_at'])->diffInDays(now()) > 7) {
            return Carbon::parse($this->attributes['created_at'])->locale(App::getLocale())->isoFormat('Do MMMM YYYY');
        } else {
            return Carbon::parse($this->attributes['created_at'])->locale(App::getLocale())->diffForHumans();
        }
    }
}
