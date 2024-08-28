import useToast from '@/shared/hooks/useToast';
import { fetcher } from '@/shared/service/fetch';
import { useMutation } from '@tanstack/react-query';

const CONFIRM_EMAIL_API = '/api/v1/public/searchId';

export const useConfirmEmailSearchId = (setIsConfirmEmail: (arg0: boolean) => void, setFindId: (findId: string) => void) => {
  const showToast = useToast();

  return useMutation({
    mutationKey: [CONFIRM_EMAIL_API],
    mutationFn: async (data: { mail: string; authCode: string }): Promise<{ loginId: string }> => {
      const { mail, authCode } = data;
      const response = await fetcher.post(CONFIRM_EMAIL_API, { mail, authCode });
      return response.data;
    },

    onSuccess: (data: { loginId: string }) => {
      showToast('successConfirmEmail');
      setIsConfirmEmail(true);
      setFindId(data.loginId);
    },

    onError: () => {
      showToast('failedConfirmEmail');
      setIsConfirmEmail(false);
    },
  });
};
