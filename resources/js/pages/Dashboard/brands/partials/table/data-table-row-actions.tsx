import { Button, Menu, Modal } from '@/components/ui';
import FormModal from '@/components/ui/form-modal';
import { Loader } from '@/components/ui/loader';
import { BrandData, PagePropsData } from '@/types';
import __ from '@/utils/translations';
import { useForm, usePage } from '@inertiajs/react';
import { Row } from '@tanstack/react-table';
import { IconTrash } from 'justd-icons';
import React from 'react';
import toast from 'react-hot-toast';
import { FaHighlighter, FaTrash } from 'react-icons/fa';
import { MdOutlineMoreHoriz } from 'react-icons/md';
import EditBrandForm from '../forms/edit-brand-form';

interface DataTableRowActionsProps<TData> {
  row: Row<BrandData>;
}

export function DataTableRowActions<TData>({ row }: DataTableRowActionsProps<TData>) {
  const brand = row.original;

  const [deleteModal, setDeleteModal] = React.useState(false);
  const closeDeleteModal = () => setDeleteModal(false);

  const [viewBrandModal, setViewBrandModal] = React.useState(false);
  const closeViewBrandModal = () => setViewBrandModal(false);

  const [isEditFormModalOpen, setIsEditFormModalOpen] = React.useState(false);

  const {
    props: { translations }
  } = usePage<PagePropsData>();

  const form = useForm();
  function deleteBrand() {
    form.delete(route('brands.destroy', brand.id), {
      onSuccess: () => {
        toast.success(__(translations, 'Brand deleted successfully'), {
          icon: <IconTrash />,
          position: 'top-center'
        });
        closeDeleteModal();
      }
    });
  }

  return (
    <>
      <Modal.Content
        isOpen={viewBrandModal}
        onOpenChange={closeViewBrandModal}
        role="alertdialog"
        size="md"
        classNames={{ content: 'dark:bg-accent' }}
      >
        <Modal.Header>
          <Modal.Description>{__(translations, 'Are you sure you want to proceed?')}</Modal.Description>
        </Modal.Header>

        <Modal.Footer>
          <Modal.Close isDisabled={form.processing}>Close</Modal.Close>
        </Modal.Footer>
      </Modal.Content>

      <Menu>
        <Menu.Trigger className="flex items-center justify-center w-full">
          <MdOutlineMoreHoriz size={30} />
          <span className="sr-only">Open menu</span>
        </Menu.Trigger>
        <Menu.Content placement="bottom end" className="dark:bg-accent">
          {/* <>
                            <Menu.Separator />
                            <Menu.Item
                                className="m-0 hover:bg-red-600 hover:text-white"
                                onAction={() => setViewBrandModal(true)}
                            >
                                <IconEye className="!text-3xl " /> <span className="pl-2 "> {__(translations,'View')}</span>
                            </Menu.Item>
                        </> */}
          <>
            <Menu.Separator />
            <Menu.Item
              className="hover:bg-red-600 hover:text-white"
              onAction={() => {
                setIsEditFormModalOpen(true);
              }}
            >
              <FaHighlighter className="hover:fill-white" /> <span className="pl-2 "> {__(translations, 'Edit')}</span>
            </Menu.Item>
            {/* <Menu.Item
                                className="hover:bg-red-600 hover:text-white"
                                href={route('categories.edit', { brand: brand })}
                            >
                                <FaHighlighter  className="!text-3xl " /> <span className="pl-2 "> {__(translations,'Edit')}</span>
                            </Menu.Item> */}
          </>

          <>
            <Menu.Separator />
            <Menu.Item className="hover:bg-red-600 hover:text-white" onAction={() => setDeleteModal(true)}>
              <FaTrash className="hover:fill-white" /> <span className="pl-2 "> {__(translations, 'Delete')}</span>
            </Menu.Item>
          </>
        </Menu.Content>
      </Menu>
      <Modal.Content
        isOpen={deleteModal}
        onOpenChange={closeDeleteModal}
        role="alertdialog"
        size="md"
        classNames={{ overlay: ' backdrop-blur-sm', content: 'dark:bg-accent' }}
      >
        <Modal.Header>
          <Modal.Title>{`${__(translations, 'Delete')} "${brand.name}"`}</Modal.Title>
          <Modal.Description>{__(translations, 'Are you sure you want to proceed?')}</Modal.Description>
        </Modal.Header>
        <Modal.Footer>
          <Modal.Close isDisabled={form.processing}>Cancel</Modal.Close>
          <Button intent={'danger'} className="min-w-24" isDisabled={form.processing} onPress={deleteBrand}>
            {form.processing ? <Loader variant="spin" /> : __(translations, 'Confirm')}
          </Button>
        </Modal.Footer>
      </Modal.Content>

      <FormModal
        size="lg"
        state={isEditFormModalOpen}
        onOpenChange={setIsEditFormModalOpen}
        title={__(translations, 'Edit') + ' ' + __(translations, 'Brand')}
      >
        <EditBrandForm brand={brand} setIsModalOpen={setIsEditFormModalOpen} />
      </FormModal>
    </>
  );
}
