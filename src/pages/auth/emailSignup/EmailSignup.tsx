import { useSignupForm } from '@/models/auth/useSignupForm';
import * as S from './emailSignup.styled';
import Header from '@/widgets/signupEmail/header/Header';

import { useState } from 'react';
import AuthInfoForm from '@/widgets/signupEmail/authInfoForm/AuthInfoForm';
import EmailForm from '@/widgets/signupEmail/emailForm/EmailForm';
import NicknameForm from '@/widgets/signupEmail/nicknameForm/NicknameForm';
import { useSubmitSignup } from '@/mutation/auth/useSubmitSignup';
import { useNavigate } from 'react-router-dom';

const EmailSignup = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<'first' | 'second' | 'third'>('first');
  const {
    idValue,
    idValidate,
    emailValue,
    emailValidate,
    authCodeValue,
    authCodeValidate,
    passwordValue,
    passwordValidate,
    confirmPasswordValue,
    confirmPasswordValidate,
    nicknameValue,
    nicknameValidate,
    errors,
    trigger,
    resetAuthcodeValue,
  } = useSignupForm();

  const { mutate: submitSignup } = useSubmitSignup();

  const handleSubmitSignup = () => {
    submitSignup({ loginId: idValue, email: emailValue, password: passwordValue, name: nicknameValue, nickname: nicknameValue, birth: '1996-09-17' });
  };

  const handleBack = () => {
    if (step === 'first') {
      navigate(-1);
    } else if (step === 'second') {
      setStep('first');
    } else if (step === 'third') {
      setStep('second');
    }
  };

  return (
    <S.Layout>
      <Header step={step} handleBack={handleBack} />
      {step === 'first' && (
        <AuthInfoForm
          handleChangeStep={setStep}
          idValue={idValue}
          idValidate={idValidate}
          passwordValue={passwordValue}
          passwordValidate={passwordValidate}
          confirmPasswordValue={confirmPasswordValue}
          confirmPasswordValidate={confirmPasswordValidate}
          trigger={trigger}
          errors={errors}
        />
      )}
      {step === 'second' && (
        <EmailForm
          emailValue={emailValue}
          trigger={trigger}
          resetAuthcodeValue={resetAuthcodeValue}
          emailValidate={emailValidate}
          authCodeValue={authCodeValue}
          authCodeValidate={authCodeValidate}
          errors={errors}
          handleChangeStep={setStep}
        />
      )}
      {step === 'third' && <NicknameForm nicknameValue={nicknameValue} nicknameValidate={nicknameValidate} error={errors.nickname} handleSubmitSignup={handleSubmitSignup} />}
    </S.Layout>
  );
};

export default EmailSignup;
