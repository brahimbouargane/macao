import { Button, Form, ProgressCircle, TextField } from '@/components/ui';
import { ProductTypeData, PagePropsData } from '@/types';
import __ from '@/utils/translations';
import { useForm, usePage } from '@inertiajs/react';
import React from 'react';
import toast from 'react-hot-toast';
import { MdDriveFileRenameOutline } from 'react-icons/md';

type EditProductTypeFormProps = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  productType: ProductTypeData;
};

export default function EditProductTypeForm({ setIsModalOpen, productType }: EditProductTypeFormProps) {
  const translations = usePage<PagePropsData>().props.translations;

  const { errors, data, setData, processing, clearErrors, post, reset, setError } = useForm({
    name: productType.name,
    _method: 'patch'
  });

  function updateBrand(e) {
    e.preventDefault();

    post(route('productTypes.update', productType.id), {
      onSuccess: () => {
        toast.success(__(translations, 'productType updated successfully'));
        reset();
        // close modal
        setIsModalOpen(false);
      }
    });
  }
  return (
    <Form onSubmit={updateBrand} validationErrors={errors} className="p-4 space-y-8 ">
      <div className="space-y-3">
        <TextField
          isDisabled={processing}
          type="text"
          name="name"
          label={__(translations, 'Name')}
          prefix={
            <div className="border-r-2 ">
              <MdDriveFileRenameOutline className="text-colors-primary" />
            </div>
          }
          value={data.name}
          autoComplete="name"
          onChange={(v) => setData('name', v)}
          errorMessage={errors.name}
          isRequired
        />
      </div>

      <div className="flex items-center justify-between !mt-8">
        <Button type="submit" isDisabled={processing} className="w-full">
          {processing && <ProgressCircle isIndeterminate aria-label="Processing..." />}
          {__(translations, 'Modify')}
        </Button>
      </div>
    </Form>
  );
}
