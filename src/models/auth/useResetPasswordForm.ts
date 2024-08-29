import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export const useResetPasswordForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    setError,
    trigger,
    formState: { errors },
  } = useForm({ mode: 'all', defaultValues: { password: '', confirmPassword: '' } });

  const passwordValue = watch('password');
  const confirmPasswordValue = watch('confirmPassword');

  useEffect(() => {
    if (!passwordValue) {
      return;
    }
    trigger('confirmPassword');
  }, [passwordValue]);

  const passwordValidate = {
    ...register('password', {
      required: { value: true, message: '영문, 숫자, 특수문자를 포함하여 8-16자' },
      pattern: {
        value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/,
        message: '영문, 숫자, 특수문자를 포함하여 8~16자',
      },
    }),
  };

  const confirmPasswordValidate = {
    ...register('confirmPassword', {
      required: { value: true, message: '비밀번호를 다시 확인하세요' },
      validate: (value) => value === passwordValue || '비밀번호를 다시 확인하세요',
    }),
  };

  return {
    passwordValue,
    passwordValidate,
    confirmPasswordValue,
    confirmPasswordValidate,
    errors,
    handleSubmit,
    setError,
    trigger,
  };
};
