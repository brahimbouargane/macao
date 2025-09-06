import { Button, Form, ProgressCircle, TextField } from '@/components/ui';
import { PagePropsData } from '@/types';
import { cn } from '@/utils/classes';
import __ from '@/utils/translations';
import { useForm, usePage } from '@inertiajs/react';
import toast from 'react-hot-toast';
import { FaBox, FaHashtag, FaTruck, FaWeightHanging } from 'react-icons/fa';

type CreateReferenceFormProps = {
  setIsCreateFormModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  product_id: string;
};

export default function CreateReferenceForm({ product_id, setIsCreateFormModalOpen }: CreateReferenceFormProps) {
  const translations = usePage<PagePropsData>().props.translations;

  const form = useForm({
    ref: '',
    weight: '',
    packaging: '',
    tc_20: '',
    tc_40: '',
    product_id: product_id
  });

  function createReference(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    form.post(route('references.store'), {
      onSuccess: () => {
        toast.success(__(translations, 'Reference created successfully'));
        form.reset();

        setIsCreateFormModalOpen(false);
      }
    });
  }

  return (
    <Form onSubmit={createReference} validationErrors={form.errors} className={cn('space-y-8 p-4')}>
      <div className="grid md:grid-cols-1 md:gap-x-6 gap-y-6 ">
        <TextField
          type="text"
          name="ref"
          label={__(translations, 'Ref')}
          value={form.data.ref}
          className="mt-1"
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
          className=" !pl-0"
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

      <div className="flex items-center justify-between !mt-8 gap-x-8">
        <Button type="submit" isDisabled={form.processing} className="w-full">
          {form.processing && <ProgressCircle isIndeterminate aria-label="Processing..." />}
          {__(translations, 'Create')}
        </Button>
        <Button
          type="button"
          onPress={() => {
            setIsCreateFormModalOpen(false);
          }}
          intent="secondary"
          isDisabled={form.processing}
          className="w-full "
        >
          {form.processing && <ProgressCircle isIndeterminate aria-label="Processing..." />}
          {__(translations, 'Cancel')}
        </Button>
      </div>
    </Form>
  );
}
