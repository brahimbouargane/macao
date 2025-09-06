<?php

namespace App\Data;

use Spatie\LaravelData\Data;

class UserData extends Data
{
  public function __construct(
    public string $id,
    public string $name,
    public string $email,
    public string $role,
    public ?ImageConversionData $avatar, 
    public ?string $email_verified_at,
    public ?string $created_by_user_name,
    public ?string $last_updated_by_user_name,
    public ?string $created_by,
    public ?string $last_updated_by,
    public string $created_at,
    public string $updated_at,
  ) {}
}
