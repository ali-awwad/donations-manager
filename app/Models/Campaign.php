<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Campaign extends Model
{
    use HasFactory, SoftDeletes;

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function getTargetAttribute()
    {
        return number_format((float)($this->attributes['target'] / 100), 2, '.', '');
    }
}
