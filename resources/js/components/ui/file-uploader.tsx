import { buttonStyles } from '@/components/ui/button';
import { cn } from '@/utils/classes';
import {
  Dispatch,
  SetStateAction,
  createContext,
  forwardRef,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';
import { DropzoneOptions, DropzoneState, FileRejection, useDropzone } from 'react-dropzone';
import toast from 'react-hot-toast';
import { FaRegTrashAlt as RemoveIcon } from 'react-icons/fa';
import { Input } from './field';

type DirectionOptions = 'rtl' | 'ltr' | undefined;

type FileUploaderContextType = {
  dropzoneState: DropzoneState;
  isLOF: boolean;
  isFileTooBig: boolean;
  removeFileFromSet: (index: number) => void;
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  orientation: 'horizontal' | 'vertical';
  direction: DirectionOptions;
  isLoading: boolean;
};

const FileUploaderContext = createContext<FileUploaderContextType | null>(null);

export const useFileUpload = () => {
  const context = useContext(FileUploaderContext);
  if (!context) {
    throw new Error('useFileUpload must be used within a FileUploaderProvider');
  }
  return context;
};

type FileUploaderProps = {
  value: File[] | null;
  reSelect?: boolean;
  onValueChange: (value: File[] | null) => void;
  dropzoneOptions: DropzoneOptions;
  orientation?: 'horizontal' | 'vertical';
  isLoading: boolean;
};

export const FileUploader = forwardRef<HTMLDivElement, FileUploaderProps & React.HTMLAttributes<HTMLDivElement>>(
  (
    {
      className,
      dropzoneOptions,
      value,
      onValueChange,
      reSelect,
      orientation = 'vertical',
      children,
      dir,
      isLoading,
      ...props
    },
    ref
  ) => {
    const [isFileTooBig, setIsFileTooBig] = useState(false);
    const [isLOF, setIsLOF] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);
    const {
      accept = {
        'image/*': ['.jpg', '.jpeg', '.png', '.gif']
      },
      maxFiles = 1,
      maxSize = 4 * 1024 * 1024,
      multiple = true
    } = dropzoneOptions;

    const reSelectAll = maxFiles === 1 ? true : reSelect;
    const direction: DirectionOptions = dir === 'rtl' ? 'rtl' : 'ltr';

    const removeFileFromSet = useCallback(
      (i: number) => {
        if (!value) return;
        const newFiles = value.filter((_, index) => index !== i);
        onValueChange(newFiles);
      },
      [value, onValueChange]
    );

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();

        if (!value) return;

        const moveNext = () => {
          const nextIndex = activeIndex + 1;
          setActiveIndex(nextIndex > value.length - 1 ? 0 : nextIndex);
        };

        const movePrev = () => {
          const nextIndex = activeIndex - 1;
          setActiveIndex(nextIndex < 0 ? value.length - 1 : nextIndex);
        };

        const prevKey = orientation === 'horizontal' ? (direction === 'ltr' ? 'ArrowLeft' : 'ArrowRight') : 'ArrowUp';

        const nextKey = orientation === 'horizontal' ? (direction === 'ltr' ? 'ArrowRight' : 'ArrowLeft') : 'ArrowDown';

        if (e.key === nextKey) {
          moveNext();
        } else if (e.key === prevKey) {
          movePrev();
        } else if (e.key === 'Enter' || e.key === 'Space') {
          if (activeIndex === -1) {
            dropzoneState.inputRef.current?.click();
          }
        } else if (e.key === 'Delete' || e.key === 'Backspace') {
          if (activeIndex !== -1) {
            removeFileFromSet(activeIndex);
            if (value.length - 1 === 0) {
              setActiveIndex(-1);
              return;
            }
            movePrev();
          }
        } else if (e.key === 'Escape') {
          setActiveIndex(-1);
        }
      },
      [value, activeIndex, removeFileFromSet]
    );

    const onDrop = useCallback(
      (acceptedFiles: File[], rejectedFiles: FileRejection[]) => {
        const files = acceptedFiles;

        if (!files) {
          toast.error('Erreur de fichier, probablement trop gros', {
            position: 'bottom-center',
            duration: 10000
          });
          return;
        }

        const newValues: File[] = value ? [...value] : [];

        if (reSelectAll) {
          newValues.splice(0, newValues.length);
        }

        files.forEach((file) => {
          if (newValues.length < maxFiles) {
            newValues.push(file);
          }
        });

        onValueChange(newValues);

        if (rejectedFiles.length > 0) {
          for (let i = 0; i < rejectedFiles.length; i++) {
            if (rejectedFiles[i].errors[0]?.code === 'file-too-large') {
              toast.error(`Le fichier est trop volumineux. La taille maximale est ${maxSize / 1024 / 1024}MB`, {});
              break;
            }
            if (rejectedFiles[i].errors[0]?.code === 'file-invalid-type') {
              toast.error(`Le type de fichier doit être image de type  jpg, jpeg, png, webp ou svg`, {});
              break;
            }

            if (rejectedFiles[i].errors[0]?.code === 'too-many-files') {
              toast.error(`Maximum ${opts.maxFiles} fichiers sont autorisés.`, {});
              break;
            }
          }
        }
      },
      [reSelectAll, value]
    );

    useEffect(() => {
      if (!value) return;
      if (value.length === maxFiles) {
        setIsLOF(true);
        return;
      }
      setIsLOF(false);
    }, [value, maxFiles]);

    const opts = dropzoneOptions ? dropzoneOptions : { accept, maxFiles, maxSize, multiple };

    const dropzoneState = useDropzone({
      ...opts,
      onDrop,
      onDropRejected: () => setIsFileTooBig(true),
      onDropAccepted: () => setIsFileTooBig(false)
    });

    return (
      <FileUploaderContext.Provider
        value={{
          dropzoneState,
          isLOF,
          isFileTooBig,
          removeFileFromSet,
          activeIndex,
          setActiveIndex,
          orientation,
          direction,
          isLoading
        }}
      >
        <div
          ref={ref}
          tabIndex={0}
          onKeyDownCapture={handleKeyDown}
          className={cn('grid w-full focus:outline-none overflow-hidden ', className, {
            'gap-2': value && value.length > 0
          })}
          dir={dir}
          {...props}
        >
          {children}
        </div>
      </FileUploaderContext.Provider>
    );
  }
);

