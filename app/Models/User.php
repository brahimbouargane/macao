<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Cache;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;


class User extends Authenticatable implements  HasMedia
{
    use HasFactory, Notifiable,  InteractsWithMedia;

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

    // To automatically include this custom attribute when converting the model to an array or JSON
    protected $appends = ['avatar'];

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
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }



    //-----------Custom filter function--------------------------------
    public function scopeAdvancedFilter($query)
    {
        return QueryBuilder::for($query)
            // Allow global search across multiple columns
            ->allowedFilters([
                AllowedFilter::callback('search', function (Builder $query, $value) {
                    $value = is_array($value) ?  \implode($value) : $value;
                    // Assuming you want to search across multiple fields
                    return $query->where(function ($query) use ($value) {
                        $query->where('email', 'like', "%{$value}%");
                    });
                }),
            ])
            // Allow sorting on specific columns
            ->allowedSorts([
                'id',
                'email',
                'created_at',
                'updated_at',
                'email_verified_at',

            ])
            ->allowedFields([
                'email',
            ])
            ->defaultSort('-created_at')
        ;
    }

    //-----------Custom attributes--------------------------------
    public function getAvatarAttribute()
    {
        return $this->getFirstMedia("avatars")  ? $this->getFirstMedia("avatars")->getUrl('thumbnail') : null;
    }
 


    //-----------Media library--------------------------------
    public function registerMediaCollections(): void
    {
        // this will make sure  the user has one avatar image and will delete the previous one on update
        $this->addMediaCollection('avatars')->singleFile();
    }

    public function registerMediaConversions(?Media $media = null): void
    {
        //
        $this
            ->addMediaConversion('thumbnail')
            ->performOnCollections('avatars')
            ->nonQueued()
        ->width(30)
            ->height(30)
            ->format('webp');
        $this
            ->addMediaConversion('optimized')
            ->performOnCollections('avatars')
            ->nonQueued()
            ->format('webp');
    }





    //--------------Local Query Scopes :)----------------
    public function scopeVerified($query, $verified = true)
    {
        if ($verified) {
            return $query->whereNotNull('email_verified_at');
        } else {
            return $query->whereNull('email_verified_at');
        }
    }


    public static function booted()
    {
        //--------------Caching----------------
        static::created(function ($model) {
            $count = $model::count();

            $modelName = strtolower(basename(str_replace('\\', '/', get_class($model))));
            Cache::forever($modelName . '_count', $count);
        });

        static::deleted(function ($model) {
            $count = $model::count();
            $modelName = strtolower(basename(str_replace('\\', '/', get_class($model))));
            Cache::forever($modelName . '_count', $count);
        });
    }
}
