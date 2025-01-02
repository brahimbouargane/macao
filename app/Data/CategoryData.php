<?php

namespace App\Data;

use App\Models\Category;
use Spatie\LaravelData\Attributes\DataCollectionOf;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;

class CategoryData extends Data
{
    public function __construct(
    public string $id,
    public string $name,
    public ?string $description,
    public ?string $image,
        public ?string $optimizedImage,

        #[DataCollectionOf(CategoryData::class)]
        public ?DataCollection $parentCategories,
        public ?array $childCategoriesNames,
        public ?array $parentCategoriesNames,    
    public ?string $created_at,
    public ?string $updated_at,
    ) {}
}
