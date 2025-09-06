<?php

namespace App\Transformers;

use App\Data\UserReferenceData;

class UserReferenceDataTransformer
{
  /**
   * Transform the UserReferenceData.
   *
   * @param UserReferenceData $userReferenceData
   * @return array
   */
  public function transform(UserReferenceData $userReferenceData)
  {
    return [
      'id' => $userReferenceData->id,
      'name' => $userReferenceData->name,
    ];
  }
}
