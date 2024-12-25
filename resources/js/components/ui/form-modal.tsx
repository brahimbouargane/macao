import { PropsWithChildren } from 'react';
import { Modal } from './modal';

interface FormModalProps extends PropsWithChildren {
  state: boolean;
  onOpenChange: React.Dispatch<React.SetStateAction<boolean>>;
  description?: string;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'xs' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
  isDismissable?: boolean;
}

const FormModal = ({
  state,
  onOpenChange,
  title,
  description,
  size = '4xl',
  isDismissable = false,
  children
}: FormModalProps) => (
  <Modal.Content
    isDismissable={isDismissable}
    closeButton={true}
    isOpen={state}
    onOpenChange={onOpenChange}
    classNames={{ content: 'dark:bg-accent !p-0 ' }}
    size={size}
    aria-label="form modal"
  >
    <Modal.Header>
      <Modal.Title>{title}</Modal.Title>
      <Modal.Description>{description}</Modal.Description>
    </Modal.Header>
    <div>{children}</div>
  </Modal.Content>
);

export default FormModal;
