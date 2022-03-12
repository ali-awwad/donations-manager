<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Donation extends Model
{
    use HasFactory, SoftDeletes;

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    public function Campaign()
    {
        return $this->belongsTo(Campaign::class);
    }


    public function getAmountAttribute()
    {
        return number_format((float)($this->attributes['amount'] / 100), 2, '.', '');
    }
}
