<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Auth;

trait Multitenantable
{
    protected static function bootMultitenantable()
    {
        if (auth()->check()) {
            static::creating(function ($model) {
                $model->tenant = auth()->user()->tenant;
            });

            if (!Auth::user()->isSuperAdmin()) {
                static::addGlobalScope('tenant', function (Builder $builder) {
                    $builder->where((new self())->getTable().'.tenant', auth()->user()->tenant);
                });
            }
        }
    }
}
