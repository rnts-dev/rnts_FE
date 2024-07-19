import { useSignupForm } from '@/models/auth/useSignupForm';
import * as S from './emailSignup.styled';
import Header from '@/widgets/signupEmail/header/Header';

import { useState } from 'react';
import AuthInfoForm from '@/widgets/signupEmail/authInfoForm/AuthInfoForm';
import EmailForm from '@/widgets/signupEmail/emailForm/EmailForm';

const EmailSignup = () => {
  const [step, setStep] = useState<'first' | 'second' | 'third'>('first');
  const { idValue, idValidate, emailValue, emailValidate, authCodeValue, authCodeValidate, passwordValue, passwordValidate, confirmPasswordValue, confirmPasswordValidate, errors } = useSignupForm();

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
      {step === 'second' && (
        <EmailForm emailValue={emailValue} emailValidate={emailValidate} authCodeValue={authCodeValue} authCodeValidate={authCodeValidate} errors={errors} handleChangeStep={setStep} />
      )}
    </S.Layout>
  );
};

export default EmailSignup;
