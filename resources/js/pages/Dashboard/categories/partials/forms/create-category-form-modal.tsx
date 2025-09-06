import { Button, Form, MultipleSelect, ProgressCircle, TextField, Textarea } from '@/components/ui';
import FileUploadDropzone from '@/components/ui/FileUploadDropzone';
import { CategoryData, PagePropsData } from '@/types';
import __ from '@/utils/translations';
import { useForm, usePage } from '@inertiajs/react';
import { useListData } from '@react-stately/data';
import React from 'react';
import toast from 'react-hot-toast';
import { MdDriveFileRenameOutline } from 'react-icons/md';

type CreateCategoryFormProps = {
  setIsCreateFormModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  categories: CategoryData[];
};

export default function CreateCategoryFormModal({ categories, setIsCreateFormModalOpen }: CreateCategoryFormProps) {
  const selectedParentCategoriesIds = useListData<CategoryData>({
    initialItems: []
  });

  const translations = usePage<PagePropsData>().props.translations;
  const { errors, data, setData, processing, clearErrors, post, reset, setError } = useForm({
    name: '',
    description: '',
    image: null,
    selected_ParentCategoriesIds: [],
    withBack: true
  });

  function createCategory(e) {
    e.preventDefault();

    data.selected_ParentCategoriesIds = selectedParentCategoriesIds.items.map((s) => s.id);
    post(route('categories.store'), {
      onSuccess: () => {
        toast.success(__(translations, 'Category created successfully'));

        reset();
        //close modal
        setIsCreateFormModalOpen(false);
      }
    });
  }
  return (
    <Form onSubmit={createCategory} validationErrors={errors} className="p-4 space-y-8 ">
      <div className="grid lg:gap-x-8 lg:grid-cols-2">
        <div>
          <FileUploadDropzone
            inputPreviewText={__(translations, 'Click to upload an image')}
            fieldName="image"
            files={data.image}
            isLoading={processing}
            setFiles={setData}
          />
          {errors['image.0'] && (
            <p className="text-sm text-danger forced-colors:text-[Mark] mt-2">
              {(errors['image.0'] as string).replace('.0', '')}
            </p>
          )}
        </div>
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
          <Textarea
            isDisabled={processing}
            name="description"
            label={__(translations, 'Description')}
            value={data.description}
            autoComplete="description"
            onChange={(v) => setData('description', v)}
            errorMessage={errors.description}
          />
          {/* <Select
            selectedKey={data.parent_id}
            onSelectionChange={function (key) {
              // @ts-ignore
              setData('parent_id', key);
            }}
            label={__(translations, 'Category')}
            placeholder={__(translations, 'Select a category')}
            errorMessage={errors.parent_id}
          >
            <Select.Trigger />
            <Select.List items={categories}>
              {(item) => (
                <Select.Option key={item.id} id={item.id} textValue={item.name}>
                  {item.name}
                </Select.Option>
              )}
            </Select.List>
          </Select> */}
          <div>
            <MultipleSelect
              label={__(translations, 'Parent Categories')}
              name="parentCategories"
              selectedItems={selectedParentCategoriesIds}
              items={categories}
              isDisabled={processing}
              onItemInserted={() => {
                clearErrors('selected_ParentCategoriesIds');
              }}
              tag={(item) => (
                <MultipleSelect.Tag key={item.id} textValue={item.name}>
                  {item.name}
                </MultipleSelect.Tag>
              )}
            >
              {(item) => {
                return (
                  <MultipleSelect.Option key={item.id} id={item.id} textValue={item.name}>
                    {item.name}
                  </MultipleSelect.Option>
                );
              }}
            </MultipleSelect>
            {errors.selected_ParentCategoriesIds && errors.selected_ParentCategoriesIds.length > 0 && (
              <div className="text-sm text-danger forced-colors:text-[Mark]">{errors.selected_ParentCategoriesIds}</div>
            )}
          </div>
        </div>
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
