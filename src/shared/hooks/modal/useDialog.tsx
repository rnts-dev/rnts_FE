import { Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';

export enum DialogType {
  CONFIRM = 'confirm',
  ALERT = 'alert',
}

export interface UseDialogProps {
  type?: DialogType;
  header?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  confirmProps?: {
    component: React.ReactNode;
    onClick: () => void;
  };
  cancelProps?: {
    component: React.ReactNode;
    onClick: () => void;
  };
}

export const useDialog = ({ cancelProps, ...props }: UseDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [option, setOptions] = useState<UseDialogProps>({
    cancelProps,
    ...props,
  });

  const open = useCallback(
    (options?: UseDialogProps) => {
      if (options) {
        setOptions((prev) => ({
          ...prev,
          ...options,
        }));
      }
      setIsOpen(true);
    },
    [setIsOpen],
  );

  const close = useCallback(() => {
    if (cancelProps) {
      // eslint-disable-next-line no-unused-expressions
      cancelProps.onClick;
    }
    setIsOpen(false);
  }, [cancelProps?.onClick]);

  const rendered = () => (
    <Modal isOpen={isOpen} onClose={() => {}} size="sm">
      <ModalOverlay />

      <ModalContent>
        <div className="header">
          <p className="title">{option.header}</p>
          <p className="description">{option.description}</p>
        </div>

        <ModalBody>{option?.children}</ModalBody>

        {option.type === DialogType.ALERT && (
          <div>
            <button
              type="button"
              className="btn btn-primary popup__confirm"
              onClick={() => {
                option.confirmProps?.onClick();
                setIsOpen(false);
              }}>
              {option.confirmProps?.component}
            </button>
          </div>
        )}

        {option.type === DialogType.CONFIRM && (
          <div>
            <button type="button" className="btn btn-secondary popup__cancel" onClick={close}>
              {option.cancelProps?.component}
            </button>
            <button type="button" className="btn btn-primary popup__confirm" onClick={option.confirmProps?.onClick}>
              {option.confirmProps?.component}
            </button>
          </div>
        )}

        {/* <ModalFooter>{button}</ModalFooter> */}
      </ModalContent>
    </Modal>
  );
  return { rendered, open, close };
};
