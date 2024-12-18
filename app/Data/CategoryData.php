<?php

namespace App\Data;

use Spatie\LaravelData\Data;

class CategoryData extends Data
{
    public function __construct(
    public string $id,
    public string $name,
    public ?string $description,
    public ?string $image,
    public ?CategoryData $parentCategory,
    public ?string $parent_id,
    public ?string $created_at,
    public ?string $updated_at,
    ) {}
}
