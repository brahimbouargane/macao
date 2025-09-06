import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/shadcn-table';
import { PagePropsData, PaginationData, UserReferenceData } from '@/types';
import { cn } from '@/utils/classes';
import __ from '@/utils/translations';
import { router, usePage } from '@inertiajs/react';
import {
  ColumnDef,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table';
import * as React from 'react';
import { DataTablePagination } from './data-table-pagination';
import { DataTableToolbar } from './data-table-toolbar';
import { hideColumn } from '@/utils/helpers';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  pd: PaginationData;
  translations: any[];
  usersOptions: UserReferenceData[];
}

export function ProductTypesDataTable<TData, TValue>({
  columns,
  data,
  pd,
  translations,
  usersOptions
}: DataTableProps<TData, TValue>) {
  const [rowSelection, setRowSelection] = React.useState({});
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});

  const role = usePage<PagePropsData>().props.auth?.user?.role;
  const table = useReactTable({
    data,
    columns,
    state: {
      columnVisibility,
      rowSelection
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues()
  });

  const [isFetching, setIsFetching] = React.useState(false);

  router.on('start', () => {
    setIsFetching(true);
  });
  router.on('finish', () => {
    setIsFetching(false);
  });

  return (
    <div className="w-full ">
      <DataTableToolbar table={table} usersOptions={usersOptions} />

      <div className={cn('relative', isFetching && 'opacity-70')}>
        <Table className="">
          <TableHeader className=" bg-accent">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      colSpan={header.colSpan}
                      style={{ width: header.getSize() }}
                      hidden={hideColumn(header, role)}
                    >
                      {header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => {
                return (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                    className={cn(
                      '!border-l-2  ',
                      row.getIsSelected() && '!bg-accent-subtle  !border-l-colors-primary-500'
                    )}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        hidden={hideColumn(cell, role)}
                        key={cell.id}
                        className={cn('!pl-4  border-2 ', row.getIsSelected() && '  !border-l-colors-primary-500')}
                      >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  {__(translations, 'No results.')}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <DataTablePagination table={table} paginatedData={pd} />
      </div>
    </div>
  );
}
