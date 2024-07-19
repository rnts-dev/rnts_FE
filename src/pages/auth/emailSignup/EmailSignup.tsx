import { useSignupForm } from '@/models/auth/useSignupForm';
import * as S from './emailSignup.styled';
import Header from '@/widgets/signupEmail/header/Header';

import { useState } from 'react';
import AuthInfoForm from '@/widgets/signupEmail/authInfoForm/AuthInfoForm';

const EmailSignup = () => {
  const [step, setStep] = useState<'first' | 'second'>('first');
  const { idValue, idValidate, passwordValue, passwordValidate, confirmPasswordValue, confirmPasswordValidate, errors } = useSignupForm();

  return (
    <S.Layout>
      <Header />
      {step === 'first' && (
        <AuthInfoForm
          handleChangeStep={setStep}
          idValue={idValue}
          idValidate={idValidate}
          passwordValue={passwordValue}
          passwordValidate={passwordValidate}
          confirmPasswordValue={confirmPasswordValue}
          confirmPasswordValidate={confirmPasswordValidate}
          errors={errors}
        />
      )}
    </S.Layout>
  );
};

export default EmailSignup;
