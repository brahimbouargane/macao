import { Button, Card, Loader, Modal, Note } from '@/components/ui';
import FormModal from '@/components/ui/form-modal';
import { PagePropsData, ProductData } from '@/types';
import __ from '@/utils/translations';
import { useForm, usePage } from '@inertiajs/react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FaHighlighter, FaTrash } from 'react-icons/fa';
import EditProductForm from '../forms/edit-product-form';

type ProductCardProps = {
  product: ProductData;
};

export default function ProductCard({ product }: ProductCardProps) {
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const translations = usePage<PagePropsData>().props.translations;

  const [deleteModal, setDeleteModal] = useState(false);
  const closeDeleteModal = () => setDeleteModal(false);

  const [isEditFormModalOpen, setIsEditFormModalOpen] = useState(false);

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
      <Card
        className="overflow-hidden transition-all duration-300 cursor-pointer bg- hover:shadow-xl dark:shadow-zinc-800 hover:border-primary/20 hover:-translate-y-2 group "
        // onClick={() => setIsViewModalOpen(true)}
        // onClick={() => null}
      >
        <Card.Header className="p-1 overflow-hidden">
          <img
            className="object-cover w-full h-40 transition-all duration-300 group-hover:scale-110 group-hover:rotate-2"
            src={product.primaryImage.optimized ?? '/images/no-image-placeholder.webp'}
            alt={product.name}
          />
        </Card.Header>
        <Card.Content className="p-3 space-y-2 bg-accent">
          <Card.Description className="!text-xs text-zinc-500">#{product.ref}</Card.Description>
          <Card.Title>{product.name}</Card.Title>
        </Card.Content>
        <Card.Footer className="flex h-auto p-4 space-x-4 text-sm">
          <Button
            intent="secondary"
            className="flex-1"
            onPress={() => {
              setIsEditFormModalOpen(true);
            }}
          >
            <FaHighlighter />
            {/* <span className=""> {__(translations, 'Edit')}</span> */}
          </Button>
          <Button className="flex-1" onPress={() => setDeleteModal(true)}>
            <FaTrash />
          </Button>
        </Card.Footer>
      </Card>

      {/* View Modal */}

      <FormModal isDismissable state={isViewModalOpen} onOpenChange={setIsViewModalOpen}>
        cool
      </FormModal>

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
