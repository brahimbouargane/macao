import { Button, DropZone, FileTrigger, Form, ProgressCircle, Select, TextField, Textarea } from '@/components/ui';
import { AvatarUploadPreview } from '@/components/ui/avatar-upload-preview';
import { ScrollArea } from '@/components/ui/shadcn-scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/shadcn-tabs';
import { PagePropsData } from '@/types';
import __ from '@/utils/translations';
import { useForm, usePage } from '@inertiajs/react';
import type { DropEvent } from '@react-types/shared';
import { IconGallery } from 'justd-icons';
import React from 'react';
import { isFileDropItem } from 'react-aria-components';
import toast from 'react-hot-toast';
import { FaBox, FaHashtag, FaTruck, FaWeightHanging } from 'react-icons/fa';
import { MdDriveFileRenameOutline, MdOutlineQuestionMark } from 'react-icons/md';
import { twJoin } from 'tailwind-merge';
import { useQueryBuilderProductsContext } from '../providers/QueryBuilderProvider';

type CreateProductFormProps = {
  setIsCreateFormModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function CreateProductForm({ setIsCreateFormModalOpen }: CreateProductFormProps) {
  const { categories } = useQueryBuilderProductsContext();
  const translations = usePage<PagePropsData>().props.translations;
  const form = useForm({
    name: '',
    description: '',
    type: '',
    image: null,
    ref: '',
    weight: '',
    packaging: '',
    tc_20: '',
    tc_40: '',
    category_id: null
  });
  const [droppedImage, setDroppedImage] = React.useState<string>('');

  const onDropHandler = async (e: DropEvent) => {
    form.clearErrors('image');
    const item = e.items.filter(isFileDropItem).find((item) => item.type === 'image/jpeg' || item.type === 'image/png');
    if (item) {
      const file = await item.getFile();
      setDroppedImage(URL.createObjectURL(file));
      form.setData('image', file);
    } else {
      form.setError('image', 'Le champ image doit être un fichier de type jpeg, png, jpg.');
    }
  };

  async function onSelectHandler(e: any) {
    form.clearErrors('image');
    if (e) {
      const files = Array.from([...e]);
      const file = files[0] as File;

      if (file && file.type.includes('image')) {
        setDroppedImage(URL.createObjectURL(file));
        form.setData('image', file);
      } else {
        form.setError('image', 'Le champ image doit être un fichier de type jpeg, png, jpg.');
      }
    }
  }
  function createCategory(e) {
    e.preventDefault();

    return;
    form.post(route('products.store'), {
      onSuccess: () => {
        toast.success(__(translations, 'Product created successfully'));
        form.reset();
        setIsCreateFormModalOpen(false);
      }
    });
  }

  return (
    <Form onSubmit={createCategory} validationErrors={form.errors} className="p-4 space-y-8 ">
      <Tabs defaultValue="general" aria-label="Fitness App">
        <TabsList className="flex justify-between">
          <TabsTrigger value="general">{__(translations, 'General')}</TabsTrigger>
          <TabsTrigger value="images">{__(translations, 'Images')}</TabsTrigger>
          <TabsTrigger value="rates">{__(translations, 'Rates')}</TabsTrigger>
          <TabsTrigger value="details">{__(translations, 'Details')}</TabsTrigger>
        </TabsList>
        <ScrollArea className="h-[300px]  p-2">
          <TabsContent value="general">
            <div className="space-y-6">
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
                autoFocus
                onChange={(v) => form.setData('name', v)}
                errorMessage={form.errors.name}
                isRequired
              />

              <Textarea
                isDisabled={form.processing}
                name="description"
                label={__(translations, 'Description')}
                value={form.data.description}
                autoComplete="description"
                autoFocus
                isRequired
                onChange={(v) => form.setData('description', v)}
                errorMessage={form.errors.description}
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
                autoFocus
                onChange={(v) => form.setData('type', v)}
                errorMessage={form.errors.type}
                isRequired
              />

              <Select
                selectedKey={form.data.category_id}
                onSelectionChange={function (key) {
                  // @ts-ignore
                  setData('category_id', key);
                }}
                label={__(translations, 'Category')}
                placeholder={__(translations, 'Select a category')}
                errorMessage={form.errors.category_id}
              >
                <Select.Trigger />
                <Select.List items={categories}>
                  {(item) => (
                    <Select.Option key={item.id} id={item.id} textValue={item.name}>
                      {item.name}
                    </Select.Option>
                  )}
                </Select.List>
              </Select>
            </div>
          </TabsContent>
          <TabsContent value="images">
            <div className="flex flex-col items-center justify-center gap-2 ">
              <DropZone
                getDropOperation={() => 'copy'}
                onDrop={onDropHandler}
                className={twJoin(
                  '[&_[data-slot=avatar]]:bg-transparent [&_[data-slot=avatar]]:outline-none  p-0 overflow-hidden  h-60 w-full border-[1px]  border-solid border-primary '
                )}
              >
                {droppedImage ? (
                  <AvatarUploadPreview
                    src={droppedImage}
                    size="large"
                    shape="square"
                    className="w-full h-full object-cover   !rounded-none"
                  />
                ) : form.data.image ? (
                  <AvatarUploadPreview className="!size-60 object-cover   " shape="square" src={form.data.image} />
                ) : (
                  <IconGallery className="rounded-full size-28" />
                )}
                <input disabled={form.processing} type="hidden" name="image" value={droppedImage} />
              </DropZone>

              <FileTrigger
                isDisabled={form.processing}
                size="small"
                withIcon={true}
                acceptedFileTypes={['image/png', 'image/jpeg']}
                allowsMultiple
                onSelect={onSelectHandler}
                appearance="solid"
              >
                {__(translations, 'Upload image')}
              </FileTrigger>
              {form.errors.image && (
                <p className="text-sm text-danger forced-colors:text-[Mark]">{form.errors.image}</p>
              )}
            </div>
          </TabsContent>
          <TabsContent value="rates"></TabsContent>
          <TabsContent value="details">
            <div className="grid grid-cols-2 gap-3 gap-4">
              <TextField
                type="text"
                name="ref"
                label={__(translations, 'Ref')}
                value={form.data.ref}
                className="col-span-2 mt-1"
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
                className=" !pl-0"
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
          </TabsContent>
        </ScrollArea>
      </Tabs>

      <div className="flex items-center justify-between !mt-8">
        <Button type="submit" isDisabled={form.processing} className="w-full">
          {form.processing && <ProgressCircle isIndeterminate aria-label="Processing..." />}
          {__(translations, 'Create')}
        </Button>
      </div>
    </Form>
  );
}
