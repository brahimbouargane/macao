<?php

namespace App\Models;

use App\Data\ImageConversionData;
use App\Notifications\CustomResetPasswordNotification;
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


class User extends Authenticatable implements HasMedia
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
        "role",
        'password',
        "created_by",
        "last_updated_by"
    ];

    // To automatically include this custom attribute when converting the model to an array or JSON
    protected $appends = [
        'avatar',
        "created_by_user_name",
        "last_updated_by_user_name"
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
                    $query->where('email', 'like', "%{$value}%")
                        ->orWhere('name', 'like', "%{$value}%")
                    ;
                    });
                }),

            // Custom filter
            ...\createNumberFilters('id'),
            ...\createStringFilters('name'),
            ...\createStringFilters('email'),
            ...\createOneToManyStatusFilters("role"),
            ...\createDateFilters('created_at'),
            ...\createDateFilters('updated_at'),
            ...\createOneToManyStatusFilters('created_by'),
            ...\createOneToManyStatusFilters('last_updated_by'),
                //-----------------------
            ])
            // Allow sorting on specific columns
            ->allowedSorts([
                'id',
            'name',
            'role',
                'email',
                'created_at',
                'updated_at',
            'created_by',
            'last_updated_by',

            ])
            ->allowedFields([
                'email',
            ])
            ->defaultSort('-created_at')
        ;
    }

    //-----------Custom attributes--------------------------------

    public function getAvatarAttribute(): ImageConversionData
    {
        $media = $this->getFirstMedia('avatars');

        return new ImageConversionData(
            thumbnail: $media ? $media->getUrl('thumbnail') : null,
            optimized: $media ? $media->getUrl('optimized') : null,
        );
    }

    public function getCreatedByUserNameAttribute()
    {
        if (!$this->created_by) {
            return null;
        }

        $creator = self::find($this->created_by);

        return $creator ? $creator->name : null;
    }


    public function getLastUpdatedByUserNameAttribute()
    {
        if (!$this->last_updated_by) {
            return null;
        }

        $updater = self::find($this->last_updated_by);

        return $updater ?  $updater->name : null;
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

    // override class methods
    public function sendPasswordResetNotification(#[\SensitiveParameter] $token)
    {
        $this->notify(new CustomResetPasswordNotification($token));
    }
}
