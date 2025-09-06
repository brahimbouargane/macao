<?php


use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Carbon;
use Spatie\QueryBuilder\AllowedFilter;

if (! function_exists('flashMessage')) {
    function flashMessage($type, $message): void
    {
        session()->flash('type', $type);
        session()->flash('message', $message);
    }
}


if (! function_exists('translations')) {
    function translations($json)
    {
        if (!file_exists($json)) {
            return [];
        }
        return json_decode(file_get_contents($json), true);
    }
}



if (! function_exists('createStringFilters')) {

    function createStringFilters(string $field): array
    {
        $validSuffixes = [
            '_ct' => 'like',
            '_nct' => 'not like',
            '_sw' => 'like',
            '_ew' => 'like',
            '_nsw' => 'not like',
            '_new' => 'not like',
            '_eq' => '=',
            '_neq' => '!='
        ];

        $filters = [];
        foreach ($validSuffixes as $suffix => $operator) {
            $filters[] = AllowedFilter::callback("{$field}{$suffix}", function (Builder $query, $value) use ($field, $operator, $suffix) {
                $value = match ($suffix) {
                    '_ct', '_nct' => "%{$value}%",
                    '_sw', '_nsw' => "{$value}%",
                    '_ew', '_new' => "%{$value}",
                    default => $value
                };

                return $query->where($field, $operator, $value);
            });
        }

        return $filters;
    }
}


if (! function_exists('createDateFilters')) {
    function createDateFilters(string $fieldName): array
    {
        // Single Date Value Filters (1–6)
        $singleDateFilters = [
            "{$fieldName}_ib" => '<', // Is Before
            "{$fieldName}_ia" => '>', // Is After
            "{$fieldName}_eqoib" => '<=', // Equals Or Is Before
            "{$fieldName}_eqoia" => '>=', // Equals Or Is After
            "{$fieldName}_eq" => '=', // Equals
            "{$fieldName}_neq" => '!=', // Does Not Equal
        ];

        // Range Date Filters (7–8)
        $rangeDateFilters = [
            "{$fieldName}_bt" => 'between', // Is Between
            "{$fieldName}_nbt" => 'not between', // Is Not Between
        ];

        // Null and Non-Null Filters (9–10)
        $nullFilters = [
            "{$fieldName}_is" => '!= null', // Is Set
            "{$fieldName}_nis" => '= null', // Is Not Set
        ];

        $filters = [];

        // Apply Single Date Filters
        foreach ($singleDateFilters as $suffix => $operator) {
            $filters[] = AllowedFilter::callback($suffix, function (Builder $query, $value) use ($operator, $fieldName) {
                // Try parsing the date value
                $value = parseDateValue($value);
                // If the value is null (invalid date), skip this filter
                if ($value === null) {
                    return $query;
                }
                return $query->whereDate($fieldName, $operator, $value);
            });
        }

        // Apply Range Date Filters
        foreach ($rangeDateFilters as $suffix => $operator) {
            $filters[] = AllowedFilter::callback($suffix, function (Builder $query, $value) use ($operator, $fieldName) {
                // Extract two dates from the range (e.g., "2024-11-01 to 2025-01-24")
                $dates = explode(' to ', $value);
                if (count($dates) === 2) {
                    $startDate = parseDateValue($dates[0]);
                    $endDate = parseDateValue($dates[1]);

                    // Only apply the filter if both dates are valid
                    if ($startDate && $endDate) {
                        return $query->whereBetween($fieldName, [$startDate, $endDate]);
                    }
                }
                // If the range is malformed or parsing fails, return unmodified query
                return $query;
            });
        }

        // Apply Null and Non-Null Filters
        foreach ($nullFilters as $suffix => $operator) {

            $filters[] = AllowedFilter::callback($suffix, function (Builder $query) use ($operator, $fieldName) {
                // For "_is" (Is Set), check if the field is NOT null
                if ($operator === '!= null') {
                    return $query->whereNotNull($fieldName);
                }

                // For "_nis" (Is Not Set), check if the field is null
                if ($operator === '= null') {
                    return $query->whereNull($fieldName);
                }

                return $query; // Return the query as-is for other cases
            });
        }
        return $filters;
    }
}


