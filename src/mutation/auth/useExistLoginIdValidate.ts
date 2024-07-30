import useToast from '@/shared/hooks/useToast';
import { fetcher } from '@/shared/service/fetch';
import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

const EXIST_LOGIN_ID_VALIDATE_API = '/api/v1/public/existedLoginId';

export const useExistLoginIdValidate = (setIsValidId: (arg0: boolean) => void) => {
  const showToast = useToast();

  return useMutation({
    mutationKey: [EXIST_LOGIN_ID_VALIDATE_API],
    mutationFn: (loginId: string) => fetcher.post(EXIST_LOGIN_ID_VALIDATE_API, { loginId }),

    onSuccess: () => {
      showToast('validId');
      setIsValidId(true);
    },

    onError: (err) => {
      if (isAxiosError(err)) {
        const status = err.response?.status;

        switch (status) {
          case 400:
            showToast('invalidId');
            setIsValidId(false);
            break;

          case 500:
            showToast('serverError');
            setIsValidId(false);
            break;
        }
      } else {
        showToast('serverError');
        setIsValidId(false);
      }
    },
  });
};
