import ConfirmInputContainer from '@/shared/components/ConfirmInputContainer/ConfirmInputContainer';
import * as S from './findId.styled';
import PrimaryShinBtn from '@/shared/components/PrimaryShinBtn/PrimaryShinBtn';
import { useState } from 'react';
import { useSignupForm } from '@/models/auth/useSignupForm';
import { useEmailSendRecovery } from '@/mutation/auth/useEmailSendRecovery';
import ToastProvider from '@/shared/components/ToastProvider/ToastProvider';
import useToast from '@/shared/hooks/useToast';
import { useConfirmEmailSearchId } from '@/mutation/auth/useConfirmEmailSearchId';
import { useSetAtom } from 'jotai';
import { modalState } from '@/shared/store/atoms/modal';
import FindIdModal from '@/components/auth/findIdModal/FindIdModal';

const FindId = () => {
  const showToast = useToast();
  const setModalOpen = useSetAtom(modalState);
  const [isSendEmail, setIsSendEmail] = useState(false);
  const [isConfirmEmail, setIsConfirmEmail] = useState(false);
  const [findId, setFindId] = useState('');
  const { emailValue, emailValidate, authCodeValue, authCodeValidate, errors, trigger } = useSignupForm();

  const { mutate: sendEmailRecovery } = useEmailSendRecovery(setIsSendEmail);
  const { mutate: confirmEmail } = useConfirmEmailSearchId(setIsConfirmEmail, setFindId);

  const isValid = !errors.email && emailValue && !errors.authCode && authCodeValue && isConfirmEmail;

  const onClickNotActiveBtn = () => {
    trigger('email');
    trigger('authCode');
  };

  const onClickSendEmail = () => {
    if (!emailValue || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(emailValue)) {
      showToast('isInvaildEmail');
      return;
    }

    sendEmailRecovery(emailValue);
  };

  const onClickConfirmAuthCode = () => {
    confirmEmail({ mail: emailValue, authCode: authCodeValue });
  };

  const handleOpenFindIdModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <S.InputContainer>
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

        <S.ToastConatiner>
          <ToastWrapper />
        </S.ToastConatiner>
      </S.InputContainer>

      <S.BtnWrap>
        {!isValid && (
          <S.NotActivateBtn type="button" onClick={onClickNotActiveBtn}>
            아이디 찾기
          </S.NotActivateBtn>
        )}
        {isValid && <PrimaryShinBtn text="아이디 찾기" onClick={handleOpenFindIdModal} />}
      </S.BtnWrap>

      <FindIdModal id={findId} />
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

      <S.ToastWrap>
        <ToastProvider toastKey="successSendEmail">입력한 이메일로 인증 코드가 전송되었어요</ToastProvider>
      </S.ToastWrap>

      <S.ToastWrap>
        <ToastProvider toastKey="successConfirmEmail">이메일 인증 완료!</ToastProvider>
      </S.ToastWrap>
    </>
  );
};

export default FindId;