FileUploader.displayName = 'FileUploader';

export const FileUploaderContent = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => {
    const { orientation } = useFileUpload();
    const containerRef = useRef<HTMLDivElement>(null);

    return (
      <div className={cn('w-full ')} ref={containerRef} aria-description="content file holder">
        <div
          {...props}
          ref={ref}
          className={cn(
            'flex rounded-xl gap-1',
            orientation === 'horizontal' ? 'flex-raw flex-wrap' : 'flex-col',
            className
          )}
        >
          {children}
        </div>
      </div>
    );
  }
);

FileUploaderContent.displayName = 'FileUploaderContent';

export const FileUploaderItem = forwardRef<HTMLDivElement, { index: number } & React.HTMLAttributes<HTMLDivElement>>(
  ({ className, index, children, ...props }, ref) => {
    const { removeFileFromSet, activeIndex, direction, isLoading } = useFileUpload();

    const isSelected = index === activeIndex;
    return (
      <div
        ref={ref}
        className={cn(
          buttonStyles({ intent: 'secondary' }),
          'h-6 p-1 justify-between  relative',
          className,
          isSelected ? 'bg-muted' : '',
          isLoading && 'grayscale-[100%]  before: cursor-not-allowed'
        )}
        {...props}
      >
        <div className="font-medium leading-none tracking-tight flex items-center gap-1.5 h-full w-full">
          {children}
        </div>
        <button
          type="button"
          className={cn(
            'absolute bg-bg border-input rounded-full p-1 group',
            direction === 'rtl' ? 'top-4 left-4' : 'top-4 right-4',
            isLoading && 'cursor-not-allowed'
          )}
          disabled={isLoading}
          onClick={() => removeFileFromSet(index)}
        >
          <RemoveIcon className="w-5 h-5 duration-200 ease-in-out group-hover:stroke-destructive " />
        </button>
      </div>
    );
  }
);

FileUploaderItem.displayName = 'FileUploaderItem';

export const FileInput = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const { dropzoneState, isFileTooBig, isLOF, isLoading } = useFileUpload();
    const rootProps = isLOF || isLoading ? {} : dropzoneState.getRootProps();

    return (
      <div
        ref={ref}
        {...props}
        className={`relative w-full h-fit ${isLOF || isLoading ? 'opacity-50 cursor-not-allowed ' : 'cursor-pointer '}`}
      >
        <div
          className={cn(
            `w-full rounded-lg duration-300 ease-in-out
         ${
           dropzoneState.isDragAccept
             ? 'border-green-500'
             : dropzoneState.isDragReject || isFileTooBig
               ? 'border-red-500'
               : 'border-gray-300'
         }`,
            className
          )}
          {...rootProps}
        >
          {children}
        </div>
        <Input
          ref={dropzoneState.inputRef}
          disabled={isLOF || isLoading}
          {...dropzoneState.getInputProps()}
          className={`${isLOF || isLoading ? 'cursor-not-allowed bg-red-500' : ''}`}
        />
      </div>
    );
  }
);

FileInput.displayName = 'FileInput';
