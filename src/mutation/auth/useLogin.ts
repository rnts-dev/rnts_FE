import useToast from '@/shared/hooks/useToast';
import { fetcher } from '@/shared/service/fetch';
import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

const EMAIL_LOGIN_API = '/login';

export const useLogin = () => {
  const navigate = useNavigate();
  const showToast = useToast();

  return useMutation({
    mutationKey: [EMAIL_LOGIN_API],
    mutationFn: (data: { loginId: string; password: string }): Promise<{ data: { Authorization: string }; headers: { authorization: string } }> => {
      const { loginId, password } = data;
      return fetcher.post(EMAIL_LOGIN_API, { loginId, password });
    },

    onSuccess: (data: { data: { Authorization: string }; headers: { authorization: string } }) => {
      console.log('data.headers', data.headers);
      const token = data.headers.authorization.split(' ')[1];
      localStorage.setItem('ACCESS_TOKEN', token);
      navigate('/');
    },

    onError: (err) => {
      if (isAxiosError(err)) {
        const status = err.response?.status;

        switch (status) {
          case 400:
            showToast('invalidLogin');
            break;

          case 500:
            showToast('invalidLogin');
            break;

          default:
            showToast('invalidLogin');
            break;
        }
      }
    },
  });
};
