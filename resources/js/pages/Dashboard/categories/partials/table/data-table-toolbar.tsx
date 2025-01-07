import { Table } from '@tanstack/react-table';

import { Button, SearchField } from '@/components/ui';
import __ from '@/utils/translations';
import { DataTableViewOptions } from './data-table-view-options';

import {} from 'react-aria-components';
import DataTableFilters from './data-table-filters';
import { useSearchWithDebounce } from '@/hooks/useDebouncedSearch';
import { usePage } from '@inertiajs/react';
import { PagePropsData, UserReferenceData } from '@/types';
import { useQueryBuilderCategoriesContext } from '../providers/QueryBuilderProvider';
import { useState } from 'react';
import {
  validDateFilters,
  validNumberFilters,
  validStatusFilters,
  validStringFilters
} from '@/utils/queryParamsParser';
import StringFilter from '@/pages/Dashboard/partials/filters/string-filter';
import DateFilter from '@/pages/Dashboard/partials/filters/date-filter';
import NumberFilter from '@/pages/Dashboard/partials/filters/number-filter';
import StatusFilter from '@/pages/Dashboard/partials/filters/status-filter';
import { appendAdminFields } from '@/utils/helpers';
interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  usersOptions: UserReferenceData[];
}

export function DataTableToolbar<TData>({ table, usersOptions }: DataTableToolbarProps<TData>) {
  const { translations, auth } = usePage<PagePropsData>().props;

  const { builder, categories } = useQueryBuilderCategoriesContext();
  const { searchTerm, setSearchTerm, isLoading } = useSearchWithDebounce({
    route: route('categories.index') + builder.build(),
    initialSearchTerm: builder.hasFilter('search') ? (route().queryParams?.filter?.search as unknown as string) : ''
  });

  // Model Allowed filters
  const [allowedFilters, setAllowedFilters] = useState(
    appendAdminFields({
      role: auth?.user?.role,
      defaults: [
        { type: 'number', value: 'id', isSelected: false },
        { type: 'string', value: 'name', isSelected: false },
        { type: 'string', value: 'description', isSelected: false },
        { type: 'status', value: 'parentCategories', isSelected: false },
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
          {/* <DataTableFilters table={table} /> */}
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
        categories={categories}
      />

      {/* Selected tows */}
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

function TableActiveFilters({ builder, translations, setAllowedFilters, usersOptions, categories }) {
  return (
    <>
      {route().queryParams?.filter && (
        <div className="py-2 shadow-md border-y-2 bg-accent" id="reset_btn">
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
            {/* Description filter */}
            {builder.hasFilter(...validStringFilters('description')) && (
              <StringFilter builder={builder} fieldName="description" setAllowedFilters={setAllowedFilters} />
            )}

            {/* categories filter */}
            {builder.hasFilter(...validStatusFilters('parentCategories')) && (
              <StatusFilter
                selectOptions={categories}
                builder={builder}
                fieldName="parentCategories"
                setAllowedFilters={setAllowedFilters}
              />
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

            {route().queryParams?.filter != undefined && (
              <Button
                intent="secondary"
                className="!bg-bg shadow-md dark:shadow-none"
                onPress={function () {
                  document.querySelector('#reset_btn').classList.add('hidden');
                  builder.clearFilters();
                  setAllowedFilters((prev) => {
                    return prev.map((filter) => {
                      return { ...filter, isSelected: false };
                    });
                  });
                }}
              >
                {__(translations, 'Reset')}
              </Button>
            )}
          </fieldset>
        </div>
      )}
    </>
  );
}

