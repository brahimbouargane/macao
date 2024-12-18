import { ColumnDef } from '@tanstack/react-table';


import { DataTableRowActions } from './data-table-row-actions';

import { Avatar, Badge, Checkbox } from '@/components/ui';
import {  PagePropsData, CategoryData } from '@/types';
import __ from '@/utils/translations';
import { DataTableColumnHeader } from './data-table-column-header';
import { usePage } from '@inertiajs/react';

export const columns: ColumnDef<CategoryData>[] = [
    {
        id: 'select',
        header: ({ table }) => (
            <Checkbox
                isSelected={table.getIsAllPageRowsSelected() || table.getIsSomePageRowsSelected()}
                onChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
                className="translate-y-[2px]"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                isSelected={row.getIsSelected()}
                onChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
                className="translate-y-[2px]"
            />
        ),
        size: 5,

        enableSorting: false,
        enableHiding: false
    },
    {
        accessorKey: 'id',
        header: ({ column }) => <DataTableColumnHeader column={column} title="Id" />,
        cell: ({ row }) => <div className="w-fit">{row.getValue('id')}</div>,
        size: 5,
        enableSorting: true,
        enableHiding: true
    },
    {
        accessorKey: 'image',
        header: ({ column }) => <DataTableColumnHeader column={column} title={'Image'} />,
        cell: ({ row }) => {
            const image: string = row.original.image ?? '/images/avatar-placeholder.svg';
            return (
                <div className="flex space-x-2">
                    <Avatar src={image} shape="circle" className="object-contain size-12 overflow-hidden" />
                </div>
            );
        },
        enableSorting: false,
        size : 10

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
        accessorKey: 'description',
        header: ({ column }) => <DataTableColumnHeader column={column} title={'Description'} />,
        cell: ({ row }) => {
            let description: string = row.getValue('description') ?? '';
            if (description != 'N/A' && description.length > 20) {
                description = description.substring(0, 20) + '...';
            }
            return (
                <div className="flex space-x-2">
                    <span className="font-medium truncate">{description}</span>
                </div>
            );
        }
    },
    {
        accessorKey: 'parentCategory',
        header: ({ column }) => <DataTableColumnHeader column={column} title={'Parent'} />,
        cell: ({ row }) => {
            let parentCategory = row.getValue('parentCategory') ? (row.getValue('parentCategory') as CategoryData).name  : '';
           
            return (
                <div className="flex space-x-2">
                    <span className="font-medium truncate">{parentCategory}</span>
                </div>
            );
        }
    },
  
    {
        accessorKey: 'created_at',
        header: ({ column }) => (
            <DataTableColumnHeader className="min-w-[150px]" column={column} title={'Created_at'} />
        ),
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
        header: ({ column }) => (
            <DataTableColumnHeader className="min-w-[150px]" column={column} title={'Updated_at'} />
        ),
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
