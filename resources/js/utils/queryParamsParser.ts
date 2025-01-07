import { QueryBuilder } from '@cgarciagarcia/react-query-builder';

const validPaginations = [10, 20, 30, 40, 50, 200];

export function buildConfigFromQueryParams(queryParams: Record<string, any>): Record<string, any> {
  // Extract filters and sorts from queryParams
  const filters = queryParams.filter || {};
  const sorts = queryParams.sort ? queryParams.sort.split(',') : [];

  // Transform filters into the required format for useQueryBuilder
  const parsedFilters = Object.entries(filters).map(([key, value]) => ({
    attribute: key,
    value: [value]
  }));

  // Transform sorts into the required format for useQueryBuilder
  const parsedSorts = sorts.map((sort) => {
    const isDescending = sort.startsWith('-');
    return {
      attribute: isDescending ? sort.substring(1) : sort,
      direction: isDescending ? 'desc' : 'asc'
    };
  });

  // Build and return the config object
  return {
    aliases: {},
    filters: parsedFilters,
    includes: [],
    sorts: parsedSorts,
    fields: [],
    pruneConflictingFilters: {
      // Number Filters
      ...Object.fromEntries(
        validNumberFilters('id').map((f) => [f, validNumberFilters('id').filter((other) => other !== f)])
      ),
      ...Object.fromEntries(
        validNumberFilters('prod_count').map((f) => [
          f,
          validNumberFilters('prod_count').filter((other) => other !== f)
        ])
      ),

      // String Filters
      ...Object.fromEntries(
        validStringFilters('name').map((f) => [f, validStringFilters('name').filter((other) => other !== f)])
      ),
      ...Object.fromEntries(
        validStringFilters('description').map((f) => [
          f,
          validStringFilters('description').filter((other) => other !== f)
        ])
      ),
      ...Object.fromEntries(
        validStringFilters('email').map((f) => [f, validStringFilters('email').filter((other) => other !== f)])
      ),

      //  Status Filters
      ...Object.fromEntries(
        validStatusFilters('brand').map((f) => [f, validStatusFilters('brand').filter((other) => other !== f)])
      ),
      ...Object.fromEntries(
        validStatusFilters('role').map((f) => [f, validStatusFilters('role').filter((other) => other !== f)])
      ),
      ...Object.fromEntries(
        validStatusFilters('product_type').map((f) => [
          f,
          validStatusFilters('product_type').filter((other) => other !== f)
        ])
      ),
      ...Object.fromEntries(
        validStatusFilters('created_by').map((f) => [
          f,
          validStatusFilters('created_by').filter((other) => other !== f)
        ])
      ),
      ...Object.fromEntries(
        validStatusFilters('last_updated_by').map((f) => [
          f,
          validStatusFilters('last_updated_by').filter((other) => other !== f)
        ])
      ),
      ...Object.fromEntries(
        validStatusFilters('product_type').map((f) => [
          f,
          validStatusFilters('product_type').filter((other) => other !== f)
        ])
      ),
      ...Object.fromEntries(
        validStatusFilters('categories').map((f) => [
          f,
          validStatusFilters('categories').filter((other) => other !== f)
        ])
      ),

      // Date Filters
      ...Object.fromEntries(
        validDateFilters('created_at').map((f) => [f, validDateFilters('created_at').filter((other) => other !== f)])
      ),
      ...Object.fromEntries(
        validDateFilters('updated_at').map((f) => [f, validDateFilters('updated_at').filter((other) => other !== f)])
      )
    },
    delimiters: {
      global: ',',
      fields: null,
      filters: null,
      sorts: null,
      includes: null,
      params: null
    },
    useQuestionMark: true,
    params: {
      ...(queryParams.per_page && { per_page: [] })
    }
  };
}

export function validatePageSize(per_page: any, builder: QueryBuilder) {
  const value = Number(per_page);

  if (isNaN(value) || !validPaginations.includes(value)) {
    return 10;
  } else {
    return value;
  }
}

export function validStringFilters(fieldName: string) {
  return [
    `${fieldName}_ct`, // Contains
    `${fieldName}_nct`, // Does Not Contain
    `${fieldName}_sw`, // Starts With
    `${fieldName}_ew`, // Ends With
    `${fieldName}_nsw`, // Does Not Start With
    `${fieldName}_new`, // Does Not End With
    `${fieldName}_eq`, // Equals
    `${fieldName}_neq` // Does Not Equal
  ];
}
export function validDateFilters(fieldName: string) {
  return [
    `${fieldName}_ib`, // Is Less Than
    `${fieldName}_ia`, // Is Greater Than
    `${fieldName}_eqoib`, // Is Less Than or Equal
    `${fieldName}_eqoia`, // Is Greater Than or Equal
    `${fieldName}_eq`, // Equals
    `${fieldName}_neq`, // Does Not Equal
    `${fieldName}_bt`, // Is Within Range
    `${fieldName}_nbt`, // Is Not Within Range
    `${fieldName}_is`, // Is Defined
    `${fieldName}_nis` // Is Not Defined
  ];
}
export function validNumberFilters(fieldName: string) {
  return [
    `${fieldName}_eq`,
    `${fieldName}_neq`,
    `${fieldName}_gt`,
    `${fieldName}_gte`,
    `${fieldName}_lt`,
    `${fieldName}_lte`,
    `${fieldName}_bt`,
    `${fieldName}_nbt`
  ];
}

export function validStatusFilters(fieldName: string) {
  return [
    `${fieldName}_in`, // In
    `${fieldName}_nin`, // Not In
    `${fieldName}_eq`, // Equals
    `${fieldName}_neq` // Does Not Equal
  ];
}