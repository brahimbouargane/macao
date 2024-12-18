import { Table } from '@tanstack/react-table';

import { Button, SearchField } from '@/components/ui';
import __ from '@/utils/translations';
import { DataTableViewOptions } from './data-table-view-options';

import {} from 'react-aria-components';
import { useQueryBuilderUsersContext } from '../providers/QueryBuilderProvider';
import DataTableFilters from './data-table-filters';
import { useSearchWithDebounce } from '@/hooks/useDebouncedSearch';
import { usePage } from '@inertiajs/react';
import { PagePropsData } from '@/types';
interface DataTableToolbarProps<TData> {
    table: Table<TData>;
}

export function DataTableToolbar<TData>({ table }: DataTableToolbarProps<TData>) {
    const translations = usePage<PagePropsData>().props.translations

    const builder = useQueryBuilderUsersContext();
    const { searchTerm, setSearchTerm, isLoading } = useSearchWithDebounce({
        route: route('users.index') + builder.build(),
        initialSearchTerm: builder.hasFilter('search') ? (route().queryParams?.filter?.search as unknown as string) : ''
    });

    return (
        <div>
            <div className="flex justify-between p-4 pr-8 md:items-center max-md:flex-col max-md:gap-y-3">
                <SearchField
                    placeholder={__(translations,'Search') + '...'}
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
                    <DataTableViewOptions table={table} />
                </div>
            </div>
            {table.getFilteredSelectedRowModel().rows.length > 0 && (
                <div className="flex justify-between px-4 pr-8 border-t-2 border-b-2 md:items-center max-md:flex-col max-md:gap-y-3 bg-accent">
                    <div className="font-semibold">
                        {table.getFilteredSelectedRowModel().rows.length} {__(translations,'row(s) selected.')}
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
                            {__(translations,'Select all')}
                        </Button>
                        <Button
                            appearance="plain"
                            className="font-bold text-danger hover:underline hover:bg-transparent"
                            onPress={() => {
                                table.toggleAllPageRowsSelected(false);
                            }}
                        >
                            {__(translations,'Deselect all')}
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
}

