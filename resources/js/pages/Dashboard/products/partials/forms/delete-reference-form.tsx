import { Button, Loader, ProgressCircle } from '@/components/ui';
import { PagePropsData } from '@/types';
import __ from '@/utils/translations';
import { useForm, usePage } from '@inertiajs/react';
import toast from 'react-hot-toast';
import { useQueryBuilderProductsContext } from '../providers/QueryBuilderProvider';

type DeleteReferenceFormProps = {
  setIsDeleteFormModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  reference_id: string;
  referencesCount: number;
};

export default function DeleteReferenceForm({
  reference_id,
  setIsDeleteFormModalOpen,
  referencesCount
}: DeleteReferenceFormProps) {
  const {
    props: { translations }
  } = usePage<PagePropsData>();

  const { builder } = useQueryBuilderProductsContext();
  const form = useForm();

  function deleteReference() {
    if (referencesCount == 1) {
      builder.removeSort('ref_count');
      setIsDeleteFormModalOpen(false);
    }
    form.delete(route('references.destroy', reference_id), {
      onSuccess: () => {
        toast.success(__(translations, 'Reference deleted successfully'), {
          position: 'top-center'
        });
      }
    });
  }
  return (
    <div className="flex items-center justify-between !my-8 gap-x-8">
      <Button intent={'danger'} className="w-full" isDisabled={form.processing} onPress={deleteReference}>
        {form.processing ? <Loader variant="spin" /> : __(translations, 'Confirm')}
      </Button>
      <Button
        type="button"
        onPress={() => {
          setIsDeleteFormModalOpen(false);
        }}
        intent="secondary"
        isDisabled={form.processing}
        className="w-full"
      >
        {form.processing && <ProgressCircle isIndeterminate aria-label="Processing..." />}
        {__(translations, 'Cancel')}
      </Button>
    </div>
  );
}
