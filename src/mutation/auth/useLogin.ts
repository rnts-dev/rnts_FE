import { fetcher } from '@/shared/service/fetch';
import { useMutation } from '@tanstack/react-query';

const EMAIL_LOGIN_API = '/api/v1/public/login';

export const useLogin = () => {
  return useMutation({
    mutationKey: [EMAIL_LOGIN_API],
    mutationFn: (data: {}) => fetcher.post(EMAIL_LOGIN_API),
  });
};
