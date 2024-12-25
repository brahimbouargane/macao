/* eslint-disable @typescript-eslint/no-explicit-any */

import { FileInput, FileUploader, FileUploaderContent, FileUploaderItem } from '@/components/ui/file-uploader';
import { FaPlus } from 'react-icons/fa';

import { cn } from '@/utils/classes';
import { DropzoneOptions } from 'react-dropzone';

type FileUploadDropzoneProps = {
  fieldName: string;
  files: File[] | string[] | null;
  setFiles: (field: string, value: File[] | string[] | null) => void;
  isLoading: boolean;
  reSelect?: boolean;
};
const FilesUploadDropzone = ({ fieldName, files, setFiles, isLoading, reSelect = true }: FileUploadDropzoneProps) => {
  const defaultOptions = {
    accept: {
      'image/*': ['.jpg', '.jpeg', '.png', '.webp', '.svg']
    },
    multiple: true,
    maxFiles: 4,
    maxSize: 5 * 1024 * 1024
  } satisfies DropzoneOptions;

  return (
    <FileUploader
      value={files as File[]}
      onValueChange={(value) => {
        setFiles(fieldName, value);
      }}
      dropzoneOptions={defaultOptions}
      // reSelect={reSelect}
      isLoading={isLoading}
      className="!space-y-0  rounded-md !gap-0 h-30"
    >
      <FileUploaderContent className="grid items-center w-full grid-cols-4 p-1 border-2 border-dashed rounded-md cursor-pointer h-30 border-foreground bg-gray-50 dark:hover:bg-bray-800 dark:bg-bg hover:bg-gray-100 dark:border-card-foreground dark:hover:border-gray-500 dark:hover:bg-zinc-800">
        {files?.map((file, i) => (
          <FileUploaderItem
            key={i}
            index={i}
            className="w-full h-24 p-0 "
            aria-roledescription={`file ${i + 1} containing ${file.name}`}
          >
            <img
              src={file instanceof File ? URL.createObjectURL(file) : file}
              alt={file.name}
              className={cn(
                'object-contain object-center w-full h-full p-0 rounded-md',
                isLoading && 'grayscale-[80%] cursor-not-allowed'
              )}
            />
          </FileUploaderItem>
        ))}
        {files.length != defaultOptions.maxFiles && (
          <FileInput className="flex items-center justify-center">
            <div className="flex items-center justify-center border rounded-md size-12 bg-bg ">
              <FaPlus className="" />
            </div>
          </FileInput>
        )}
      </FileUploaderContent>
    </FileUploader>
  );
};

export default FilesUploadDropzone;
