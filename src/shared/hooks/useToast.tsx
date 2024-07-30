import { useAtom } from 'jotai';
import { setIsClose, setIsOpen } from '@/shared/store/atoms/toast';

const useToast = () => {
  const [, openToast] = useAtom(setIsOpen);
  const [, closeToast] = useAtom(setIsClose);

  const showToast = (key: string, duration: number = 2000) => {
    openToast(key);
    setTimeout(() => {
      closeToast();
    }, duration);
  };

  return showToast;
};

export default useToast;
