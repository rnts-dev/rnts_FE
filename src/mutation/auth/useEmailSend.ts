import { fetcher } from '@/shared/service/fetch';
import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { toast } from 'react-toastify';

const EMAIL_SEND_API = '/api/v1/public/mail/verification-request';

export const useEmailSend = (setIsToastOpen: (arg0: boolean) => void, setIsSendEmail: (arg0: boolean) => void) => {
  return useMutation({
    mutationKey: [EMAIL_SEND_API],
    mutationFn: (mail: string) => fetcher.post(EMAIL_SEND_API, { mail }),

    onSuccess: () => {
      toast('입력한 이메일로 인증 코드가 전송되었어요', { onOpen: () => setIsToastOpen(true), onClose: () => setIsToastOpen(false) });
      setIsSendEmail(true);
    },

    onError: (err) => {
      if (isAxiosError(err)) {
        const status = err.response?.status;
        if (status === 400) {
          toast('이미 등록된 이메일이에요', { onOpen: () => setIsToastOpen(true), onClose: () => setIsToastOpen(false) });
        }
      }
    },
  });
};
