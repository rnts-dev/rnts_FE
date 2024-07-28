import { fetcher } from '@/shared/service/fetch';
import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { toast } from 'react-toastify';

const EXIST_LOGIN_ID_VALIDATE_API = '/api/v1/public/existedLoginId';

export const useExistLoginIdValidate = (setIsToastOpen: (arg0: boolean) => void, setIsValidId: (arg0: boolean) => void) => {
  return useMutation({
    mutationKey: [EXIST_LOGIN_ID_VALIDATE_API],
    mutationFn: (loginId: string) => fetcher.post(EXIST_LOGIN_ID_VALIDATE_API, { loginId }),

    onSuccess: () => {
      toast('사용 가능한 아이디에요', { onOpen: () => setIsToastOpen(true), onClose: () => setIsToastOpen(false) });
      setIsValidId(true);
    },

    onError: (err) => {
      if (isAxiosError(err)) {
        const status = err.response?.status;

        switch (status) {
          case 400:
            toast('이미 등록된 아이디예요', { onOpen: () => setIsToastOpen(true), onClose: () => setIsToastOpen(false) });
            setIsValidId(false);
            break;

          default:
            console.log(status);
        }
      }
    },
  });
};
