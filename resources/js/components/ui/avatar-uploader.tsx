import React from 'react';

import { PagePropsData } from '@/types';
import __ from '@/utils/translations';
import { usePage } from '@inertiajs/react';
import type { DropEvent } from '@react-types/shared';
import { isFileDropItem } from 'react-aria-components';
import { twJoin } from 'tailwind-merge';
import { Avatar, DropZone, FileTrigger } from 'ui';

type AvatarUploaderProps = {
    data: {
        avatar: string | null;
    };
    setData: (target: string, value: any) => void;
    errors: Partial<Record<'avatar', string>>;
    processing: boolean;
    clearErrors: (...fields: 'avatar'[]) => void;
    setError: {
        (field: "_method" | "avatar", value: string): void;
        (errors: Record<"_method" | "avatar", string>): void;
    }
    translations : any[]
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
    const [droppedImage, setDroppedImage] = React.useState<string>('');
    const { auth } = usePage<PagePropsData>().props;

    const onDropHandler = async (e: DropEvent) => {
        clearErrors('avatar');
        const item = e.items
            .filter(isFileDropItem)
            .find((item) => item.type === 'image/jpeg' || item.type === 'image/png');
        if (item) {
            const file = await item.getFile();
            setDroppedImage(URL.createObjectURL(file));
            setData('avatar', file);
        } else {
            setError('avatar', 'Le champ avatar doit être un fichier de type jpeg, png, jpg.');
        }
    };

    async function onSelectHandler(e: any) {
        clearErrors('avatar');
        if (e) {
            const files = Array.from([...e]);
            const file = files[0] as File;

            if (file && file.type.includes('image')) {
                setDroppedImage(URL.createObjectURL(file));
                setData('avatar', file);
            } else {
                setError('avatar', 'Le champ avatar doit être un fichier de type jpeg, png, jpg.');
            }
        }
    }

    return (
        <div className="flex flex-col items-center gap-2 ">
            <DropZone
                getDropOperation={() => 'copy'}
                onDrop={onDropHandler}
                className={twJoin(
                    '[&_[data-slot=avatar]]:bg-transparent [&_[data-slot=avatar]]:outline-none  p-0   size-60  border-solid bg-transparent  overflow-hidden'
                )}
            >
                {droppedImage ? (
                    <Avatar src={droppedImage} className="!size-60 object-contain   !rounded-none" shape="square" />
                ) : (
                    <Avatar
                        className="!size-60 object-contain   !rounded-none"
                        shape="square"
                        src={data.avatar ? data.avatar : auth.user.avatar}
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
                {__(translations,'Upload avatar')}
            </FileTrigger>
            {errors.avatar && <p className="text-sm text-danger forced-colors:text-[Mark]">{errors.avatar}</p>}
        </div>
    );
}
