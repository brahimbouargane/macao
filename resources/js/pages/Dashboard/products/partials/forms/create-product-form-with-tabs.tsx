import {
  Badge,
  Button,
  Description,
  Form,
  Loader,
  MultipleSelect,
  ProgressCircle,
  Select,
  Switch,
  TextField,
  Textarea
} from '@/components/ui';
import { FcInfo } from "react-icons/fc";

import FilesUploadDropzone from '@/components/ui/FilesUploadDropzone';
import FileUploadDropzone from '@/components/ui/FileUploadDropzone';
import FormModal from '@/components/ui/form-modal';
import { ScrollArea } from '@/components/ui/shadcn-scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/shadcn-tabs';
import CreateBrandForm from '@/pages/Dashboard/brands/partials/forms/create-brand-form';
import CreateCategoryFormModal from '@/pages/Dashboard/categories/partials/forms/create-category-form-modal';
import CreateProductTypeForm from '@/pages/Dashboard/productTypes/partials/forms/create-product-type-form';
import { CategoryData, PagePropsData } from '@/types';
import __ from '@/utils/translations';
import { useForm, usePage } from '@inertiajs/react';
import { useListData } from '@react-stately/data';
import { Camera, Image } from 'lucide-react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaBox, FaHashtag, FaMoneyBill, FaPlus, FaTruck, FaWeightHanging } from 'react-icons/fa';
import { MdDriveFileRenameOutline } from 'react-icons/md';
import { useQueryBuilderProductsContext } from '../providers/QueryBuilderProvider';

import frFlag from '@/assets/images/fr_flag.svg';
import ukFlag from '@/assets/images/uk_flag.svg';
import { generateTextUsingHuggingFace, getFormErrorsFor } from '@/utils/helpers';

