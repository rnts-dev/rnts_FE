import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export const useSignupForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    setError,
    trigger,
    formState: { errors },
  } = useForm({ mode: 'all', defaultValues: { id: '', email: '', password: '', confirmPassword: '' } });

  useEffect(() => {
    trigger();
  }, [trigger]);

  const idValue = watch('id');
  const emailValue = watch('email');
  const passwordValue = watch('password');
  const confirmPasswordValue = watch('confirmPassword');

  const idValidate = {
    ...register('id', {
      required: { value: true, message: '아이디를 입력해주세요' },
      pattern: {
        value: /^[a-zA-Z0-9]{4,16}$/,
        message: '아이디는 영문 또는 숫자로 이루어진 4~16자여야 합니다',
      },
    }),
  };

  const emailValidate = {
    ...register('email', {
      required: { value: true, message: '이메일을 입력해주세요' },
      pattern: {
        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
        message: '이메일 형식이 아닙니다.',
      },
    }),
  };

  const passwordValidate = {
    ...register('password', {
      required: { value: true, message: '비밀번호를 입력해주세요.' },
      pattern: {
        value: /^[a-zA-Z0-9]{4,16}$/,
        message: '비밀번호는 영문 또는 숫자로 이루어진 4~16자여야 합니다.',
      },
    }),
  };

  const confirmPasswordValidate = {
    ...register('confirmPassword', {
      required: { value: true, message: '비밀번호를 다시 입력해주세요.' },
      validate: (value) => value === passwordValue || '비밀번호가 일치하지 않습니다.',
    }),
  };

  return {
    idValue,
    emailValue,
    passwordValue,
    confirmPasswordValue,
    idValidate,
    emailValidate,
    passwordValidate,
    confirmPasswordValidate,
    errors,
    handleSubmit,
    setError,
  };
};
