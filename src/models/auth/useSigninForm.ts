import { useForm } from 'react-hook-form';

export const useSigninForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    setError,
    trigger,
    formState: { errors },
  } = useForm({ mode: 'all', defaultValues: { id: '', password: '' } });

  const idValue = watch('id');
  const passwordValue = watch('password');

  const idValidate = {
    ...register('id', {
      required: { value: true, message: '아이디를 입력해주세요' },
    }),
  };

  const passwordValidate = {
    ...register('password', {
      required: { value: true, message: '비밀번호를 입력해주세요.' },
    }),
  };

  return {
    idValue,
    passwordValue,
    idValidate,
    passwordValidate,
    errors,
    handleSubmit,
    setError,
    trigger,
  };
};
