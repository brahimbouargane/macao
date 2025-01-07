import { Table } from '@tanstack/react-table';

import { Button, SearchField } from '@/components/ui';
import __ from '@/utils/translations';
import { DataTableViewOptions } from './data-table-view-options';

import { useSearchWithDebounce } from '@/hooks/useDebouncedSearch';
import { PagePropsData, UserReferenceData } from '@/types';
import { usePage } from '@inertiajs/react';
import {} from 'react-aria-components';
import { useQueryBuilderBrandsContext } from '../providers/QueryBuilderProvider';
import { useState } from 'react';
import NumberFilter from '@/pages/Dashboard/partials/filters/number-filter';
import {
  validDateFilters,
  validNumberFilters,
  validStatusFilters,
  validStringFilters
} from '@/utils/queryParamsParser';
import StringFilter from '@/pages/Dashboard/partials/filters/string-filter';
import DateFilter from '@/pages/Dashboard/partials/filters/date-filter';
import DataTableFilters from './data-table-filters';
import { appendAdminFields } from '@/utils/helpers';
import StatusFilter from '@/pages/Dashboard/partials/filters/status-filter';
interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  usersOptions: UserReferenceData[];
}

export function DataTableToolbar<TData>({ table, usersOptions }: DataTableToolbarProps<TData>) {
  const { translations, auth } = usePage<PagePropsData>().props;

  const { builder } = useQueryBuilderBrandsContext();
  const { searchTerm, setSearchTerm, isLoading } = useSearchWithDebounce({
    route: route('brands.index') + builder.build(),
    initialSearchTerm: builder.hasFilter('search') ? (route().queryParams?.filter?.search as unknown as string) : ''
  });

  // Model Allowed filters
  const [allowedFilters, setAllowedFilters] = useState(
    appendAdminFields({
      role: auth?.user?.role,
      defaults: [
        { type: 'number', value: 'id', isSelected: false },
        { type: 'string', value: 'name', isSelected: false },
        { type: 'number', value: 'prod_count', isSelected: false },
        { type: 'date', value: 'created_at', isSelected: false },
        { type: 'date', value: 'updated_at', isSelected: false }
      ]
    })
  );

  return (
    <div>
      <div className="flex justify-between p-4 md:items-center max-md:flex-col max-md:gap-y-2">
        <SearchField
          placeholder={__(translations, 'Search') + '...'}
          name="search"
          className=" w-full md:w-[250px] lg:w-[450px] dark:!border-colors-primary-600 dark:border-[1px] dark:rounded-lg outline-4"
          isPending={isLoading}
          value={searchTerm}
          onChange={(value) => {
            setSearchTerm(value);
            builder.filter('search', value, true);
            if (value.length == 0) {
              builder.removeFilter('search');
            }
          }}
          aria-label="Search field"
          aria-labelledby="Search field"
        />
        <div className="flex gap-x-2">
          <DataTableFilters table={table} allowedFilters={allowedFilters} setAllowedFilters={setAllowedFilters} />
          <DataTableViewOptions table={table} />
        </div>
      </div>

      {/* Active filters */}
      <TableActiveFilters
        builder={builder}
        setAllowedFilters={setAllowedFilters}
        translations={translations}
        usersOptions={usersOptions}
      />

      {/* Rows Selection */}
      {table.getFilteredSelectedRowModel().rows.length > 0 && (
        <div className="flex justify-between px-4 pr-8 border-t-2 border-b-2 md:items-center max-md:flex-col max-md:gap-y-3 bg-accent">
          <div className="font-semibold">
            {table.getFilteredSelectedRowModel().rows.length} {__(translations, 'row(s) selected.')}
          </div>
          <div>
            <Button
              onPress={() => {
                table.getRowModel().rows.forEach((row) => {
                  row.toggleSelected(true);
                });
              }}
              appearance="plain"
              className="font-bold text-colors-primary-500 hover:underline hover:bg-transparent"
            >
              {__(translations, 'Select all')}
            </Button>
            <Button
              appearance="plain"
              className="font-bold text-danger hover:underline hover:bg-transparent"
              onPress={() => {
                table.toggleAllPageRowsSelected(false);
              }}
            >
              {__(translations, 'Deselect all')}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function TableActiveFilters({ builder, translations, setAllowedFilters, usersOptions }) {
  return (
    <>
      {route().queryParams?.filter && (
        <div className="py-2 shadow-md border-y-2 bg-accent">
          <fieldset className="flex flex-wrap gap-3 p-2 md:items-center">
            <p>{__(translations, 'Filters')} :</p>
            {/* Id filter */}
            {builder.hasFilter(...validNumberFilters('id')) && (
              <NumberFilter builder={builder} fieldName="id" setAllowedFilters={setAllowedFilters} />
            )}

            {/* Name filter */}
            {builder.hasFilter(...validStringFilters('name')) && (
              <StringFilter builder={builder} fieldName="name" setAllowedFilters={setAllowedFilters} />
            )}

            {/* Name filter */}
            {builder.hasFilter(...validNumberFilters('prod_count')) && (
              <NumberFilter builder={builder} fieldName="prod_count" setAllowedFilters={setAllowedFilters} />
            )}

            {/* Created_at filter */}
            {builder.hasFilter(...validDateFilters('created_at')) && (
              <DateFilter builder={builder} fieldName="created_at" setAllowedFilters={setAllowedFilters} />
            )}
            {/* Updated_at filter */}
            {builder.hasFilter(...validDateFilters('updated_at')) && (
              <DateFilter builder={builder} fieldName="updated_at" setAllowedFilters={setAllowedFilters} />
            )}

            {/* Created_by filter */}
            {builder.hasFilter(...validStatusFilters('created_by')) && (
              <StatusFilter
                selectOptions={usersOptions}
                builder={builder}
                fieldName="created_by"
                setAllowedFilters={setAllowedFilters}
              />
            )}

            {/* last_updated_by filter */}
            {builder.hasFilter(...validStatusFilters('last_updated_by')) && (
              <StatusFilter
                selectOptions={usersOptions}
                builder={builder}
                fieldName="last_updated_by"
                setAllowedFilters={setAllowedFilters}
              />
            )}
          </fieldset>
        </div>
      )}
    </>
  );
}


