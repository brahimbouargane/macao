import { Button, Form, MultipleSelect, ProgressCircle, Select, TextField, Textarea } from '@/components/ui';
import FilesUploadDropzone from '@/components/ui/FilesUploadDropzone';
import FileUploadDropzone from '@/components/ui/FileUploadDropzone';
import FormModal from '@/components/ui/form-modal';
import { ScrollArea } from '@/components/ui/shadcn-scroll-area';
import CreateBrandForm from '@/pages/Dashboard/brands/partials/forms/create-brand-form';
import CreateCategoryFormModal from '@/pages/Dashboard/categories/partials/forms/create-category-form-modal';
import { CategoryData, PagePropsData } from '@/types';
import __ from '@/utils/translations';
import { useForm, usePage } from '@inertiajs/react';
import { useListData } from '@react-stately/data';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaBox, FaHashtag, FaMoneyBill, FaPlus, FaTruck, FaWeightHanging } from 'react-icons/fa';
import { MdDriveFileRenameOutline, MdOutlineQuestionMark } from 'react-icons/md';
import { useQueryBuilderProductsContext } from '../providers/QueryBuilderProvider';

type CreateProductFormProps = {
  setIsCreateFormModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CreateProductForm({ setIsCreateFormModalOpen }: CreateProductFormProps) {
  const { categories, brands } = useQueryBuilderProductsContext();
  const translations = usePage<PagePropsData>().props.translations;
  const [isBrandModalOpen, setIsBrandModalOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);

  const selectedCategoriesIds = useListData<CategoryData>({
    initialItems: []
  });

  const form = useForm({
    ref: '',
    name: '',
    type: '',
    description: '',
    selected_CategoriesIds: [],
    brand_id: null,
    primary_image: null,
    secondary_images: [],
    price: '',
    weight: '',
    packaging: '',
    tc_20: '',
    tc_40: ''
  });

  function createProduct(e) {
    e.preventDefault();

    form.data.selected_CategoriesIds = selectedCategoriesIds.items.map((s) => s.id);

    form.clearErrors();
    form.post(route('products.store'), {
      onSuccess: () => {
        toast.success(__(translations, 'Product created successfully'));
        form.reset();
        setIsCreateFormModalOpen(false);
      }
    });
  }

  return (
    <>
      <Form onSubmit={createProduct} validationErrors={form.errors} className="pb-4 space-y-8 ">
        <ScrollArea className="h-auto [600px] max-md:h-[600px]  p-2 ">
          <div className="grid-cols-2 md:grid max-md:space-y-8 max-md:space-4 md:gap-8">
            {/* PRIMARY PRODUCT IMAGE */}

            {/* General */}

            <fieldset className="p-2  rounded-md border-[1px] border-zinc-200 dark:border-zinc-700">
              <legend className="font-semibold ">{__(translations, 'General')}</legend>
              <div className="col-span-1 space-y-6">
                <div className="grid grid-cols-3 gap-x-4 ">
                  <TextField
                    isDisabled={form.processing}
                    type="text"
                    name="ref"
                    label={__(translations, 'Ref')}
                    value={form.data.ref}
                    autoComplete="ref"
                    autoFocus
                    onChange={(v) => form.setData('ref', v)}
                    errorMessage={form.errors.ref}
                    isRequired
                    prefix={
                      <div className="pr-2 border-r-2 ">
                        <FaHashtag className="text-colors-primary" />
                      </div>
                    }
                  />
                  <TextField
                    isDisabled={form.processing}
                    type="text"
                    name="name"
                    label={__(translations, 'Name')}
                    prefix={
                      <div className="pr-2 border-r-2 ">
                        <MdDriveFileRenameOutline className="text-colors-primary" />
                      </div>
                    }
                    value={form.data.name}
                    autoComplete="name"
                    onChange={(v) => form.setData('name', v)}
                    errorMessage={form.errors.name}
                    isRequired
                  />
                  <TextField
                    isDisabled={form.processing}
                    type="text"
                    name="type"
                    label={__(translations, 'Type')}
                    prefix={
                      <div className="pr-2 border-r-2 ">
                        <MdOutlineQuestionMark className="text-colors-primary " />
                      </div>
                    }
                    value={form.data.type}
                    autoComplete="type"
                    onChange={(v) => form.setData('type', v)}
                    errorMessage={form.errors.type}
                    isRequired
                  />
                </div>

                <Textarea
                  isDisabled={form.processing}
                  name="description"
                  label={__(translations, 'Description')}
                  value={form.data.description}
                  autoComplete="description"
                  onChange={(v) => form.setData('description', v)}
                  errorMessage={form.errors.description}
                />

                <div className="grid grid-cols-2 gap-x-4 ">
                  <div className="w-full">
                    <div className="relative ">
                      <MultipleSelect
                        key={categories.length}
                        placeholder={__(translations, 'Select a category')}
                        label={__(translations, 'Categories')}
                        name="parentCategories"
                        className="w-full min-w-full"
                        selectedItems={selectedCategoriesIds}
                        items={categories}
                        isDisabled={form.processing}
                        onItemInserted={() => {
                          form.clearErrors('selected_CategoriesIds');
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
                      <Button
                        onPress={() => setIsCategoryModalOpen(true)}
                        size="square-petite"
                        intent="secondary"
                        className="absolute top-0 right-0 self-end mb-1 size-6"
                        isDisabled={form.processing}
                      >
                        <FaPlus size={10} />
                      </Button>
                    </div>

                    {form.errors.selected_CategoriesIds && form.errors.selected_CategoriesIds.length > 0 && (
                      <div className="text-sm text-danger forced-colors:text-[Mark]">
                        {form.errors.selected_CategoriesIds}
                      </div>
                    )}
                  </div>

                  <div className="relative">
                    <Select
                      className="flex-1"
                      isDisabled={form.processing}
                      selectedKey={String(form.data.brand_id)}
                      onSelectionChange={function (key) {
                        form.setData('brand_id', key);
                      }}
                      label={__(translations, 'Brand')}
                      placeholder={__(translations, 'Select a brand')}
                      errorMessage={form.errors.brand_id}
                    >
                      <Select.Trigger />
                      <Select.List items={brands}>
                        {(item) => (
                          <Select.Option key={item.id} id={item.id} textValue={item.name}>
                            {item.name}
                          </Select.Option>
                        )}
                      </Select.List>
                    </Select>
                    <Button
                      onPress={() => setIsBrandModalOpen(true)}
                      size="square-petite"
                      intent="secondary"
                      className="absolute top-0 right-0 self-end mb-1 size-6"
                      isDisabled={form.processing}
                    >
                      <FaPlus size={10} />
                    </Button>
                  </div>
                </div>
              </div>
            </fieldset>
            <div className="pt-2 space-y-2">
              <FileUploadDropzone
                inputPreviewText={__(translations, 'Click to upload an image')}
                fieldName="primary_image"
                files={form.data.primary_image}
                isLoading={form.processing}
                setFiles={form.setData}
              />

              {/* --------------------------------- */}
              <FilesUploadDropzone
                fieldName="secondary_images"
                isLoading={form.processing}
                files={form.data.secondary_images}
                setFiles={form.setData}
              />
              {/* --------------------------------- */}
            </div>
            {/* Details */}

            <fieldset className="p-2  rounded-md border-[1px] border-zinc-200 dark:border-zinc-700 col-span-2">
              <legend className="font-semibold ">{__(translations, 'Details')}</legend>
              <div className="grid grid-cols-2 col-span-2 gap-3 md:grid-cols-5 ">
                <TextField
                  isDisabled={form.processing}
                  type="number"
                  name="price"
                  prefix={
                    <div className="pr-2 border-r-2 ">
                      <FaMoneyBill className="text-colors-primary" />
                    </div>
                  }
                  label={__(translations, 'Price')}
                  value={form.data.price}
                  autoComplete="price"
                  onChange={function (v) {
                    form.setData('price', v);
                    if (form.errors.price) {
                      form.clearErrors('price');
                    }
                  }}
                  errorMessage={form.errors.price}
                  isRequired
                />
                <TextField
                  isDisabled={form.processing}
                  type="number"
                  name="weight"
                  prefix={
                    <div className="pr-2 border-r-2 ">
                      <FaWeightHanging className="text-colors-primary" />
                    </div>
                  }
                  label={__(translations, 'Weight')}
                  value={form.data.weight}
                  autoComplete="username"
                  onChange={function (v) {
                    form.setData('weight', v);
                    if (form.errors.weight) {
                      form.clearErrors('weight');
                    }
                  }}
                  errorMessage={form.errors.weight}
                  isRequired
                />

                <TextField
                  isDisabled={form.processing}
                  type="text"
                  name="packaging"
                  label={__(translations, 'Packaging')}
                  prefix={
                    <div className="pr-2 border-r-2 ">
                      <FaBox className="text-colors-primary f " />
                    </div>
                  }
                  className=" !pl-0 max-md:col-span-2"
                  value={form.data.packaging}
                  autoComplete="packaging"
                  onChange={function (v) {
                    form.setData('packaging', v);
                    if (form.errors.packaging) {
                      form.clearErrors('packaging');
                    }
                  }}
                  errorMessage={form.errors.packaging}
                  isRequired
                />
                <TextField
                  isDisabled={form.processing}
                  type="text"
                  name="tc_20"
                  label={__(translations, "TC_20'")}
                  prefix={
                    <div className="pr-2 border-r-2 ">
                      <FaTruck className="text-colors-primary f " />
                    </div>
                  }
                  value={form.data.tc_20}
                  className=" !pl-0"
                  onChange={function (v) {
                    form.setData('tc_20', v);
                    if (form.errors.tc_20) {
                      form.clearErrors('tc_20');
                    }
                  }}
                  errorMessage={form.errors.tc_20}
                  isRequired
                />
                <TextField
                  isDisabled={form.processing}
                  type="text"
                  name="tc_40"
                  label={__(translations, "TC_40'")}
                  prefix={
                    <div className="pr-2 border-r-2 ">
                      <FaTruck className="text-colors-primary f " />
                    </div>
                  }
                  value={form.data.tc_40}
                  className=" !pl-0"
                  onChange={function (v) {
                    form.setData('tc_40', v);
                    if (form.errors.tc_40) {
                      form.clearErrors('tc_40');
                    }
                  }}
                  errorMessage={form.errors.tc_40}
                  isRequired
                />
              </div>
            </fieldset>
          </div>
          <div className="flex items-center justify-between !mt-8">
            <Button type="submit" isDisabled={form.processing} className="w-full">
              {form.processing && <ProgressCircle isIndeterminate aria-label="Processing..." />}
              {form.processing ? __(translations, 'Loading...') : __(translations, 'Create')}
            </Button>
          </div>
        </ScrollArea>
      </Form>

      <FormModal
        onOpenChange={setIsBrandModalOpen}
        state={isBrandModalOpen}
        title={`${__(translations, 'Create')} ${__(translations, 'Brand')}`}
        size="md"
      >
        <CreateBrandForm setIsCreateFormModalOpen={setIsBrandModalOpen} />
      </FormModal>
      <FormModal
        onOpenChange={setIsCategoryModalOpen}
        state={isCategoryModalOpen}
        title={`${__(translations, 'Create')} ${__(translations, 'Category')}`}
        size="2xl"
      >
        <CreateCategoryFormModal categories={categories} setIsCreateFormModalOpen={setIsCategoryModalOpen} />
      </FormModal>
    </>
  );
}
