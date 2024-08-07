import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export const useSignupForm = (onChangeValue?: () => void) => {
  const {
    register,
    watch,
    handleSubmit,
    setError,
    setValue,
    trigger,
    formState: { errors },
  } = useForm({ mode: 'all', defaultValues: { id: '', email: '', nickname: '', authCode: '', password: '', confirmPassword: '' }, shouldFocusError: false });

  const idValue = watch('id');
  const emailValue = watch('email');
  const nicknameValue = watch('nickname');
  const authCodeValue = watch('authCode');
  const passwordValue = watch('password');
  const confirmPasswordValue = watch('confirmPassword');

  useEffect(() => {
    trigger('nickname');
  }, []);

  useEffect(() => {
    if (onChangeValue !== undefined) {
      onChangeValue();
    }
  }, [idValue]);

  const resetAuthcodeValue = () => {
    setValue('authCode', '');
  };

  const idValidate = {
    ...register('id', {
      required: { value: true, message: '아이디를 입력해주세요' },
      pattern: {
        value: /^(?=.*[a-zA-Z])[a-zA-Z0-9]{4,16}$/,
        message: '영문 또는 영문+숫자 조합으로 이루어진 4-16자 아이디',
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

  const authCodeValidate = {
    ...register('authCode', {
      required: { value: true, message: '코드를 입력해주세요' },
    }),
  };

  const nicknameValidate = {
    ...register('nickname', {
      required: { value: true, message: '최소 2자 이상, 최대 8자 이내' },
      pattern: {
        value: /^(?=^[a-zA-Z0-9가-힣_-]+$).{2,8}$/,
        message: '최소 2자 이상, 최대 8자 이내여야 합니다.',
      },
    }),
  };

  const passwordValidate = {
    ...register('password', {
      required: { value: true, message: '비밀번호를 입력해주세요.' },
      pattern: {
        value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,12}$/,
        message: '영문, 숫자, 특수문자를 포함하여 8~12자',
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
    authCodeValue,
    authCodeValidate,
    nicknameValue,
    nicknameValidate,
    passwordValue,
    confirmPasswordValue,
    idValidate,
    emailValidate,
    passwordValidate,
    confirmPasswordValidate,
    trigger,
    errors,
    resetAuthcodeValue,
    handleSubmit,
    setError,
  };
};
