import ConfirmInputContainer from '@/shared/components/ConfirmInputContainer/ConfirmInputContainer';
import * as S from './emailForm.styled';
import PrimaryShinBtn from '@/shared/components/PrimaryShinBtn/PrimaryShinBtn';
import { useEffect, useState } from 'react';
import { useEmailSend } from '@/mutation/auth/useEmailSend';
import ToastProvider from '@/shared/components/ToastProvider/ToastProvider';
import { useConfirmEmail } from '@/mutation/auth/useConfirmEmail';
import { useAtom } from 'jotai';
import { toastState } from '@/shared/store/atoms/toast';

interface Props {
  emailValue: string;
  emailValidate: any;
  authCodeValue: string;
  authCodeValidate: any;
  errors: any;
  resetAuthcodeValue: any;
  handleChangeStep: (step: 'first' | 'second' | 'third') => void;
}

const EmailForm = ({ emailValue, emailValidate, authCodeValue, authCodeValidate, errors, resetAuthcodeValue, handleChangeStep }: Props) => {
  const [isSendEmail, setIsSendEmail] = useState(false);
  const [isConfirmEmail, setIsConfirmEmail] = useState(false);
  const isValidInput = emailValue && authCodeValue && !errors.email && !errors.authCode;

  const [state] = useAtom(toastState);
  const { mutate: sendEmail } = useEmailSend(setIsSendEmail);
  const { mutate: confirmEmail } = useConfirmEmail(setIsConfirmEmail);

  useEffect(() => {
    setIsSendEmail(false);
    setIsConfirmEmail(false);
    resetAuthcodeValue();
  }, [emailValue]);

  useEffect(() => {
    setIsConfirmEmail(false);
  }, [authCodeValue]);

  return (
    <S.Layout>
      <S.InputForm>
        <ConfirmInputContainer
          value={emailValue}
          label="이메일"
          type="text"
          btnText="인증"
          placeholder="abcd@example.co.kr"
          register={emailValidate}
          error={errors.email}
          onClick={() => sendEmail(emailValue)}
          disabled={state.isOpen}
        />
        {isSendEmail && (
          <ConfirmInputContainer
            value={authCodeValue}
            label="인증 코드"
            type="text"
            btnText="확인"
            placeholder="코드 6자리를 입력하세요"
            register={authCodeValidate}
            error={errors.authCode}
            onClick={() => confirmEmail({ mail: emailValue, authCode: authCodeValue })}
            maxLength={6}
            disabled={state.isOpen || isConfirmEmail}
          />
        )}
      </S.InputForm>

      <S.ToastConatiner>
        <ToastWrapper />

        <S.BtnWrap>
          {isValidInput && isConfirmEmail && isSendEmail && <PrimaryShinBtn text="가입하기" onClick={() => handleChangeStep('third')} />}
          {(!isValidInput || !isConfirmEmail) && <S.NotActivateBtn disabled>다음</S.NotActivateBtn>}
        </S.BtnWrap>
      </S.ToastConatiner>
    </S.Layout>
  );
};

const ToastWrapper = () => {
  return (
    <>
      <S.ToastWrap>
        <ToastProvider toastKey="sendEmail">입력한 이메일로 인증 코드가 전송되었어요</ToastProvider>
      </S.ToastWrap>
      <S.ToastWrap>
        <ToastProvider toastKey="isExistEmail">이미 등록된 이메일이에요</ToastProvider>
      </S.ToastWrap>
      <S.ToastWrap>
        <ToastProvider toastKey="serverError">서버가 점검중입니다</ToastProvider>
      </S.ToastWrap>
      <S.ToastWrap>
        <ToastProvider toastKey="successConfirmEmail">이메일 인증 완료!</ToastProvider>
      </S.ToastWrap>
      <S.ToastWrap>
        <ToastProvider toastKey="failedConfirmEmail">이메일 인증에 실패했어요</ToastProvider>
      </S.ToastWrap>
    </>
  );
};

export default EmailForm;
