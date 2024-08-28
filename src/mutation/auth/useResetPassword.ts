import { fetcher } from '@/shared/service/fetch';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const RESET_PASSWORD_API = '/api/v1/public/resetPassword';

export const useResetPassword = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: async (data: { password: string; token: string }) => {
      const { password, token } = data;
      const response = await fetcher.patch(RESET_PASSWORD_API, { password, token });
      return response.data;
    },

    onSuccess: () => {
      navigate('/email-login');
    },

    onError: () => {
      navigate('/email-login');
    },
  });
};
