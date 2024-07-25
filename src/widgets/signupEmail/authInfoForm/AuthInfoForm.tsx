import * as S from './authInfoForm.styled';
import PrimaryShinBtn from '@/shared/components/PrimaryShinBtn/PrimaryShinBtn';
import InputContainer from '@/shared/components/InputContainer/InputContainer';
import ConfirmInputContainer from '@/shared/components/ConfirmInputContainer/ConfirmInputContainer';
import { useState } from 'react';
import PolicyModal from '@/components/policy/policyModal/PolicyModal';
import { toast } from 'react-toastify';
import ToastProvider from '@/shared/components/ToastProvider/ToastProvider';

interface Props {
  idValue: string;
  idValidate: any;
  passwordValue: string;
  passwordValidate: any;
  confirmPasswordValue: string;
  confirmPasswordValidate: any;
  errors: any;
  handleChangeStep: (step: 'first' | 'second') => void;
}

const AuthInfoForm = ({ errors, passwordValue, passwordValidate, confirmPasswordValue, confirmPasswordValidate, idValue, idValidate, handleChangeStep }: Props) => {
  // TODO: setIsValidId는 아이디 중복 확인이 통과하면 true로 변경
  const [isValidId, setIsValidId] = useState(true);
  const [isPolicyOpen, setIsPolicyOpen] = useState(true);
  const [isToastOpen, setIsToastOpen] = useState(false);

  const isValidInput = idValue && passwordValue && confirmPasswordValue && !errors.id && !errors.password && !errors.confirmPassword && isValidId;

  return (
    <S.Layout>
      <S.InputForm>
        <ConfirmInputContainer
          value={idValue}
          register={idValidate}
          label="아이디"
          placeholder="영문 또는 숫자로 이루어진 4~16자"
          type="text"
          btnText="확인"
          onClick={() => toast('사용 가능한 아이디에요', { onOpen: () => setIsToastOpen(true), onClose: () => setIsToastOpen(false) })}
          error={errors.id}
          disabled={isToastOpen}
        />
        <InputContainer
          value={passwordValue}
          register={passwordValidate}
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          type="password"
          error={errors.password}
          checkMsg="영문, 숫자, 특수문자를 포함하여 8-12자"
        />
        <InputContainer
          value={confirmPasswordValue}
          register={confirmPasswordValidate}
          label="비밀번호 확인"
          placeholder="비밀번호를 한번 더 입력하세요"
          type="password"
          error={errors.confirmPassword}
        />
      </S.InputForm>

      <S.ToastConatiner>
        <S.ToastWrap>
          <ToastProvider />
        </S.ToastWrap>

        <S.BtnWrap>
          {isValidInput && <PrimaryShinBtn text="다음" onClick={() => handleChangeStep('second')} />}
          {!isValidInput && <S.NotActivateBtn disabled>다음</S.NotActivateBtn>}
        </S.BtnWrap>
      </S.ToastConatiner>

      {/* 약관 동의 모달 */}
      <PolicyModal isPolicyOpen={isPolicyOpen} setIsPolicyOpen={setIsPolicyOpen} />
    </S.Layout>
  );
};

export default AuthInfoForm;
