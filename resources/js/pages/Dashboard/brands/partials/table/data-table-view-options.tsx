import { Checkbox, Menu } from '@/components/ui';
import { PagePropsData } from '@/types';
import __ from '@/utils/translations';
import { usePage } from '@inertiajs/react';
import { Table } from '@tanstack/react-table';
import { IconEye } from 'justd-icons';
import _ from 'lodash';

interface DataTableViewOptionsProps<TData> {
  table: Table<TData>;
}

function replaceColumViewText(text: string) {
  if (text == 'parentCategoriesNames') {
    return 'Parent Categories';
  }

  return text;
}

export function DataTableViewOptions<TData>({ table }: DataTableViewOptionsProps<TData>) {
  const translations = usePage<PagePropsData>().props.translations;

  return (
    <>
      <Menu>
        <Menu.Trigger className="flex items-center justify-center h-8  gap-x-2 border-[1px] border-zinc-500 dark:text-zinc-50 text-zinc-700 hover:text-colors-primary-500 hover:border-colors-primary-500 rounded-md p-4 hover:bg-accent-subtle  font-medium focus:outline-primary duration-300  ">
          <IconEye />
          {__(translations, 'Columns')}
        </Menu.Trigger>
        <Menu.Content placement="bottom right" selectionMode="multiple">
          {table
            .getAllColumns()
            .filter((column) => typeof column.accessorFn !== 'undefined' && column.getCanHide())
            .map((column) => {
              return (
                <Menu.Item key={column.id} className={'p-0'}>
                  <Checkbox
                    className="w-full p-2 capitalize rounded-lg "
                    isSelected={column.getIsVisible()}
                    onChange={(value) => column.toggleVisibility(!!value)}
                  >
                    {__(translations, _.capitalize(replaceColumViewText(column.id)))}
                  </Checkbox>
                </Menu.Item>
              );
            })}
        </Menu.Content>
      </Menu>
    </>
  );
}
