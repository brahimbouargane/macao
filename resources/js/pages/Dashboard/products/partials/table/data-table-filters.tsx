import { Menu } from '@/components/ui';
import { PagePropsData } from '@/types';
import __ from '@/utils/translations';
import { usePage } from '@inertiajs/react';
import { Table } from '@tanstack/react-table';
import { IconFilter, IconPlus } from 'justd-icons';
import _ from 'lodash';

interface DataTableViewOptionsProps<TData> {
    table: Table<TData>;
}

export default function DataTableFilters<TData>({ table }: DataTableViewOptionsProps<TData>) {
    const translations = usePage<PagePropsData>().props.translations

    return (
        <>
            <Menu>
                <Menu.Trigger className="flex items-center justify-center h-8  gap-x-2 border-[1px] border-zinc-500 dark:text-zinc-50 text-zinc-700 hover:text-colors-primary-500 hover:border-colors-primary-500 rounded-md p-4 hover:bg-accent-subtle  font-medium focus:outline-primary duration-300 ">
                    <IconFilter />
                    {__(translations,'Filters')}
                </Menu.Trigger>
                <Menu.Content placement="bottom right" selectionMode="multiple" className="dark:bg-accent">
                    <Menu.Item className={''} isDisabled>
                        {__(translations,'Add Filter')}
                    </Menu.Item>
                    {table
                        .getAllColumns()
                        .filter((column) => typeof column.accessorFn !== 'undefined' && column.getCanHide())
                        .map((column) => {
                            return (
                                <Menu.Item
                                    key={column.id}
                                    className={
                                        'w-full p-2 capitalize rounded-lg dark:hover:bg-accent-subtle hover:bg-accent-subtle  hover:text-colors-primary-500 hover:border-colors-primary-500 '
                                    }
                                >
                                    <IconPlus />
                                    {__(translations,_.capitalize(column.id))}
                                </Menu.Item>
                            );
                        })}
                </Menu.Content>
            </Menu>
        </>
    );
}
