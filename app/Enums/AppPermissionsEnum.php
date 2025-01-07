<?php

namespace App\Enums;

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Gate;

enum AppPermissionsEnum: string
{


  case VIEW_ANY_USER = "view-any";
  case VIEW_USER = "view";
  case CREATE_USER = "create";
  case UPDATE_USER = "update";
  case DELETE_USER = "delete";



  public static function getUserAbilities(): array
  {
    return [


      "VIEW_ANY_USER" => Auth::user() ? Gate::allows(self::VIEW_ANY_USER, User::class) : false,
      "VIEW_USER" => Auth::user() ? Gate::allows(self::VIEW_USER, User::class) : false,
      "CREATE_USER" => Auth::user() ? Gate::allows(self::CREATE_USER, User::class) : false,
      "UPDATE_USER" => Auth::user() ? Gate::allows(self::UPDATE_USER, User::class) : false,
      "DELETE_USER" => Auth::user() ? Gate::allows(self::DELETE_USER, User::class) : false,



    ];
  }
}
