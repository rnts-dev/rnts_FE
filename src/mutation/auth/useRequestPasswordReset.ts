import useToast from '@/shared/hooks/useToast';
import { fetcher } from '@/shared/service/fetch';
import { useMutation } from '@tanstack/react-query';

const CONFIRM_REQUEST_PASSWORD_RESET_API = '/api/v1/public/requestPasswordReset';

export const useRequestPasswordReset = (setIsConfirmEmail: (arg0: boolean) => void, setPasswordToken: (token: string) => void) => {
  const showToast = useToast();

  return useMutation({
    mutationFn: async (data: { mail: string; authCode: string }) => {
      const { mail, authCode } = data;
      const response = await fetcher.post(CONFIRM_REQUEST_PASSWORD_RESET_API, { mail, authCode });
      return response.data;
    },

    onSuccess: (data: { token: string }) => {
      setIsConfirmEmail(true);
      setPasswordToken(data.token);
    },

    onError: () => {
      showToast('failedConfirmEmail');
    },
  });
};
