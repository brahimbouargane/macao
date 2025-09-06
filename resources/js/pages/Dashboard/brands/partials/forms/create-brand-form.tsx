import { Button, Form, ProgressCircle, TextField } from '@/components/ui';
import { PagePropsData } from '@/types';
import __ from '@/utils/translations';
import { useForm, usePage } from '@inertiajs/react';
import React from 'react';
import toast from 'react-hot-toast';
import { MdDriveFileRenameOutline } from 'react-icons/md';

type CreateBrandFormProps = {
  setIsCreateFormModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CreateBrandForm({ setIsCreateFormModalOpen }: CreateBrandFormProps) {
  const translations = usePage<PagePropsData>().props.translations;
  const { errors, data, setData, processing, clearErrors, post, reset, setError } = useForm({
    name: ''
  });

  function createBrand(e) {
    e.preventDefault();

    post(route('brands.store'), {
      onSuccess: () => {
        toast.success(__(translations, 'Brand created successfully'));

        reset();
        //close modal
        setIsCreateFormModalOpen(false);
      }
    });
  }
  return (
    <Form onSubmit={createBrand} validationErrors={errors} className="p-4 space-y-8 ">
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
          autoFocus
          onChange={(v) => setData('name', v)}
          errorMessage={errors.name}
          isRequired
        />
        {/* <Textarea
            isDisabled={processing}
            name="description"
            label={__(translations, 'Description')}
            value={data.description}
            autoComplete="description"
            onChange={(v) => setData('description', v)}
            errorMessage={errors.description}
          /> */}
      </div>

      <div className="flex items-center justify-between !mt-8">
        <Button type="submit" isDisabled={processing} className="w-full">
          {processing && <ProgressCircle isIndeterminate aria-label="Processing..." />}
          {__(translations, 'Create')}
        </Button>
      </div>
    </Form>
  );
}