type CreateProductFormWithTabsProps = {
  setIsCreateFormModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CreateProductFormWithTabs({ setIsCreateFormModalOpen }: CreateProductFormWithTabsProps) {
  const { categories, brands, productTypes } = useQueryBuilderProductsContext();
  const translations = usePage<PagePropsData>().props.translations;
  const [isBrandModalOpen, setIsBrandModalOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isProductTypeModalOpen, setIsProductTypeModalOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const selectedCategoriesIds = useListData<CategoryData>({
    initialItems: []
  });

  const form = useForm({
    ref: '',
    name: '',
    description: '',
    name_en: '',
    description_en: '',
    selected_CategoriesIds: [],
    brand_id: null,
    product_type_id: null,
    primary_image: null,
    secondary_images: [],
    price: '',
    weight: '',
    packaging: '',
    tc_20: '',
    tc_40: '',
    active: true
  });
  
  



  function createProduct(e) {
    e.preventDefault();

    form.data.selected_CategoriesIds = selectedCategoriesIds.items.map((s) => s.id);

    form.clearErrors();
    const timer = setTimeout(() => {
      toast.loading(
        __(
          translations,
          'Processing your request. This might take a while due to image optimization. Thank you for your patience!'
        ),
        {
          id: 'ld'
        }
      );
    }, 10000);
    form.post(route('products.store'), {
      onSuccess: () => {
        clearTimeout(timer);
        toast.remove('ld');
        toast.success(__(translations, 'Product created successfully'), { id: 'ld' });
        form.reset();
        setIsCreateFormModalOpen(false);
      },
      onError: () => {
        clearTimeout(timer);
        toast.remove('ld');
      }
    });
  }

  // Errors Indicators
  let generalErrors = getFormErrorsFor(
    ['ref', 'name', 'description', 'product_type_id', 'selected_CategoriesIds', 'brand_id'],
    form.errors
  );

  // Images Indicators
  let imagesErrors = getFormErrorsFor(['primary_image', 'secondary_images'], form.errors);

  // Tarif Indicators
  let tarifErrors = getFormErrorsFor(['price'], form.errors);

  // Details Indicators
  let detailsErrors = getFormErrorsFor(['weight', 'packaging', 'tc_20', 'tc_40'], form.errors);

  async function generateDescriptionText(lang: 'French' | 'English'){
    let targetLang = lang == 'English' ? form.data.name_en.length == 0 : form.data.name.length == 0;
    if(targetLang || !form.data.brand_id  || selectedCategoriesIds.items.length == 0){
      toast.error(__(translations,'Product name, category, and brand are required for this action.'),{icon :<FcInfo size={30}/> })
    }else{

      setIsGenerating(true);
      const result = await generateTextUsingHuggingFace(form.data.name,(selectedCategoriesIds.items)[0].name,brands.find(b=>b.id == form.data.brand_id).name,lang)
      if(result.ok){
       lang == "English" ?   form.data.description_en = result.text : form.data.description = result.text;
      }else{
        toast.error(result.text)
      }
      setIsGenerating(false);
    }
  }

  return (
    <>
      <Form onSubmit={createProduct} validationErrors={form.errors} className="pb-2 ">
        <Tabs defaultValue="general" aria-label="Fitness App">
          <TabsList className="flex justify-between">
            <TabsTrigger value="general">
              {__(translations, 'General')}
              {generalErrors > 0 && (
                <Badge
                  shape="circle"
                  intent="secondary"
                  className="ml-2 font-bold border-2 animate-wiggle animate-infinite text-primary border-primary/50 dark:text-white dark:border-white"
                >
                  {generalErrors}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="images">
              {__(translations, 'Images')}
              {imagesErrors > 0 && (
                <Badge
                  shape="circle"
                  intent="danger"
                  className="ml-2 font-bold border-2 animate-wiggle animate-infinite text-primary border-primary/50 dark:text-white dark:border-white"
                >
                  {imagesErrors}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="rates">
              {__(translations, 'Rates')}{' '}
              {tarifErrors > 0 && (
                <Badge
                  shape="circle"
                  intent="danger"
                  className="ml-2 font-bold border-2 animate-wiggle animate-infinite text-primary border-primary/50 dark:text-white dark:border-white"
                >
                  {tarifErrors}
                </Badge>
              )}
            </TabsTrigger>

            <TabsTrigger value="details">
              {__(translations, 'Details')}{' '}
              {detailsErrors > 0 && (
                <Badge
                  shape="circle"
                  intent="danger"
                  className="ml-2 font-bold border-2 animate-wiggle animate-infinite text-primary border-primary/50 dark:text-white dark:border-white"
                >
                  {detailsErrors}
                </Badge>
              )}
            </TabsTrigger>
          </TabsList>
          <ScrollArea className=" h-[500px] md:h-auto md:min-h-[400px]  p-2">
            <TabsContent value="general" className="animate-fade-down animate-duration-[400ms]">
              {/* General */}
              <div className="col-span-1 space-y-6">
                <div className="grid gap-3 space-y-4 md:grid-cols-1 ">
                  <div className="grid-cols-3 md:grid gap-x-6">
                    <TextField
                      isDisabled={form.processing }
                      type="text"
                      name="ref"
                      label={__(translations, 'Ref')}
                      value={form.data.ref}
                      autoComplete="ref"
                      onChange={(v) => form.setData('ref', v)}
                      errorMessage={form.errors.ref}
                      isRequired
                      prefix={
                        <div className="pr-2 border-r-2 ">
                          <FaHashtag className="text-colors-primary" />
                        </div>
                      }
                      className="col-span-2"
                    />
                    <div className="grid-cols-3 md:grid max-md:my-6">
                      <Switch
                      isDisabled={form.processing }
                        isSelected={form.data.active}
                        onChange={(isSelected) => form.setData('active', isSelected)}
                        value="dark_mode"
                      >
                        {__(translations, form.data.active ? 'Activated' : 'Deactivated')}
                      </Switch>
                      <Description className=" block [&>strong]:text-fg col-span-2">
                        {__(translations, 'Toggle to show or hide this product on the website')}
                      </Description>
                    </div>
                  </div>

                  {/* Name and Description fields */}
                  <Tabs defaultValue="French" aria-label="Fitness App" className="border-[2px] rounded-md">
                    <TabsList className="flex justify-around">
                      <TabsTrigger value="French">
                        <img src={frFlag} alt="french flag" className="w-5 h-5 mr-2" /> {__(translations, 'French')}
                      </TabsTrigger>
                      <TabsTrigger value="English">
                        <img src={ukFlag} alt="english flag" className="w-5 h-5 mr-2" /> {__(translations, 'English')}
                      </TabsTrigger>
                    </TabsList>
                    <TabsContent value="French" className="p-2 space-y-4 animate-fade-down animate-duration-[400ms]">
                      <TextField
                        isDisabled={form.processing }
                        type="text"
                        name="name"
                        label={`${__(translations, 'Name')} ( FR )`}
                        prefix={
                          <div className="pr-2 border-r-2 ">
                            <MdDriveFileRenameOutline className="text-colors-primary" />
                          </div>
                        }
                        value={form.data.name}
                        autoComplete="name"
                        onChange={(v) => form.setData('name', v)}
                        errorMessage={form.errors.name}
                      />
                      <div className='flex flex-col justify-end'>
                        <Textarea
                          isDisabled={form.processing || isGenerating }
                          name="description"
                          label={`${__(translations, 'Description')} ( FR )`}
                          value={form.data.description}
                          autoComplete="description"
                          onChange={(v) => form.setData('description', v)}
                          errorMessage={form.errors.description}
                        />
                        <Button isDisabled={form.processing || isGenerating} onPress={()=>{
                          generateDescriptionText('French')
                        }} appearance="plain" intent="secondary" className="p-0 ml-auto underline transition-all text-info hover:bg-transparent hover:scale-105">
                          { isGenerating ? <div className='flex items-center gap-x-2'><Loader  /> <span>{__(translations,"Processing...")}</span></div> : __(translations, 'Generate Description with AI') }
                        </Button>
                      </div>
                    </TabsContent>
                    <TabsContent value="English" className="p-2 space-y-4 animate-fade-down animate-duration-[400ms]">
                      <TextField
                        isDisabled={form.processing }
                        type="text"
                        name="name_en"
                        label={`${__(translations, 'Name')} ( EN )`}
                        prefix={
                          <div className="pr-2 border-r-2 ">
                            <MdDriveFileRenameOutline className="text-colors-primary" />
                          </div>
                        }
                        value={form.data.name_en}
                        autoComplete="name"
                        onChange={(v) => form.setData('name_en', v)}
                        errorMessage={form.errors.name_en}
                      />
                      <div className='flex flex-col justify-end'>
                        <Textarea
                          isDisabled={form.processing || isGenerating}
                          name="description_en"
                          label={`${__(translations, 'Description')} ( EN )`}
                          value={form.data.description_en}
                          autoComplete="description"
                          onChange={(v) => form.setData('description_en', v)}
                          errorMessage={form.errors.description_en}
                        />
                        <Button isDisabled={form.processing || isGenerating} onPress={()=>{
                          generateDescriptionText('English')
                        }} appearance="plain" intent="secondary" className="p-0 ml-auto underline transition-all text-info hover:bg-transparent hover:scale-105">
                          { isGenerating ? <div className='flex items-center gap-x-2'><Loader  /> <span>{__(translations,"Processing...")}</span></div> : __(translations, 'Generate Description with AI') }
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                  <div className="grid-cols-2 gap-6 md:grid max-md:space-y-8">
                    {/* Brand field */}
                    <div className="relative">
                      <Select
                        className="flex-1"
                        isDisabled={form.processing }
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
                        isDisabled={form.processing }
                      >
                        <FaPlus size={10} />
                      </Button>
                    </div>
                    {/* type field*/}

                    <div className="relative">
                      <Select
                        isDisabled={form.processing }
                        selectedKey={String(form.data.product_type_id)}
                        onSelectionChange={function (key) {
                          form.setData('product_type_id', key);
                        }}
                        label={__(translations, 'Type')}
                        placeholder={__(translations, 'Select a type')}
                        errorMessage={form.errors.product_type_id}
                      >
                        <Select.Trigger />
                        <Select.List items={productTypes}>
                          {(item) => (
                            <Select.Option key={item.id} id={item.id} textValue={item.name}>
                              {item.name}
                            </Select.Option>
                          )}
                        </Select.List>
                      </Select>
                      <Button
                        onPress={() => setIsProductTypeModalOpen(true)}
                        size="square-petite"
                        intent="secondary"
                        className="absolute top-0 right-0 self-end mb-1 size-6"
                        isDisabled={form.processing }
                      >
                        <FaPlus size={10} />
                      </Button>
                    </div>
                    {/* Categories */}
                    <div className="w-full col-span-2">
                      <div className="relative ">
                        <MultipleSelect
                          key={categories.length}
                          placeholder={__(translations, 'Select a category')}
                          label={__(translations, 'Categories')}
                          name="parentCategories"
                          className="w-full min-w-full"
                          selectedItems={selectedCategoriesIds}
                          items={categories}
                          isDisabled={form.processing }
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
                          isDisabled={form.processing }
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
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="images" className="animate-fade-down animate-duration-[400ms]">
              {/* File Upload */}
              <div className="grid-cols-2 col-span-2  max-md:pt-2 md:grid md:gap-x-6 max-md:space-y-6">
                <div>
                  <div className="flex items-center justify-start mb-5 text-xl gap-x-4">
                    <Camera />
                    <span>{__(translations, 'Forward image')}</span>
                  </div>

                  <FileUploadDropzone
                    inputPreviewText={__(translations, 'Click to upload an image')}
                    fieldName="primary_image"
                    files={form.data.primary_image}
                    isLoading={form.processing ||  isGenerating}
                    setFiles={form.setData}
                    className="mt-2"
                    errorText={form.errors.primary_image}
                  />
                  {form.errors.primary_image && (
                    <span className="text-sm text-danger">{form.errors.primary_image}</span>
                  )}
                </div>

                {/* --------------------------------- */}
                <div className="h-full">
                  <div className="flex items-center justify-start mb-5 text-xl gap-x-4">
                    <Image /> {__(translations, 'Secondary Images')}
                  </div>
                  <FilesUploadDropzone
                    fieldName="secondary_images"
                    isLoading={form.processing }
                    files={form.data.secondary_images}
                    setFiles={form.setData}
                    className="gap-x-2"
                  />
                  {form.errors.secondary_images && (
                    <span className="text-sm text-danger">{form.errors.secondary_images}</span>
                  )}
                </div>
                {/* --------------------------------- */}
              </div>
            </TabsContent>
            <TabsContent value="rates" className="animate-fade-down animate-duration-[400ms]">
              <TextField
                isDisabled={form.processing }
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
              />
            </TabsContent>
            <TabsContent value="details" className="animate-fade-down animate-duration-[400ms]">
              {/* Details */}

              <div className="grid-cols-1 gap-8 md:grid md:grid-cols-2 max-md:space-y-8 ">
                <TextField
                  isDisabled={form.processing }
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
                />

                <TextField
                  isDisabled={form.processing }
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
                />
                <TextField
                  isDisabled={form.processing }
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
                />
                <TextField
                  isDisabled={form.processing }
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
                />
              </div>
            </TabsContent>
          </ScrollArea>
        </Tabs>
        <div className="flex items-center justify-between ">
          <Button type="submit" isDisabled={form.processing } className="w-full mt-4">
            {form.processing && <ProgressCircle isIndeterminate aria-label="Processing..." />}
            {form.processing ? __(translations, 'Loading...') : __(translations, 'Create')}
          </Button>
        </div>
      </Form>
      {/* ProductType modal */}
      <FormModal
        onOpenChange={setIsProductTypeModalOpen}
        state={isProductTypeModalOpen}
        title={`${__(translations, 'Create')} ${__(translations, 'Type')}`}
        size="md"
      >
        <CreateProductTypeForm setIsCreateFormModalOpen={setIsProductTypeModalOpen} />
      </FormModal>
      {/* Brand modal */}
      <FormModal
        onOpenChange={setIsBrandModalOpen}
        state={isBrandModalOpen}
        title={`${__(translations, 'Create')} ${__(translations, 'Brand')}`}
        size="md"
      >
        <CreateBrandForm setIsCreateFormModalOpen={setIsBrandModalOpen} />
      </FormModal>

      {/* Category modal */}
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
