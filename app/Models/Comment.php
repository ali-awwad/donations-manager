<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\App;

class Comment extends Model
{
    use HasFactory, SoftDeletes;

    public function getCreatedAtReadableAttribute()
    {
        if (Carbon::parse($this->attributes['created_at'])->diffInDays(now()) > 7) {
            return Carbon::parse($this->attributes['created_at'])->locale(App::getLocale())->isoFormat('Do MMMM YYYY');
        } else {
            return Carbon::parse($this->attributes['created_at'])->locale(App::getLocale())->diffForHumans();
        }
    }
}
