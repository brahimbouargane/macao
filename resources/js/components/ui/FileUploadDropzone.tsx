/* eslint-disable @typescript-eslint/no-explicit-any */

import { FileInput, FileUploader, FileUploaderContent, FileUploaderItem } from '@/components/ui/file-uploader';
import { cn } from '@/utils/classes';

import { DropzoneOptions } from 'react-dropzone';

type FileUploadDropzoneProps = {
  fieldName: string;
  files: File[] | string[] | null;
  setFiles: (fieldName: string, value: File[] | string[] | null) => void;
  dropZoneOptions?: Partial<DropzoneOptions>;
  isLoading: boolean;
  inputPreviewText: string;
};
const FileUploadDropzone = ({
  fieldName,
  files,
  setFiles,
  dropZoneOptions,
  isLoading,
  inputPreviewText
}: FileUploadDropzoneProps) => {
  let defaultOptions: DropzoneOptions = {
    accept: {
      'image/jpg': ['.jpg', '.jpeg', '.png', '.webp', '.svg'],
      'image/jpeg': ['.jpg', '.jpeg', '.png', '.webp', '.svg'],
      'image/png': ['.jpg', '.jpeg', '.png', '.webp', '.svg'],
      'image/webp': ['.jpg', '.jpeg', '.png', '.webp', '.svg'],
      'image/svg': ['.jpg', '.jpeg', '.png', '.webp', '.svg']
    },
    multiple: false,
    maxFiles: 1,
    maxSize: 5 * 1024 * 1024
  };

  defaultOptions = {
    ...(dropZoneOptions && dropZoneOptions),
    ...defaultOptions
  };

  return (
    <FileUploader
      value={files as File[]}
      onValueChange={(value) => {
        setFiles(fieldName, value);
      }}
      dropzoneOptions={defaultOptions}
      className="w-full rounded-md h-80"
      isLoading={isLoading}
    >
      {files?.length !== defaultOptions.maxFiles && (
        <FileInput className="w-full h-full ">
          <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg cursor-pointer bg-zinc-50 h-80 md:w-full border-foreground dark:hover:bg-bray-800 dark:bg-bg hover:bg-zinc-100 dark:border-card-foreground dark:border-zinc-500 border-zinc-300 dark:hover:bg-zinc-800">
            <svg
              className={'w-10 h-10  text-gray-400'}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>

            <div className="text-center ">
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">{inputPreviewText}</span>
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG, JPEG, WEBP (MAX 5MB)</p>
            </div>
          </div>
        </FileInput>
      )}

      <FileUploaderContent className="flex flex-row items-center gap-2 p-0 rounded-md size-full h-52 md:w-full bg-secondary">
        {files?.map((file, i) => (
          <FileUploaderItem
            key={i}
            index={i}
            className="p-0 size-full md:w-full "
            // aria-roledescription={`file ${i + 1} containing ${
            //     file.name
            // }`}
          >
            <img
              src={file instanceof File ? URL.createObjectURL(file) : file}
              alt={file instanceof File ? file.name : file}
              loading="eager"
              className={cn(
                'object-contain object-center w-full h-full p-0 rounded-md',
                isLoading && 'grayscale-[80%] cursor-not-allowed'
              )}
            />
          </FileUploaderItem>
        ))}
      </FileUploaderContent>
    </FileUploader>
  );
};

export default FileUploadDropzone;
