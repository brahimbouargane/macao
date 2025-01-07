<?php

namespace App\Data;

use Spatie\LaravelData\Data;

class CanData extends Data
{
  public function __construct(
    public bool $VIEW_ANY_USER,
    public bool $VIEW_USER,
    public bool $CREATE_USER,
    public bool $UPDATE_USER,
    public bool $DELETE_USER,
  ) {}
}
