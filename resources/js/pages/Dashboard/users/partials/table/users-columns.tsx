import { ColumnDef } from '@tanstack/react-table';


import { DataTableRowActions } from './data-table-row-actions';

import { Avatar, Badge, Checkbox } from '@/components/ui';
import {  PagePropsData, UserData } from '@/types';
import __ from '@/utils/translations';
import { DataTableColumnHeader } from './data-table-column-header';
import { usePage } from '@inertiajs/react';

export const columns: ColumnDef<UserData>[] = [
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
    size: 2,
    enableSorting: true,
    enableHiding: true
  },
  {
    accessorKey: 'image',
    header: ({ column }) => <DataTableColumnHeader column={column} title={'Image'} />,
    cell: ({ row }) => {
      const image = row.original.avatar.thumbnail ?? '/images/avatar-placeholder.svg';
      return (
        <div className="flex ">
          <Avatar src={image} shape="circle" className="object-contain overflow-hidden" />
        </div>
      );
    },
    enableSorting: false,
    size: 2
  },
  {
    accessorKey: 'name',
    header: ({ column }) => <DataTableColumnHeader column={column} title={'Name'} />,
    cell: ({ row }) => {
      return (
        <div className="">
          <span>{row.getValue('name') ?? 'N/A'}</span>
        </div>
      );
    }
  },
  {
    accessorKey: 'email',
    header: ({ column }) => <DataTableColumnHeader column={column} title={'Email'} />,
    cell: ({ row }) => {
      return (
        <div className="">
          <span>{row.getValue('email') ?? 'N/A'}</span>
        </div>
      );
    }
  },

  // {
  //   accessorKey: 'email_verified_at',
  //   header: ({ column }) => (
  //     <DataTableColumnHeader className="min-w-[150px]" column={column} title={'Email_verified_at'} />
  //   ),
  //   cell: ({ row }) => {
  //     const date: string = row.getValue('email_verified_at');
  //     const translations = usePage<PagePropsData>().props.translations;
  //     return (
  //       <div className="flex items-center">
  //         {date ? (
  //           <Badge intent="success">{date}</Badge>
  //         ) : (
  //           <Badge intent="danger">{__(translations, 'Unverified')}</Badge>
  //         )}
  //       </div>
  //     );
  //   }
  // },
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
    // filterFn: (row, id, value) => {
    //     return value.includes(row.getValue(id));
    // }
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
    // filterFn: (row, id, value) => {
    //     return value.includes(row.getValue(id));
    // }
  },
  {
    id: 'actions',
    header: 'Actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
    size: 10
  }
];
