import { modalResolveState, modalState } from '@/shared/store/atoms/modal';
import { useAtom } from 'jotai';
import * as React from 'react';

export type ModalType = {
  header: string;
  description: React.ReactNode;
  contents: React.ReactNode;
  type: 'alert' | 'confirm';
  confirmTitle: React.ReactNode;
  cancelTitle: React.ReactNode;
};

export type BaseType = Partial<Pick<ModalType, 'header' | 'description' | 'contents' | 'confirmTitle'>>;
export type AlertType = BaseType & { type?: 'alert' };
export type ConfirmType = BaseType & { type?: 'confirm' } & Pick<ModalType, 'confirmTitle'> & Pick<ModalType, 'cancelTitle'>;

const useGlobalModal = () => {
  const [confirmMessage, setConfirmMessage] = useAtom(modalState);
  const [resolve, setResolve] = useAtom(modalResolveState);
  const isViewConfirm = !!confirmMessage && confirmMessage?.type !== 'error';

  const prompt = async (options: any): Promise<boolean> => {
    const { header = '', description = '', contents = '', type = '', confirmTitle = '', cancelTitle = '' } = options as any;

    return new Promise((resolve) => {
      setConfirmMessage({ header, description, contents, type, confirmTitle, cancelTitle });
      setResolve(() => (value: boolean) => resolve(value));
    });
  };

  const confirm = () => {
    resolve(true);
    setConfirmMessage(undefined);
  };
  const deny = () => {
    resolve(false);
    setConfirmMessage(undefined);
  };

  return {
    confirmMessage: confirmMessage as any,
    isViewConfirm,
    prompt,
    confirm,
    deny,
  };
};

export default useGlobalModal;
