import { fetcher } from '@/shared/service/fetch';
import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

interface SignupData {
  loginId: string;
  email: string;
  password: string;
  name: string;
  nickname: string;
  birth: string;
}

const SIGNUP_API = '/api/v1/public/members';

export const useSubmitSignup = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: [SIGNUP_API],
    mutationFn: (data: SignupData) => {
      const { loginId, email, password, name, nickname, birth } = data;

      return fetcher.post(SIGNUP_API, { loginId, email, password, name, nickname, birth });
    },

    onSuccess: () => {
      navigate('/tendency/select');
    },

    onError: (err) => {
      if (isAxiosError(err)) {
        const status = err.response?.status;

        switch (status) {
          default:
            alert('회원가입 중 오류가 발생했어요');
            navigate('/login?id=null&appointment=null');
            break;
        }
      }
      alert('회원가입 중 오류가 발생했어요');
      navigate('/login?id=null&appointment=null');
    },
  });
};
