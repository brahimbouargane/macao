import {
  Avatar,
  Button,
  Card,
  Container,
  DropZone,
  FileTrigger,
  Form,
  ProgressCircle,
  Select,
  TextField,
  Textarea
} from '@/components/ui';
import { DashboardLayout } from '@/layouts';
import { CategoryData, PagePropsData } from '@/types';
import __ from '@/utils/translations';
import { Head, useForm, usePage } from '@inertiajs/react';
import type { DropEvent } from '@react-types/shared';
import { IconGallery, IconPerson } from 'justd-icons';
import React from 'react';
import { isFileDropItem } from 'react-aria-components';
import toast from 'react-hot-toast';
import { twJoin } from 'tailwind-merge';
import DashboardBreadCrumbs from '../partials/dashboard-breadcrumbs';
import { MdDriveFileRenameOutline } from 'react-icons/md';

type CreateCategoryProps = {
  parentCategories: CategoryData[];
};

function Create({ parentCategories }: CreateCategoryProps) {

  const translations = usePage<PagePropsData>().props.translations;
  const { errors, data, setData, processing, clearErrors, post, reset, setError } = useForm({
    name: '',
    description: '',
    image: null,
    parent_id: null
  });
  const [droppedImage, setDroppedImage] = React.useState<string | undefined>(undefined);

  const onDropHandler = async (e: DropEvent) => {
    clearErrors('image');
    const item = e.items.filter(isFileDropItem).find((item) => item.type === 'image/jpeg' || item.type === 'image/png');
    if (item) {
      const file = await item.getFile();
      setDroppedImage(URL.createObjectURL(file));
      setData('image', file);
    } else {
      setError('image', 'Le champ image doit être un fichier de type jpeg, png, jpg.');
    }
  };

  async function onSelectHandler(e: any) {
    clearErrors('image');
    if (e) {
      const files = Array.from([...e]);
      const file = files[0] as File;

      if (file && file.type.includes('image')) {
        setDroppedImage(URL.createObjectURL(file));
        setData('image', file);
      } else {
        setError('image', 'Le champ image doit être un fichier de type jpeg, png, jpg.');
      }
    }
  }
  function createCategory(e) {
    e.preventDefault();

    post(route('categories.store'), {
      onSuccess: () => {
        toast.success(__(translations, 'Category created successfully'));
        reset();
      }
    });
  }

  return (
    <>
      <Head title={__(translations, 'Create') + ' ' + __(translations, 'Categories')} />

      {/* <DashboardBreadCrumbs /> */}
      <Container className="p-6 max-w-screen">
        <DashboardBreadCrumbs resource="Categories" />
        <div className="flex items-center justify-between py-4">
          <h1 className="text-2xl"> {__(translations, 'Create') + ' ' + __(translations, 'Category')}</h1>
        </div>
        <Card className="w-full dark:bg-accent">
          <div className="">
            <Form onSubmit={createCategory} validationErrors={errors} className="p-4 space-y-8 ">
              <div className="grid lg:gap-x-4 lg:grid-cols-2 p-4 py-6">
                <div className="flex  flex-col items-center gap-2 ">
                  <DropZone
                    getDropOperation={() => 'copy'}
                    onDrop={onDropHandler}
                    className={twJoin(
                      '[&_[data-slot=avatar]]:bg-transparent [&_[data-slot=avatar]]:outline-none  p-0 overflow-hidden  h-60 w-full border-[1px]  border-solid border-primary '
                    )}
                  >
                    {droppedImage ? (
                      <Avatar
                        src={droppedImage}
                        size="large"
                        shape="square"
                        className="w-full h-full object-cover   !rounded-none"
                      />
                    ) : data.image ? (
                      <Avatar className="!size-60 object-cover   " shape="square" src={data.image} />
                    ) : (
                      <IconGallery className="rounded-full size-28" />
                    )}
                    <input disabled={processing} type="hidden" name="image" value={droppedImage} />
                  </DropZone>

                  <FileTrigger
                    isDisabled={processing}
                    size="small"
                    withIcon={true}
                    acceptedFileTypes={['image/png', 'image/jpeg']}
                    allowsMultiple
                    onSelect={onSelectHandler}
                    appearance="solid"
                  >
                    {__(translations, 'Upload image')}
                  </FileTrigger>
                  {errors.image && <p className="text-sm text-danger forced-colors:text-[Mark]">{errors.image}</p>}
                </div>
                <div className='space-y-3'>
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
                    autoFocus
                    onChange={(v) => setData('description', v)}
                    errorMessage={errors.description}
                  />
                  <Select
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
                    <Select.List items={parentCategories}>
                      {(item) => (
                        <Select.Option key={item.id} id={item.id} textValue={item.name}>
                          {item.name}
                        </Select.Option>
                      )}
                    </Select.List>
                  </Select>
                </div>
              </div>

              <div className="flex items-center justify-between !mt-8">
                <Button type="submit" isDisabled={processing} className="w-full">
                  {processing && <ProgressCircle isIndeterminate aria-label="Processing..." />}
                  {__(translations, 'Create')}
                </Button>
              </div>
            </Form>
          </div>
        </Card>
      </Container>
    </>
  );
}

Create.layout = (page: any) => <DashboardLayout children={page} />;

export default Create;
