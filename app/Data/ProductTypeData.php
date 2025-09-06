<?php

namespace App\Data;

use Spatie\LaravelData\Data;

class ProductTypeData extends Data
{
  public function __construct(
    public string $id,
    public string $name,
    public ?string $productsCount,  
    public ?string $created_at,
    public ?string $updated_at,
    public ?string $created_by_user_name,
    public ?string $last_updated_by_user_name,
    public ?string $created_by,
    public ?string $last_updated_by,
  ) {}
}
