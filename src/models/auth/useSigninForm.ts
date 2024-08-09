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
      pattern: {
        value: /^(?=.*[a-zA-Z])[a-zA-Z0-9]{4,16}$/,
        message: '영문 또는 영문+숫자 조합으로 이루어진 4-16자 아이디',
      },
    }),
  };

  const passwordValidate = {
    ...register('password', {
      required: { value: true, message: '비밀번호를 입력해주세요.' },
      pattern: {
        value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/,
        message: '영문, 숫자, 특수문자를 포함하여 8~12자',
      },
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
