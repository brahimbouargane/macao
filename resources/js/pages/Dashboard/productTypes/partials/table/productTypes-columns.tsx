import { ProductTypeData } from '@/types';
import { ColumnDef } from '@tanstack/react-table';
import { DataTableColumnHeader } from './data-table-column-header';
import { DataTableRowActions } from './data-table-row-actions';
import { Badge } from '@/components/ui';

export const columns: ColumnDef<ProductTypeData>[] = [
  // {
  //   id: 'select',
  //   header: ({ table }) => (
  //     <Checkbox
  //       isSelected={table.getIsAllPageRowsSelected() || table.getIsSomePageRowsSelected()}
  //       onChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //       className="translate-y-[2px]"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       isSelected={row.getIsSelected()}
  //       onChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //       className="translate-y-[2px]"
  //     />
  //   ),
  //   size: 5,

  //   enableSorting: false,
  //   enableHiding: false
  // },
  {
    accessorKey: 'id',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Id" />,
    cell: ({ row }) => <div className="w-fit">{row.getValue('id')}</div>,
    size: 5,
    enableSorting: true,
    enableHiding: true
  },
  {
    accessorKey: 'name',
    header: ({ column }) => <DataTableColumnHeader column={column} title={'Name'} />,
    cell: ({ row }) => {
      let name: string = row.getValue('name') ?? 'N/A';
      if (name != 'N/A' && name.length > 40) {
        name = name.substring(0, 40) + '...';
      }
      return (
        <div className="flex space-x-2">
          <span className="font-medium truncate">{name}</span>
        </div>
      );
    }
  },
  {
    accessorKey: 'prod_count',
    header: ({ column }) => <DataTableColumnHeader column={column} title={'Products count'} />,
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-center space-x-2">
          <Badge className="font-medium truncate">{(row.original as ProductTypeData)?.productsCount}</Badge>
        </div>
      );
    },
    size: 2
  },

  {
    accessorKey: 'created_at',
    header: ({ column }) => <DataTableColumnHeader className="min-w-[150px]" column={column} title={'Created at'} />,
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <span>{row.getValue('created_at') ?? 'N/A'}</span>
        </div>
      );
    }
  },
  {
    accessorKey: 'updated_at',
    header: ({ column }) => <DataTableColumnHeader className="min-w-[150px]" column={column} title={'Updated_at'} />,
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <span>{row.getValue('updated_at') ?? 'N/A'}</span>
        </div>
      );
    }
  },
  {
    accessorKey: 'created_by',
    header: ({ column }) => <DataTableColumnHeader column={column} title={'Created by'} />,
    cell: ({ row }) => {
      const createdBy: string = row.original.created_by_user_name ?? '';

      return (
        <div>
          <span className="">{createdBy}</span>
        </div>
      );
    }
  },
  {
    accessorKey: 'last_updated_by',
    header: ({ column }) => <DataTableColumnHeader column={column} title={'Last updated by'} />,
    cell: ({ row }) => {
      const updatedBy: string = row.original.last_updated_by_user_name ?? '';

      return (
        <div>
          <span className="">{updatedBy}</span>
        </div>
      );
    }
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
    size: 10
  }
];
