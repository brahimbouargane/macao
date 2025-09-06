import { Menu } from '@/components/ui';
import { PagePropsData } from '@/types';
import __ from '@/utils/translations';
import { usePage } from '@inertiajs/react';
import { Table } from '@tanstack/react-table';
import { IconFilter, IconPlus } from 'justd-icons';
import _ from 'lodash';
import { useQueryBuilderProductTypesContext } from '../providers/QueryBuilderProvider';
import { useEffect, useState } from 'react';
import { appendFilterToUrlQuery, markFilterAsActive } from '@/utils/helpers';

interface DataTableViewOptionsProps<TData> {
  table: Table<TData>;
  setAllowedFilters: React.Dispatch<
    React.SetStateAction<
      {
        type: string;
        value: string;
        isSelected: boolean;
      }[]
    >
  >;
  allowedFilters: {
    type: string;
    value: string;
    isSelected: boolean;
  }[];
}

export default function DataTableFilters<TData>({
  table,
  allowedFilters,
  setAllowedFilters
}: DataTableViewOptionsProps<TData>) {
  const translations = usePage<PagePropsData>().props.translations;
  const { builder } = useQueryBuilderProductTypesContext();
  const [open, setOpen] = useState(false);

  const toggleFilter = (targetField: string) => {
    setAllowedFilters((prev) =>
      prev.map((filter) => (filter.value === targetField ? { ...filter, isSelected: !filter.isSelected } : filter))
    );
  };

  // get allowed filters
  const productTypeTableFilterColumns = table.getAllColumns().filter((column) => {
    let ruleOne = typeof column.accessorFn !== 'undefined' && column.getCanHide();
    let ruleTwo = allowedFilters.findIndex((val) => val.value == column.id) == -1 ? false : true;
    return ruleOne && ruleTwo;
  });

  // append existing query string filters to appear in the ui
  useEffect(() => {
    builder.tap((state) => {
      markFilterAsActive({
        filters: ['id', 'name', 'prod_count', 'created_at', 'updated_at', 'created_by', 'last_updated_by'],
        state,
        toggleFilter
      });
    });
  }, []);

  return (
    <>
      <Menu isOpen={open} onOpenChange={setOpen}>
        <Menu.Trigger className="flex items-center justify-center h-8  gap-x-2 border-[1px] border-zinc-500 dark:text-zinc-50 text-zinc-700 hover:text-colors-primary-500 hover:border-colors-primary-500 rounded-md p-4 hover:bg-accent-subtle  font-medium focus:outline-primary duration-300 ">
          <IconFilter />
          {__(translations, 'Filters')}
        </Menu.Trigger>
        <Menu.Content placement="bottom right" selectionMode="multiple" className="dark:bg-accent">
          <Menu.Item isDisabled>{__(translations, 'Add Filter')}</Menu.Item>
          {productTypeTableFilterColumns.map((column) => {
            return (
              <Menu.Item
                key={column.id}
                className={
                  'w-full p-2 capitalize rounded-lg dark:hover:bg-accent-subtle hover:bg-accent-subtle  hover:text-colors-primary-500 hover:border-colors-primary-500 disabled:cursor-not-allowed cursor-pointer'
                }
                //mark filed as disabled if it's present in the query string
                isDisabled={allowedFilters.find((ele) => ele.value == column.id)?.isSelected ? true : false}
                onAction={() => {
                  let currentFilter = allowedFilters.find((ele) => ele.value == column.id);

                  // based on the type of the selected field
                  // 1 -> append to the query string
                  appendFilterToUrlQuery({ builder, currentFilter });

                  toggleFilter(currentFilter.value);
                  setOpen(false);
                }}
              >
                <IconPlus />
                {__(translations, _.capitalize(transformColumnIdValue(column.id)))}
              </Menu.Item>
            );
          })}
        </Menu.Content>
      </Menu>
    </>
  );
}

function transformColumnIdValue(columnId: string) {
  switch (columnId) {
    case 'prod_count':
      columnId = 'Products Count';

      break;
    case 'created_at':
      columnId = 'Created at';
      break;
  }

  return columnId;
}