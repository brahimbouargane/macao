<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\AllowedSort;
use Spatie\QueryBuilder\QueryBuilder;

class Category extends Model implements HasMedia
{
    use HasFactory, InteractsWithMedia;

 // Allow mass assignment for these fields
    protected $fillable = ['name', 'description', 'parent_id'];

    // To automatically include this custom attribute when converting the model to an array or JSON
    protected $appends = ['image'];

    //-----------Relationships--------------------------------
    public function parent()
    {
        return $this->belongsTo(Category::class, 'parent_id');
    }

    public function children()
    {
        return $this->hasMany(Category::class, 'parent_id');
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
                        $query->where('name', 'like', "%{$value}%")
                        ->orWhere('description', 'like', "%{$value}%")
                        ;
                    });
                }),
            ])
            // Allow sorting on specific columns
            ->allowedSorts([
                'id',
                'name',
                'description',
                'created_at',
                'updated_at',
                AllowedSort::field('parentCategory',"name")
            ])
            ->defaultSort('-created_at')
        ;
    }


    //-----------Custom attributes--------------------------------

    public function getImageAttribute()
    {
        return $this->getFirstMedia("category_images")  ? $this->getFirstMedia("category_images")->getUrl('thumbnail') : null;
    }
    public function getParentCategoryAttribute()
    {
        return $this->parent ? [
        'id' => $this->parent->id,
        'name' => $this->parent->name
    ] : null;
    }

    //-----------Media library--------------------------------
    public function registerMediaCollections(): void
    {
        // this will make sure  the user has one avatar image and will delete the previous one on update
        $this->addMediaCollection('category_images')->singleFile();
    }

    public function registerMediaConversions(?Media $media = null): void
    {
        $this
            ->addMediaConversion('thumbnail')
            ->performOnCollections('category_images')
            ->nonQueued()
            ->width(30)
            ->height(30)
            ->format('webp');
        $this
            ->addMediaConversion('optimized')
            ->performOnCollections('category_images')
            ->nonQueued()
            ->format('webp');
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
