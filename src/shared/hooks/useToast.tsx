import { useAtom } from 'jotai';
import { setIsClose, setIsOpen, toastState } from '@/shared/store/atoms/toast';

const useToast = () => {
  const [, openToast] = useAtom(setIsOpen);
  const [, closeToast] = useAtom(setIsClose);
  const [toast] = useAtom(toastState);

  const showToast = (key: string) => {
    if (toast.isOpen) return;
    openToast(key);
    setTimeout(() => {
      closeToast();
    }, 2000);
  };

  return showToast;
};

export default useToast;
