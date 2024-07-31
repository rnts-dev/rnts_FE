import { useAtom } from 'jotai';
import { setIsClose, setIsOpen } from '@/shared/store/atoms/toast';

const useToast = () => {
  const [, openToast] = useAtom(setIsOpen);
  const [, closeToast] = useAtom(setIsClose);

  const showToast = (key: string) => {
    openToast(key);
    setTimeout(() => {
      closeToast();
    }, 2000);
  };

  return showToast;
};

export default useToast;