// numbers  by default filter 
if (! function_exists('createNumberFilters')) {
    function createNumberFilters(string $fieldName): array
    {
        // Single Number Value Filters (1–6)
        $singleNumberFilters = [
            "{$fieldName}_eq" => '=', // Equals
            "{$fieldName}_neq" => '!=', // Does Not Equal
            "{$fieldName}_gt" => '>', // Greater Than
            "{$fieldName}_gte" => '>=', // Greater Than or Equal
            "{$fieldName}_lt" => '<', // Less Than
            "{$fieldName}_lte" => '<=', // Less Than or Equal
        ];

        // Range Number Filters (7–8)
        $rangeNumberFilters = [
            "{$fieldName}_bt" => 'between', // Is Between
            "{$fieldName}_nbt" => 'not between', // Is Not Between
        ];

        $filters = [];

        // Apply Single Number Filters
        foreach ($singleNumberFilters as $suffix => $operator) {
            $filters[] = AllowedFilter::callback($suffix, function (Builder $query, $value) use ($operator, $fieldName) {
                // Ensure the value is numeric
                if (!is_numeric($value)) {
                    return $query; // Skip the filter if the value is not numeric
                }
                return $query->where($fieldName, $operator, (float) $value);
            });
        }

        // Apply Range Number Filters
        foreach ($rangeNumberFilters as $suffix => $operator) {
            $filters[] = AllowedFilter::callback($suffix, function (Builder $query, $value) use ($operator, $fieldName) {
                // Expect a string like "10and20" and split into two numbers
                $values = explode('and', $value);
                if (count($values) === 2 && is_numeric($values[0]) && is_numeric($values[1])) {
                    $start = (float) $values[0];
                    $end = (float) $values[1];
                    if ($operator === 'between') {
                        return $query->whereBetween($fieldName, [$start, $end]);
                    } elseif ($operator === 'not between') {
                        return $query->whereNotBetween($fieldName, [$start, $end]);
                    }
                }
                return $query; // Skip the filter if the range is invalid
            });
        }

        return $filters;
    }
}


// custom field numbers filter
if (!function_exists('createCustomNumberFilters')) {
    function createCustomNumberFilters(string $fieldName, callable $subqueryCallback): array
    {
        // Single Number Value Filters (1–6)
        $singleNumberFilters = [
            "{$fieldName}_eq" => '=', // Equals
            "{$fieldName}_neq" => '!=', // Does Not Equal
            "{$fieldName}_gt" => '>', // Greater Than
            "{$fieldName}_gte" => '>=', // Greater Than or Equal
            "{$fieldName}_lt" => '<', // Less Than
            "{$fieldName}_lte" => '<=', // Less Than or Equal
        ];

        // Range Number Filters (7–8)
        $rangeNumberFilters = [
            "{$fieldName}_bt" => 'between', // Is Between
            "{$fieldName}_nbt" => 'not between', // Is Not Between
        ];

        $filters = [];

        // Apply Single Number Filters
        foreach ($singleNumberFilters as $suffix => $operator) {
            $filters[] = AllowedFilter::callback($suffix, function (Builder $query, $value) use ($operator, $subqueryCallback) {
                if (!is_numeric($value)) {
                    return $query; // Skip the filter if the value is not numeric
                }

                // Apply the subquery as a condition
                $query->whereRaw("({$subqueryCallback()}) {$operator} ?", [(float) $value]);

                return $query;
            });
        }

        // Apply Range Number Filters
        foreach ($rangeNumberFilters as $suffix => $operator) {
            $filters[] = AllowedFilter::callback($suffix, function (Builder $query, $value) use ($operator, $subqueryCallback) {
                // Expect a string like "10and20" and split into two numbers
                $values = explode('and', $value);

                if (count($values) === 2 && is_numeric($values[0]) && is_numeric($values[1])) {
                    $start = (float) $values[0];
                    $end = (float) $values[1];

                    if ($operator === 'between') {
                        $query->whereRaw("({$subqueryCallback()}) BETWEEN ? AND ?", [$start, $end]);
                    } elseif ($operator === 'not between') {
                        $query->whereRaw("({$subqueryCallback()}) NOT BETWEEN ? AND ?", [$start, $end]);
                    }
                }

                return $query;
            });
        }

        return $filters;
    }
}




