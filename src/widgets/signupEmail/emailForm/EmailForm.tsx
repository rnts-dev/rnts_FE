import ConfirmInputContainer from '@/shared/components/ConfirmInputContainer/ConfirmInputContainer';
import * as S from './emailForm.styled';
import PrimaryShinBtn from '@/shared/components/PrimaryShinBtn/PrimaryShinBtn';
import { useState } from 'react';

interface Props {
  emailValue: string;
  emailValidate: any;
  authCodeValue: string;
  authCodeValidate: any;
  errors: any;
  handleChangeStep: (step: 'first' | 'second' | 'third') => void;
}

const EmailForm = ({ emailValue, emailValidate, authCodeValue, authCodeValidate, errors, handleChangeStep }: Props) => {
  const [isSendEmail, setIsSendEmail] = useState(false);
  const [isConfirmEmail, setIsConfirmEmail] = useState(false);
  const isValidInput = emailValue && authCodeValue && !errors.email && !errors.authCode;

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
          onClick={() => setIsSendEmail(true)}
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
            onClick={() => setIsConfirmEmail(true)}
          />
        )}
      </S.InputForm>
      <S.BtnWrap>
        {isValidInput && isConfirmEmail && <PrimaryShinBtn text="다음" onClick={() => handleChangeStep('third')} />}
        {(!isValidInput || !isConfirmEmail) && <S.NotActivateBtn disabled>다음</S.NotActivateBtn>}
      </S.BtnWrap>
    </S.Layout>
  );
};

export default EmailForm;
