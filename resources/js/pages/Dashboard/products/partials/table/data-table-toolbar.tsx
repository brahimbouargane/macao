import { Table } from '@tanstack/react-table';

import { Button, SearchField, Toggle, ToggleGroup, Tooltip } from '@/components/ui';
import __ from '@/utils/translations';
import { DataTableViewOptions } from './data-table-view-options';

import { useSearchWithDebounce } from '@/hooks/useDebouncedSearch';
import { PagePropsData } from '@/types';
import { usePage } from '@inertiajs/react';
import { IconBulletList, IconGrid4 } from 'justd-icons';
import {} from 'react-aria-components';
import { useQueryBuilderProductsContext } from '../providers/QueryBuilderProvider';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  toggleViewMode: (key: 'List' | 'Grid') => void;
  viewMode: 'List' | 'Grid';
}

export function DataTableToolbar<TData>({ table, toggleViewMode, viewMode }: DataTableToolbarProps<TData>) {
  const translations = usePage<PagePropsData>().props.translations;

  const { builder } = useQueryBuilderProductsContext();
  const { searchTerm, setSearchTerm, isLoading } = useSearchWithDebounce({
    route: route('products.index') + builder.build(),
    initialSearchTerm: builder.hasFilter('search') ? (route().queryParams?.filter?.search as unknown as string) : ''
  });

  return (
    <div className="p-2">
      <div className="flex justify-between p-2 md:items-center max-md:flex-col max-md:gap-y-3">
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
          {viewMode == 'List' && <DataTableViewOptions table={table} />}
          <ToggleGroup
            appearance="solid"
            defaultSelectedKeys={[(localStorage.getItem('viewMode') as 'Grid' | 'List') ?? 'List']}
            selectionMode="single"
            onSelectionChange={(keys) => {
              if (keys.has('Grid')) {
                toggleViewMode('Grid');
              } else if (keys.has('List')) {
                toggleViewMode('List');
              }
            }}
          >
            <Tooltip delay={0} closeDelay={0}>
              <Toggle id="Grid">
                <IconGrid4 />
              </Toggle>
              <Tooltip.Content intent="inverse" showArrow={true}>
                {__(translations, 'Grid')}
              </Tooltip.Content>
            </Tooltip>
            <Tooltip delay={0} closeDelay={0}>
              <Toggle id="List">
                <IconBulletList />
              </Toggle>
              <Tooltip.Content intent="inverse" showArrow={true}>
                {__(translations, 'List')}
              </Tooltip.Content>
            </Tooltip>
          </ToggleGroup>
        </div>
      </div>
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