if (! function_exists('createOneToManyStatusFilters')) {
    function createOneToManyStatusFilters(string $fieldName, bool $withId = false): array
    {

        $statusFilters = [
            "{$fieldName}_in" => 'in', // Is In
            "{$fieldName}_nin" => 'not in', // Is Not In
            "{$fieldName}_eq" => '=', // Equals
            "{$fieldName}_neq" => '!=', // Does Not Equal
        ];

        $filters = [];

        foreach ($statusFilters as $suffix => $operator) {
            $filters[] = AllowedFilter::callback($suffix, function (Builder $query, $value) use ($operator, $fieldName, $withId) {

                $fieldName = $withId ? $fieldName . '_id' : $fieldName;
                $value = transformEnumDataOptions($fieldName, $value);

                if (in_array($operator, ['in', 'not in'])) {
                    // Ensure the value is an array for "Is In" and "Is Not In"
                    if (is_string($value)) {
                        $value = array_map('trim', explode(',', $value));
                    }

                    if (!is_array($value) || empty($value)) {
                        return $query; // Skip invalid values
                    }
                    return $operator === 'in'
                        ? $query->whereIn($fieldName, array_values($value))
                        : $query->whereNotIn($fieldName, array_values($value));
                }

                // Handle single-value operators ("Equals" and "Does Not Equal")
                if (!is_string($value) || trim($value) === '') {
                    return $query; // Skip invalid values
                }

                return $query->where($fieldName, $operator, trim($value));
            });
        }

        return $filters;
    }
}


if (! function_exists('parseDateValue')) {
    function parseDateValue($value)
    {
        try {
            // Parse and convert the date value to a valid format using Carbon
            return Carbon::parse($value)->toDateString();
        } catch (\Exception $e) {
            // Return null if the date is invalid (instead of throwing an exception)
            return null;
        }
    }
}



if (! function_exists('createManyToManyStatusFilters')) {
    function createManyToManyStatusFilters(string $relationName, string $pivotField = 'id'): array
    {
        $statusFilters = [
            "{$relationName}_in" => 'in', // Is In
            "{$relationName}_nin" => 'not in', // Is Not In
            "{$relationName}_eq" => '=', // Equals
            "{$relationName}_neq" => '!=', // Does Not Equal
        ];

        $filters = [];

        foreach ($statusFilters as $suffix => $operator) {
            $filters[] = AllowedFilter::callback($suffix, function (Builder $query, $value) use ($operator, $relationName, $pivotField) {
                // Ensure the value is an array for "Is In" and "Is Not In"
                if (in_array($operator, ['in', 'not in'])) {
                    if (is_string($value)) {
                        $value = array_map('trim', explode(',', $value));
                    }

                    if (!is_array($value) || empty($value)) {
                        return $query; // Skip invalid values
                    }

                    return $query->whereHas($relationName, function ($query) use ($operator, $pivotField, $value) {
                        $operator === 'in'
                            ? $query->whereIn($pivotField, array_values($value))
                            : $query->whereNotIn($pivotField, array_values($value));
                    });
                }

                // Handle single-value operators ("Equals" and "Does Not Equal")
                if (!is_string($value) || trim($value) === '') {
                    return $query; // Skip invalid values
                }

                return $query->whereHas($relationName, function ($query) use ($operator, $pivotField, $value) {
                    $query->where($pivotField, $operator, trim($value));
                });
            });
        }

        return $filters;
    }
}

// Method to safely parse the date value without throwing exceptions
if (! function_exists('transformEnumDataOptions')) {
    function transformEnumDataOptions($fieldName, $value)
    {

        if ($fieldName == 'role') {
            switch ($value) {
                case '1':
                    $value = 'admin';
                    break;

                case '2':
                    $value = 'manager';
                    break;

                default:
                    $value = $value[0] == "1" ? ["admin", "manager"] : ["manager", "admin"];
                    break;
            }
        }

        return $value;
    }
}
