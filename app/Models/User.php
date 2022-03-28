<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function donors()
    {
        return $this->hasMany(Donor::class)->orderByDesc('created_at');
    }

    public function scopeAdmin(Builder $query)
    {
        return $query->where('user_type', 'admin');
    }

    public function scopeMember(Builder $query)
    {
        return $query->where('user_type', 'member');
    }

    public function isAdmin()
    {
        return $this->user_type==='admin' ? true : false;
    }

    public function isMember()
    {
        return $this->user_type==='member' ? true : false;
    }


}
