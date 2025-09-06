import { Button,  Menu, Modal } from '@/components/ui';
import { Loader } from '@/components/ui/loader';
import { PagePropsData,  CategoryData } from '@/types';
import __ from '@/utils/translations';
import { useForm, usePage } from '@inertiajs/react';
import { Row, Table } from '@tanstack/react-table';
import { IconTrash } from 'justd-icons';
import React from 'react';
import toast from 'react-hot-toast';
import { MdOutlineMoreHoriz } from 'react-icons/md';
import EditCategoryForm from '../forms/edit-category-form';
import FormModal from '@/components/ui/form-modal';
import { FaHighlighter, FaTrash } from 'react-icons/fa';

interface DataTableRowActionsProps<TData> {
  row: Row<CategoryData>;
}

export function DataTableRowActions<TData>({ row }: DataTableRowActionsProps<TData>) {
  const category = row.original;

  const [deleteModal, setDeleteModal] = React.useState(false);
  const closeDeleteModal = () => setDeleteModal(false);

  const [viewCategoryModal, setViewCategoryModal] = React.useState(false);
  const closeViewCategoryModal = () => setViewCategoryModal(false);

  const [isEditFormModalOpen, setIsEditFormModalOpen] = React.useState(false);

  const {
    props: { translations }
  } = usePage<PagePropsData>();

  const form = useForm();
  function deleteCategory() {
    form.delete(route('categories.destroy', category.id), {
      onSuccess: () => {
        toast.success(__(translations, 'Category deleted successfully'), {
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
        isOpen={viewCategoryModal}
        onOpenChange={closeViewCategoryModal}
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
                                onAction={() => setViewCategoryModal(true)}
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
                                href={route('categories.edit', { category: category })}
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
          <Modal.Title>{`${__(translations, 'Delete')} "${category.name}"`}</Modal.Title>
          <Modal.Description>{__(translations, 'Are you sure you want to proceed?')}</Modal.Description>
        </Modal.Header>
        <Modal.Footer>
          <Modal.Close isDisabled={form.processing}>Cancel</Modal.Close>
          <Button intent={'danger'} className="min-w-24" isDisabled={form.processing} onPress={deleteCategory}>
            {form.processing ? <Loader variant="spin" /> : __(translations, 'Confirm')}
          </Button>
        </Modal.Footer>
      </Modal.Content>

      <FormModal
        state={isEditFormModalOpen}
        onOpenChange={setIsEditFormModalOpen}
        title={__(translations, 'Edit') + ' ' + __(translations, 'Category')}
      >
        <EditCategoryForm category={category} setIsModalOpen={setIsEditFormModalOpen} />
      </FormModal>
    </>
  );
}
