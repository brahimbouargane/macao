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
import ProductsCards from './products-cards';
import { hideColumn } from '@/utils/helpers';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  pd: PaginationData;
  translations: any[];
  usersOptions: UserReferenceData[];
}

export function ProductsDataTable<TData, TValue>({
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

  // ----------VIEW MODE--------------
  const [viewMode, setViewMode] = React.useState<'Grid' | 'List'>(
    (localStorage.getItem('viewMode') as 'Grid' | 'List') ?? 'List'
  );

  function toggleViewMode(key: 'List' | 'Grid') {
    setViewMode(key);
    localStorage.setItem('viewMode', key);
  }
  // ---------------------------------

  const [isFetching, setIsFetching] = React.useState(false);

  router.on('start', () => {
    setIsFetching(true);
  });
  router.on('finish', () => {
    setIsFetching(false);
  });

  return (
    <div className="w-full ">
      <DataTableToolbar table={table} toggleViewMode={toggleViewMode} viewMode={viewMode} usersOptions={usersOptions} />

      <div hidden={viewMode == 'List'}>
        <ProductsCards pd={pd} />
      </div>
      <div hidden={viewMode == 'Grid'}>
        <div className={cn('relative', isFetching && 'opacity-70')}>
          <Table className="">
            <TableHeader className=" bg-accent">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead
                        hidden={hideColumn(header, role)}
                        key={header.id}
                        colSpan={header.colSpan}
                        style={{ width: header.getSize() }}
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
        </div>
      </div>
      <DataTablePagination table={table} paginatedData={pd} />
    </div>
  );
}
