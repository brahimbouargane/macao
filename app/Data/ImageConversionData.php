<?php

namespace App\Data;

use Spatie\LaravelData\Data;

class ImageConversionData extends Data
{
  public function __construct(
    public ?string $thumbnail,
    public ?string $optimized,
  ) {}
}
