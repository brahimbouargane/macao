import { Pagination, Select } from '@/components/ui';
import { PagePropsData, PaginationData } from '@/types';
import { validatePageSize } from '@/utils/queryParamsParser';
import __ from '@/utils/translations';
import { router, usePage } from '@inertiajs/react';
import { Table } from '@tanstack/react-table';
import { useEffect, useRef, useState } from 'react';
import { useQueryBuilderUsersContext } from '../providers/QueryBuilderProvider';

interface DataTablePaginationProps<TData> {
    table: Table<TData>;
    paginatedData: PaginationData;
}

const paginationSizes = [10, 20, 30, 40, 50, 200].map((item, idx) => ({ id: idx, name: item.toString() }));

export function DataTablePagination<TData>({ table, paginatedData }: DataTablePaginationProps<TData>) {
  const translations = usePage<PagePropsData>().props.translations;

  const hasPageBeenRendered = useRef(false);

  const builder = useQueryBuilderUsersContext();

  const [pageSize, setPageSize] = useState(
    builder.hasParam('per_page') ? validatePageSize(route().queryParams?.per_page, builder) : 10
  );

  useEffect(() => {
    if (hasPageBeenRendered.current) {
      router.visit(route('users.index') + builder.build(), { preserveState: true });
      table.setPageSize(Number(pageSize));
    }
    hasPageBeenRendered.current = true;
  }, [pageSize]);

  return (
    <div className="flex items-center justify-between p-4 px-6 max-md:flex-col max-md:gap-y-4 bg-accent">
      {/* Selected rows */}
      <div className="text-sm text-muted-foreground">
        {/* {table.getFilteredSelectedRowModel().rows.length} of {paginatedData.total} {__(translations,'row(s) selected.')} */}
        <span>
          {__(translations, 'Total lines number')} : {paginatedData.total}
        </span>
      </div>

      <div className="flex items-center space-x-6 lg:space-x-8 flex-col md:flex-row space-y-3">
        {/* Lines per page */}
        <div className="flex items-center space-x-8">
          <Select
            placeholder={__(translations, 'Rows per page')}
            selectedKey={
              paginationSizes.find((item) => item.name == table.getState().pagination.pageSize.toString()).id ?? 0
            }
            onSelectionChange={(value) => {
              const pageSize = paginationSizes.find((item) => item.id == value).name ?? 10;
              setPageSize(Number(pageSize));
              builder.setParam('per_page', pageSize);
            }}
            defaultSelectedKey={1}
            aria-label="page size"
          >
            <Select.Trigger className="h-8 " value="ss" />
            <Select.List placement="top" items={paginationSizes}>
              {(item) => (
                <Select.Option id={item.id} textValue={item.name}>
                  {item.name}
                </Select.Option>
              )}
            </Select.List>
          </Select>
        </div>

        <div>
          <Pagination>
            <Pagination.List>
              <Pagination.Item
                routerOptions={{ preserveScroll: true, preserveState: true }}
                variant="first"
                href={paginatedData.first_page_url}
              />
              <Pagination.Item
                routerOptions={{ preserveScroll: true, preserveState: true }}
                variant="previous"
                href={paginatedData.prev_page_url}
              />

              <Pagination.Section aria-label="Pagination Segment" className="border rounded-lg">
                <Pagination.Item variant="label">{paginatedData.current_page}</Pagination.Item>
                <Pagination.Item variant="ellipsis" />
                <Pagination.Item className="text-muted-fg" variant="label">
                  {paginatedData.last_page}
                </Pagination.Item>
              </Pagination.Section>
              {/* <Pagination.Section
                                aria-label="Pagination Segment"
                                className="hidden lg:flex"
                                items={paginatedData.links.filter((item) => {
                                    if (item.label == '...') return item;
                                    if (!isNaN(Number(item.label))) {
                                        return item;
                                    }
                                })}
                            >
                                {(item) => {
                                    return (
                                        <Pagination.Item
                                            routerOptions={{ preserveScroll: true, preserveState: true }}
                                            id={item.label}
                                            isCurrent={item.active}
                                            href={item.url}
                                        >
                                            {item.label}
                                        </Pagination.Item>
                                    );
                                }}
                            </Pagination.Section> */}
              <Pagination.Item
                routerOptions={{ preserveScroll: true, preserveState: true }}
                variant="next"
                href={paginatedData.next_page_url}
                isDisabled={paginatedData.current_page == paginatedData.last_page}
              />
              <Pagination.Item
                routerOptions={{ preserveScroll: true, preserveState: true }}
                variant="last"
                href={paginatedData.last_page_url}
              />
            </Pagination.List>
          </Pagination>
        </div>
      </div>
    </div>
  );
}
