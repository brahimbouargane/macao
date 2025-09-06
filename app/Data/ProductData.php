<?php

namespace App\Data;

use Spatie\LaravelData\Attributes\DataCollectionOf;
use Spatie\LaravelData\Data;
use Spatie\LaravelData\DataCollection;

class ProductData extends Data
{
  public function __construct(
    public string $id,
    public string $ref,
    public ?string $name,
    public ?string $description,
    public ?string $name_en,
    public ?string $description_en,
    public ?ImageConversionData $primaryImage,

    #[DataCollectionOf(CategoryData::class)]
    public ?DataCollection $categories,

    public ?array $categoriesNames,
    #[DataCollectionOf(ImageConversionData::class)]
    public ?DataCollection $secondaryImages,

    public ?BrandData $brand,
    public ?ProductTypeData $product_type,
    public ?float $price,
    public ?float $weight,
    public ?string $packaging,
    public ?string $tc_20,
    public ?string $tc_40,
    public bool $active,
    public ?string $updated_at,
    public string $created_at,
    public ?string $created_by_user_name,
    public ?string $last_updated_by_user_name,
    public ?string $created_by,
    public ?string $last_updated_by,

  ) {}
}
