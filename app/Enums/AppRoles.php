<?php

namespace App\Enums;

enum AppRoles: string
{
    case ADMIN = 'admin';
    case MANAGER = 'manager';



    public static function options(): array
    {
        return [
            self::ADMIN->value,
            self::MANAGER->value,
        ];
    }
}
