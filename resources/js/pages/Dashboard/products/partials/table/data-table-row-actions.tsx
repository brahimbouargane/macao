import { Button, Menu, Modal, Note } from '@/components/ui';
import FormModal from '@/components/ui/form-modal';
import { Loader } from '@/components/ui/loader';
import { PagePropsData, ProductData } from '@/types';
import __ from '@/utils/translations';
import { useForm, usePage } from '@inertiajs/react';
import { Row } from '@tanstack/react-table';
import React from 'react';
import toast from 'react-hot-toast';
import { FaHighlighter, FaTrash } from 'react-icons/fa';
import { MdOutlineMoreHoriz } from 'react-icons/md';
import EditProductForm from '../forms/edit-product-form';

interface DataTableRowActionsProps<TData> {
  row: Row<ProductData>;
}

export function DataTableRowActions<TData>({ row }: DataTableRowActionsProps<TData>) {
  const product = row.original;

  const [deleteModal, setDeleteModal] = React.useState(false);
  const closeDeleteModal = () => setDeleteModal(false);

  const [viewProductModal, setViewProductModal] = React.useState(false);
  const closeViewProductModal = () => setViewProductModal(false);

  const [isEditFormModalOpen, setIsEditFormModalOpen] = React.useState(false);

  const [isReferencesFormModalOpen, setIsReferencesFormModalOpen] = React.useState(false);

  const {
    props: { translations }
  } = usePage<PagePropsData>();

  const form = useForm();
  function deleteProduct() {
    form.delete(route('products.destroy', product.id), {
      onSuccess: () => {
        toast.success(__(translations, 'Product deleted successfully'), {
          position: 'top-center'
        });
        closeDeleteModal();
      }
    });
  }

  return (
    <>
      <Modal.Content
        isOpen={viewProductModal}
        onOpenChange={closeViewProductModal}
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
                                onAction={() => setViewProductModal(true)}
                            >
                                <IconEye className="!text-3xl " /> <span className="pl-2 "> {__(translations,'View')}</span>
                            </Menu.Item>
                        </> */}
          <>
            <Menu.Separator />
            {/* <Menu.Item
              className="hover:bg-red-600 hover:text-white"
              onAction={() => {
                setIsReferencesFormModalOpen(true);
              }}
            >
              <MdSettings className="hover:fill-white" />
              <span className="pl-2 "> {__(translations, 'Manage references')}</span>
            </Menu.Item>
            <Menu.Separator /> */}

            <Menu.Item
              className="hover:bg-red-600 hover:text-white"
              onAction={() => {
                setIsEditFormModalOpen(true);
              }}
            >
              <FaHighlighter className="hover:fill-white" /> <span className="pl-2 "> {__(translations, 'Edit')}</span>
            </Menu.Item>
          </>

          <>
            <Menu.Separator />
            <Menu.Item className="hover:bg-red-600 hover:text-white" onAction={() => setDeleteModal(true)}>
              <FaTrash className="hover:fill-white" /> <span className="pl-2 "> {__(translations, 'Delete')}</span>
            </Menu.Item>
          </>
        </Menu.Content>
      </Menu>

      {/* <ReferencesForm
        product={product}
        isReferencesFormModalOpen={isReferencesFormModalOpen}
        setIsReferencesFormModalOpen={setIsReferencesFormModalOpen}
      /> */}
      {/* EDIT PRODUCT MODADL */}
      <FormModal
        size="7xl"
        state={isEditFormModalOpen}
        onOpenChange={setIsEditFormModalOpen}
        title={__(translations, 'Edit') + ' ' + __(translations, 'Product')}
      >
        <EditProductForm product={product} setIsModalOpen={setIsEditFormModalOpen} />
      </FormModal>

      {/* DELETE PRODUCT MODAL */}
      <Modal.Content
        isOpen={deleteModal}
        onOpenChange={closeDeleteModal}
        role="alertdialog"
        size="md"
        classNames={{ overlay: ' backdrop-blur-sm', content: '' }}
      >
        <Modal.Header className="">
          <Modal.Title>{`${__(translations, 'Delete')} "${product.name}"`}</Modal.Title>
          <Modal.Description>{__(translations, 'Are you sure you want to proceed?')}</Modal.Description>
          <Note intent="danger" className="mt-2">
            {__(translations, 'No undo button here, so be sure!')}
          </Note>
        </Modal.Header>
        <Modal.Footer>
          <Button intent={'danger'} className="min-w-24" isDisabled={form.processing} onPress={deleteProduct}>
            {form.processing ? <Loader variant="spin" /> : __(translations, 'Confirm')}
          </Button>
          <Modal.Close intent="secondary" isDisabled={form.processing}>
            Cancel
          </Modal.Close>
        </Modal.Footer>
      </Modal.Content>
    </>
  );
}
