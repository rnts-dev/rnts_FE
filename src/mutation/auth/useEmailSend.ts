// import { useToast } from '@/shared/hooks/useToast';
import useToast from '@/shared/hooks/useToast';
import { fetcher } from '@/shared/service/fetch';
import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';

const EMAIL_SEND_API = '/api/v1/public/mail/signUp';

export const useEmailSend = (setIsSendEmail: (arg0: boolean) => void) => {
  const showToast = useToast();

  return useMutation({
    mutationKey: [EMAIL_SEND_API],
    mutationFn: (mail: string) => fetcher.post(EMAIL_SEND_API, { mail }),

    onSuccess: () => {
      showToast('sendEmail');
      setIsSendEmail(true);
    },

    onError: (err) => {
      if (isAxiosError(err)) {
        const status = err.response?.status;

        switch (status) {
          case 400:
            showToast('isExistEmail');
            setIsSendEmail(false);
            break;

          case 500:
            showToast('serverError');
            setIsSendEmail(false);
            break;
        }
      }
    },
  });
};
