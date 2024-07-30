// import { useToast } from '@/shared/hooks/useToast';
import useToast from '@/shared/hooks/useToast';
import { fetcher } from '@/shared/service/fetch';
import { useMutation } from '@tanstack/react-query';

const CONFIRM_EMAIL_API = '/api/v1/public/mail/verification';

export const useConfirmEmail = (setIsConfirmEmail: (arg0: boolean) => void) => {
  const showToast = useToast();

  return useMutation({
    mutationKey: [CONFIRM_EMAIL_API],
    mutationFn: (data: { mail: string; authCode: string }) => {
      const { mail, authCode } = data;
      return fetcher.post(CONFIRM_EMAIL_API, { mail, authCode });
    },

    onSuccess: () => {
      showToast('successConfirmEmail');
      setIsConfirmEmail(true);
    },

    onError: () => {
      showToast('failedConfirmEmail');
      setIsConfirmEmail(false);
    },
  });
};
