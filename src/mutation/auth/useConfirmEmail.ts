import { fetcher } from '@/shared/service/fetch';
import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { toast } from 'react-toastify';

const CONFIRM_EMAIL_API = '/api/v1/public/mail/verification';

export const useConfirmEmail = (setIsConfirmEmail: (arg0: boolean) => void, setIsToastOpen: (arg0: boolean) => void) => {
  return useMutation({
    mutationKey: [CONFIRM_EMAIL_API],
    mutationFn: (data: { mail: string; authCode: string }) => {
      const { mail, authCode } = data;
      return fetcher.post(CONFIRM_EMAIL_API, { mail, authCode });
    },

    onSuccess: () => {
      toast('이메일 인증 완료!', { onOpen: () => setIsToastOpen(true), onClose: () => setIsToastOpen(false) });
      setIsConfirmEmail(true);
    },

    onError: (err) => {
      if (isAxiosError(err)) {
        const status = err.response?.status;

        switch (status) {
          case 400:
            toast('인증 코드가 일치하지 않아요', { onOpen: () => setIsToastOpen(true), onClose: () => setIsToastOpen(false) });
            setIsConfirmEmail(false);
            break;

          default:
            toast('인증 코드 확인 중 오류가 발생했어요', { onOpen: () => setIsToastOpen(true), onClose: () => setIsToastOpen(false) });
            setIsConfirmEmail(false);
            break;
        }
      }
    },
  });
};
