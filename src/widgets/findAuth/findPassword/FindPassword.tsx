import * as S from './findPassword.styled';
import ConfirmInputContainer from '@/shared/components/ConfirmInputContainer/ConfirmInputContainer';
import { useSignupForm } from '@/models/auth/useSignupForm';
import { useEmailSendRecovery } from '@/mutation/auth/useEmailSendRecovery';
import { useState } from 'react';
import useToast from '@/shared/hooks/useToast';
import { useRequestPasswordReset } from '@/mutation/auth/useRequestPasswordReset';
import PrimaryShinBtn from '@/shared/components/PrimaryShinBtn/PrimaryShinBtn';
import InputContainer from '@/shared/components/InputContainer/InputContainer';
import { useResetPasswordForm } from '@/models/auth/useResetPasswordForm';
import { useResetPassword } from '@/mutation/auth/useResetPassword';
import ToastProvider from '@/shared/components/ToastProvider/ToastProvider';

const FindPassword = () => {
  const showToast = useToast();
  const [isSendEmail, setIsSendEmail] = useState(false);
  const [isConfirmEmail, setIsConfirmEmail] = useState(false);
  const [nextStep, setNextStep] = useState(false);
  const [passwordToken, setPasswordToken] = useState('');

  const { emailValue, emailValidate, authCodeValue, authCodeValidate, errors, trigger } = useSignupForm();
  const { passwordValidate, passwordValue, confirmPasswordValue, confirmPasswordValidate, errors: passwordErros, trigger: passwordTrigger } = useResetPasswordForm();

  const { mutate: sendEmailRecovery } = useEmailSendRecovery(setIsSendEmail);
  const { mutate: requestPasswordResetToken } = useRequestPasswordReset(setIsConfirmEmail, setPasswordToken);
  const { mutate: resetPassword } = useResetPassword();

  const isValid = !errors.email && emailValue && !errors.authCode && authCodeValue && isConfirmEmail;
  const isPasswordValid = !passwordErros.password && passwordValue && !passwordErros.confirmPassword && confirmPasswordValue;
  console.log(passwordErros);

  const onClickSendEmail = () => {
    if (!emailValue || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(emailValue)) {
      showToast('isInvaildEmail');
      return;
    }

    sendEmailRecovery(emailValue);
  };

  const onClickConfirmAuthCode = () => {
    requestPasswordResetToken({ mail: emailValue, authCode: authCodeValue });
  };

  const onClickNotActiveBtn = () => {
    trigger('email');
    trigger('authCode');
  };

  const onClickNotActivePasswordResetBtn = () => {
    passwordTrigger('password');
    passwordTrigger('confirmPassword');
  };

  const onClickResetPasswordBtn = () => {
    resetPassword({ password: passwordValue, token: passwordToken });
  };

  return (
    <>
      {!nextStep && (
        <>
          <ConfirmInputContainer
            value={emailValue}
            register={emailValidate}
            label="이메일"
            placeholder="이메일 주소를 입력하세요"
            btnText="인증"
            type="text"
            error={errors.email}
            onClick={onClickSendEmail}
          />

          {isSendEmail && (
            <ConfirmInputContainer
              value={authCodeValue}
              register={authCodeValidate}
              label="인증 코드"
              placeholder="코드 6자리를 입력하세요"
              type="text"
              btnText="확인"
              error={errors.authCode}
              maxLength={6}
              onClick={onClickConfirmAuthCode}
            />
          )}
        </>
      )}

      {nextStep && (
        <>
          <InputContainer label="새 비밀번호" placeholder="비밀번호를 입력하세요" type="text" value={passwordValue} maxLength={16} error={passwordErros.password} register={passwordValidate} />
          <InputContainer
            label="비밀번호 확인"
            placeholder="비밀번호 재입력"
            type="text"
            value={confirmPasswordValue}
            maxLength={16}
            error={passwordErros.confirmPassword}
            register={confirmPasswordValidate}
          />
        </>
      )}

      <S.ToastConatiner>
        <ToastWrapper />
      </S.ToastConatiner>

      {!nextStep && (
        <S.BtnWrap>
          {!isValid && (
            <S.NotActivateBtn type="button" onClick={onClickNotActiveBtn}>
              다음
            </S.NotActivateBtn>
          )}
          {isValid && <PrimaryShinBtn text="다음" onClick={() => setNextStep(true)} />}
        </S.BtnWrap>
      )}

      {nextStep && (
        <S.BtnWrap>
          {!isPasswordValid && (
            <S.NotActivateBtn type="button" onClick={onClickNotActivePasswordResetBtn}>
              비밀번호 재설정
            </S.NotActivateBtn>
          )}
          {isPasswordValid && <PrimaryShinBtn text="비밀번호 재설정" onClick={onClickResetPasswordBtn} />}
        </S.BtnWrap>
      )}
    </>
  );
};

export const ToastWrapper = () => {
  return (
    <>
      <S.ToastWrap>
        <ToastProvider toastKey="isNotExistEmail">등록되지 않은 이메일이에요</ToastProvider>
      </S.ToastWrap>

      <S.ToastWrap>
        <ToastProvider toastKey="isInvaildEmail">이메일 형식을 다시 확인해 주세요</ToastProvider>
      </S.ToastWrap>

      <S.ToastWrap>
        <ToastProvider toastKey="failedConfirmEmail">인증코드가 올바르지 않습니다</ToastProvider>
      </S.ToastWrap>
    </>
  );
};

export default FindPassword;
