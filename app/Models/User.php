<?php

namespace App\Models;

use App\Scopes\TenantScope;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
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
        'tenant',
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

    // protected static function booted()
    // {
    //     dd(auth()->check());
    //     static::addGlobalScope(new TenantScope);
    // }

    public function donors()
    {
        return $this->hasMany(Donor::class)->orderByDesc('created_at');
    }

    public function scopeTenant(Builder $query)
    {
        if(Auth::user()->isSuperAdmin()) {
            return $query;
        }
        return $query->where('tenant', auth()->user()->tenant);
    }
    public function scopeSuperAdmin(Builder $query)
    {
        return $query->where('user_type', 'suerAdmin');
    }
    public function scopeAdmin(Builder $query)
    {
        return $query->where('user_type', 'admin');
    }

    public function scopeMember(Builder $query)
    {
        return $query->where('user_type', 'member');
    }

    public function isSuperAdmin()
    {
        return $this->user_type==='superAdmin' ? true : false;
    }

    public function isAdmin()
    {
        return $this->user_type==='admin' ? true : false;
    }

    public function isMember()
    {
        return $this->user_type==='member' ? true : false;
    }

    public function getCreatedAtReadableAttribute()
    {
        if (Carbon::parse($this->attributes['created_at'])->diffInDays(now()) > 7) {
            return Carbon::parse($this->attributes['created_at'])->locale(App::getLocale())->isoFormat('Do MMMM YYYY');
        } else {
            return Carbon::parse($this->attributes['created_at'])->locale(App::getLocale())->diffForHumans();
        }
    }

    public function scopeOrderByRequest($query, $orderBy, $direction)
    {
        return $query->when(strpos($orderBy, '.') !== false, function ($q) use ($orderBy, $direction) {
            $tableName = with(new User)->getTable();
            $tableColArr = explode('.', $orderBy);
            $q->select($tableName . '.*')
                ->join($tableColArr[0], $tableName . '.' . Str::singular($tableColArr[0]) . '_id', '=', $tableColArr[0] . '.id')
                ->groupBy($tableName . '.id')
                ->orderByRaw('max(' . $tableColArr[0] . '.' . $tableColArr[1] . ') ' . $direction ?? 'desc');
        })
            ->when($orderBy == 'last_update_by' || $orderBy == 'created_by', function ($q) use ($orderBy, $direction) {
                $q->join('users', 'users.id', $orderBy)
                    ->orderBy('users.first_name', $direction);
            })
            ->when($orderBy != 'last_update_by' &&  $orderBy != 'created_by' && strpos($orderBy, '.') === false, function ($q) use ($orderBy, $direction) {
                $q->orderBy(
                    $orderBy ?? 'created_at',
                    $direction ?? 'desc'
                );
            });
    }

}
