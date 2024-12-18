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
            name_c: ['name_dnc', 'name_sw', 'name_ew']
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
