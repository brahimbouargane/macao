import { Menu } from '@/components/ui';
import { PagePropsData } from '@/types';
import { cn } from '@/utils/classes';
import __ from '@/utils/translations';
import { router, usePage } from '@inertiajs/react';
import { Column } from '@tanstack/react-table';
import { IconArrowDown, IconArrowExpandVer, IconArrowUp, IconEyeOff } from 'justd-icons';
import { useEffect, useRef, useState } from 'react';
import { useQueryBuilderProductTypesContext } from '../providers/QueryBuilderProvider';

interface DataTableColumnHeaderProps<TData, TValue> extends React.HTMLAttributes<HTMLDivElement> {
  column: Column<TData, TValue>;
  title: string;
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className
}: DataTableColumnHeaderProps<TData, TValue>) {
  const translations = usePage<PagePropsData>().props.translations;

  if (!column.getCanSort()) {
    return <div className={cn(className)}>{__(translations, title)}</div>;
  }
  const hasPageBeenRendered = useRef(false);

  const { builder } = useQueryBuilderProductTypesContext();
  // to trigger the sort for the first time
  const [updated, setUpdated] = useState(0);
  const [sortDirection, setSortDirection] = useState('asc');

  useEffect(() => {
    if (hasPageBeenRendered.current) {
      const query = builder.build();

      router.get(route('brands.index') + query, {}, { preserveState: true });
    }
    hasPageBeenRendered.current = true;
  }, [updated]);

  return (
    <div className={cn('flex  items-center space-x-2', className)}>
      <Menu>
        <Menu.Trigger className="flex items-center gap-x-2">
          <span>{__(translations, title)}</span>
          {route().queryParams?.sort?.includes(column.id) && sortDirection === 'desc' ? (
            <IconArrowDown />
          ) : route().queryParams?.sort?.includes(column.id) && sortDirection === 'asc' ? (
            <IconArrowUp />
          ) : (
            <IconArrowExpandVer />
          )}
        </Menu.Trigger>
        <Menu.Content placement="bottom">
          <Menu.Item
            onAction={() => {
              builder.clearSorts();
              builder.sort(column.id, 'asc');
              setUpdated(updated + 1);
              setSortDirection('asc');
            }}
          >
            <IconArrowUp className="h-3.5 w-3.5 text-muted-foreground/70" />
            Asc
          </Menu.Item>
          <Menu.Item
            onAction={() => {
              builder.clearSorts();
              builder.sort(column.id, 'desc');
              setUpdated(updated + 1);
              setSortDirection('desc');
            }}
          >
            <IconArrowDown className="h-3.5 w-3.5 text-muted-foreground/70" />
            Desc
          </Menu.Item>
          <Menu.Separator />
          <Menu.Item onAction={() => column.toggleVisibility(false)}>
            <IconEyeOff className="h-3.5 w-3.5 text-muted-foreground/70" />
            {__(translations, 'Hide')}
          </Menu.Item>
        </Menu.Content>
      </Menu>
    </div>
  );
}
