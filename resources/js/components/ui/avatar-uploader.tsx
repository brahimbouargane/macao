import React from 'react';

import { PagePropsData } from '@/types';
import __ from '@/utils/translations';
import { usePage } from '@inertiajs/react';
import type { DropEvent } from '@react-types/shared';
import { isFileDropItem } from 'react-aria-components';
import { twJoin } from 'tailwind-merge';
import { Avatar, DropZone, FileTrigger } from 'ui';
import { AvatarUploadPreview } from './avatar-upload-preview';
import FileUploadDropzone from './FileUploadDropzone';

type AvatarUploaderProps = {
  data: {
    avatar: string[];
    _method: string;
  };
  setData: (target: string, value: any) => void;
  errors: Partial<Record<'avatar', string>>;
  processing: boolean;
  clearErrors: (...fields: 'avatar'[]) => void;
  setError: {
    (field: '_method' | 'avatar', value: string): void;
    (errors: Record<'_method' | 'avatar', string>): void;
  };
  translations: any[];
};
export default function AvatarUploader({
  data,
  setData,
  errors,
  processing,
  clearErrors,
  setError,
  translations
}: AvatarUploaderProps) {
  return (
    <div className="flex flex-col items-center gap-2 ">
      {/* <DropZone
        getDropOperation={() => 'copy'}
        onDrop={onDropHandler}
        className={twJoin(
          '[&_[data-slot=avatar]]:bg-transparent [&_[data-slot=avatar]]:outline-none  p-0   size-60  border-solid bg-transparent  overflow-hidden dark:border-primary border-2'
        )}
      >
        {droppedImage ? (
          <AvatarUploadPreview
            src={droppedImage}
            className="!size-full object-contain   !rounded-none"
            shape="square"
          />
        ) : (
          <AvatarUploadPreview
            className="!size-full object-contain   !rounded-none"
            shape="square"
            src={data.avatar[0] ? data.avatar[0] : (auth.user.avatar ?? '/images/avatar-placeholder.svg')}
          />
        )}
        <input disabled={processing} type="hidden" name="avatar" value={droppedImage} />
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
        {__(translations, 'Upload avatar')}
      </FileTrigger> */}

      <FileUploadDropzone
        inputPreviewText={__(translations, 'Click to upload an image')}
        fieldName="avatar"
        files={data.avatar}
        isLoading={processing}
        setFiles={setData}
      />
      {errors.avatar && <p className="text-sm text-danger forced-colors:text-[Mark]">{errors.avatar}</p>}
    </div>
  );
}
