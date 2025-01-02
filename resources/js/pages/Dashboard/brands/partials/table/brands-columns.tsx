import { BrandData } from '@/types';
import { ColumnDef } from '@tanstack/react-table';
import { DataTableColumnHeader } from './data-table-column-header';
import { DataTableRowActions } from './data-table-row-actions';
import { Badge } from '@/components/ui';

export const columns: ColumnDef<BrandData>[] = [
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
      if (name != 'N/A' && name.length > 20) {
        name = name.substring(0, 20) + '...';
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
    header: ({ column }) => <DataTableColumnHeader column={column} title={'Prodcuts count'} />,
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-center space-x-2">
          <Badge className="font-medium truncate">{(row.original as BrandData)?.productsCount}</Badge>
        </div>
      );
    },
    size: 2
  },

  {
    accessorKey: 'created_at',
    header: ({ column }) => <DataTableColumnHeader className="min-w-[150px]" column={column} title={'Created_at'} />,
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
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
    size: 10
  }
];
