<?php

namespace App\Models;

use App\Data\ImageConversionData;
use App\Sorts\CategoryNameSort;
use App\Sorts\ProductCountSort;
use App\Sorts\ReferenceCountSort;
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

class Product extends Model implements HasMedia
{
    /** @use HasFactory<\Database\Factories\ProductFactory> */
    use HasFactory, InteractsWithMedia;

    protected $fillable = [
        'ref',
        'name',
        'type',
        'description',
        'price',
        'weight',
        'packaging',
        'tc_20',
        'tc_40',
        'brand_id',
        'product_type_id',
        "created_by",
        "last_updated_by"
    ];
    protected $appends = [
        'primaryImage',
        'secondaryImages',
        'categoriesNames',
        "created_by_user_name",
        "last_updated_by_user_name"
    ];


    //-----------Relationships--------------------------------
    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    public function brand()
    {
        return $this->belongsTo(Brand::class);
    }

    public function productType()
    {
        return $this->belongsTo(ProductType::class);
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

            // Custom filter
            ...\createNumberFilters('id'),
            ...\createStringFilters('ref'),
            ...\createStringFilters('name'),
            ...\createStringFilters('description'),
            ...\createOneToManyStatusFilters("brand", true),
            ...\createDateFilters('created_at'),
            ...\createDateFilters('updated_at'),
            ...\createOneToManyStatusFilters('created_by'),
            ...\createOneToManyStatusFilters('last_updated_by'),
            ...\createManyToManyStatusFilters('categories', "category_id")
                //-----------------------    
            ])
            // Allow sorting on specific columns
            ->allowedSorts([
                'id',
                'name',
                'type',
                'ref',
                'description',

            AllowedSort::field("product_type", "product_type_id"),
            AllowedSort::field("brand", "brand_id"),
                'created_at',
                'updated_at',
            "created_by",
            "last_updated_by",
            AllowedSort::custom('category', new CategoryNameSort()),

            ])
            ->defaultSort('-created_at')
        ;
    }

    //-----------Custom attributes--------------------------------
    public function getPrimaryImageAttribute(): ImageConversionData
    {
        $media = $this->getFirstMedia('product_primary_image');

        return new ImageConversionData(
            thumbnail: $media ? $media->getUrl('thumbnail') : null,
            optimized: $media ? $media->getUrl('optimized') : null,
        );
    }
    public function getSecondaryImagesAttribute(): array
    {
        $media = $this->getMedia('product_secondary_images');
        $result = [];

        foreach ($media as $singleMedia) {
            $result[] =  new ImageConversionData(
                thumbnail: $singleMedia ? $singleMedia->getUrl('thumbnail') : null,
                optimized: $singleMedia ? $singleMedia->getUrl('optimized') : null,
            );
        }

        return $result;
    }

    public function getCategoriesNamesAttribute()
    {
        return $this->categories()->pluck('name')->toArray();
    }

    public function getCreatedByUserNameAttribute()
    {
        if (!$this->created_by) {
            return null;
        }

        $creator = User::find($this->created_by);

        return $creator ? $creator->name : null;
    }


    public function getLastUpdatedByUserNameAttribute()
    {
        if (!$this->last_updated_by) {
            return null;
        }

        $updater = User::find($this->last_updated_by);

        return $updater ?  $updater->name : null;
    }





    //-----------Media library--------------------------------
    public function registerMediaCollections(): void
    {
        // this will make sure  the user has one avatar image and will delete the previous one on update
        $this->addMediaCollection('product_primary_image')->singleFile();


        $this->addMediaCollection('product_secondary_images');
    }

    public function registerMediaConversions(?Media $media = null): void
    {

        // primary image
        $this
            ->addMediaConversion('thumbnail')
            ->performOnCollections('product_primary_image')
            ->nonQueued()
            ->width(100)
            ->height(100)
            ->format('webp');
        $this
            ->addMediaConversion('optimized')
            ->performOnCollections('product_primary_image')
        ->nonQueued()
            ->format('webp');

        //secondary images
        $this
            ->addMediaConversion('thumbnail')
            ->performOnCollections('product_secondary_images')
        ->width(150)
            ->height(100)
            ->nonQueued()
            ->format('webp');


        $this
            ->addMediaConversion('optimized')
            ->performOnCollections('product_secondary_images')

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
