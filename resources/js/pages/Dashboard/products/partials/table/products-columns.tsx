import { ColumnDef } from '@tanstack/react-table';

import { DataTableRowActions } from './data-table-row-actions';

import { Avatar, Badge } from '@/components/ui';
import { BrandData, ProductData, ProductTypeData } from '@/types';
import { DataTableColumnHeader } from './data-table-column-header';

export const columns: ColumnDef<ProductData>[] = [
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
    accessorKey: 'ref',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Ref" />,
    cell: ({ row }) => <div className="w-fit">{row.getValue('ref')}</div>,
    size: 5,
    enableSorting: true,
    enableHiding: true
  },
  {
    accessorKey: 'primaryImage',
    header: ({ column }) => <DataTableColumnHeader column={column} title={'Image'} />,
    cell: ({ row }) => {
      const primaryImage: string = row.original.primaryImage.thumbnail ?? '/images/no-image-placeholder.webp';
      return (
        <div className="">
          <Avatar src={primaryImage} size={'large'} className="overflow-hidden border-2" />
        </div>
      );
    },
    enableSorting: false,
    
    size: 10
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
    },
    enableHiding: true,
    
  },
  {
    accessorKey: 'categories',
    header: ({ column }) => <DataTableColumnHeader column={column} title={'Categories'} />,
    cell: ({ row }) => {
      let categoriesNames = row.original.categoriesNames ? (row.original.categoriesNames as string[]) : null;
      if (categoriesNames == null) {
        return <div className="flex space-x-2"></div>;
      } else {
        if (categoriesNames.length > 2) {
          return (
            <div className="flex flex-wrap gap-1">
              <Badge>{categoriesNames[0]}</Badge>
              <Badge>{categoriesNames[1]}</Badge>
              <Badge className={'rounded-full  inline-flex'}>
                <span>+</span> <span>{categoriesNames.length - 2}</span>
              </Badge>
            </div>
          );
        }
        const firstTwo =
          categoriesNames.length > 2
            ? [categoriesNames[0], categoriesNames[1], `+ ${categoriesNames.length - 2}`]
            : categoriesNames;
        return (
          <div className="flex flex-wrap gap-2">
            {firstTwo.map((childCatName, index, array) => (
              <Badge
                className={array.length > 2 && index == array.length - 1 && 'rounded-full size-8'}
                key={childCatName}
              >
                {childCatName}
              </Badge>
            ))}
          </div>
        );
      }
    },
    enableSorting: false
  },
  {
    accessorKey: 'product_type',
    header: ({ column }) => <DataTableColumnHeader column={column} title={'Type'} />,
    cell: ({ row }) => {
      let type: ProductTypeData = row.getValue('product_type');

      return (
        <div className="flex space-x-2">
          <Badge className="font-medium truncate">{type?.name ?? 'N/A'}</Badge>
        </div>
      );
    }
  },
  {
    accessorKey: 'brand',
    header: ({ column }) => <DataTableColumnHeader column={column} title={'Brand'} />,
    cell: ({ row }) => {
      let brand: BrandData = row.getValue('brand');

      return (
        <div className="flex space-x-2">
          <Badge className="font-medium truncate">{brand?.name ?? 'N/A'}</Badge>
        </div>
      );
    }
  },
  // {
  //   accessorKey: 'category',
  //   header: ({ column }) => <DataTableColumnHeader column={column} title={'Category'} />,
  //   cell: ({ row }) => {
  //     let category = row.getValue('category') ? (row.getValue('category') as CategoryData).name : '';

  //     return (
  //       <div className="flex space-x-2">
  //         <span className="font-medium truncate">{category}</span>
  //       </div>
  //     );
  //   }
  // },
  // {
  //   accessorKey: 'ref_count',
  //   header: ({ column }) => <DataTableColumnHeader column={column} title={'Ref count'} />,
  //   cell: ({ row }) => {
  //     return (
  //       <div className="flex items-center justify-center space-x-2">
  //         <Badge className="font-medium truncate">{row.original.references.length}</Badge>
  //       </div>
  //     );
  //   },
  //   size: 2
  // },

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
    // filterFn: (row, id, value) => {
    //     return value.includes(row.getValue(id));
    // }
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
