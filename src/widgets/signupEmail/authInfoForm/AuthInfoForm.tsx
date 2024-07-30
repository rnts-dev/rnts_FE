import * as S from './authInfoForm.styled';
import PrimaryShinBtn from '@/shared/components/PrimaryShinBtn/PrimaryShinBtn';
import InputContainer from '@/shared/components/InputContainer/InputContainer';
import ConfirmInputContainer from '@/shared/components/ConfirmInputContainer/ConfirmInputContainer';
import { useEffect, useState } from 'react';
import PolicyModal from '@/components/policy/policyModal/PolicyModal';
import ToastProvider from '@/shared/components/ToastProvider/ToastProvider';
import { useExistLoginIdValidate } from '@/mutation/auth/useExistLoginIdValidate';
import { useAtom } from 'jotai';
import { toastState } from '@/shared/store/atoms/toast';

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
  const [isValidId, setIsValidId] = useState(false);
  const [isPolicyOpen, setIsPolicyOpen] = useState(true);
  const [state] = useAtom(toastState);

  const { mutate: isExistLoginId } = useExistLoginIdValidate(setIsValidId);

  const isValidInput = idValue && passwordValue && confirmPasswordValue && !errors.id && !errors.password && !errors.confirmPassword && isValidId;

  useEffect(() => {
    setIsValidId(false);
  }, [idValue]);

  return (
    <S.Layout>
      <S.InputForm>
        <ConfirmInputContainer
          value={idValue}
          register={idValidate}
          label="아이디"
          placeholder="영문 또는 영문+숫자 조합으로 4-16자"
          maxLength={16}
          type="text"
          btnText="확인"
          onClick={() => isExistLoginId(idValue)}
          error={errors.id}
          checkMsg="영문 또는 영문+숫자 조합으로 이루어진 4-16자 아이디"
          disabled={state.isOpen || !idValue || errors.id}
        />
        <InputContainer
          value={passwordValue}
          register={passwordValidate}
          maxLength={12}
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          type="password"
          error={errors.password}
          checkMsg="영문, 숫자, 특수문자를 포함하여 8-12자"
        />
        <InputContainer
          value={confirmPasswordValue}
          register={confirmPasswordValidate}
          maxLength={12}
          label="비밀번호 확인"
          placeholder="비밀번호를 한번 더 입력하세요"
          type="password"
          error={errors.confirmPassword}
          checkMsg="비밀번호를 다시 확인하세요"
        />
      </S.InputForm>

      <S.ToastConatiner>
        <ToastWrapper />

        {!isPolicyOpen && (
          <S.BtnWrap>
            {isValidInput && <PrimaryShinBtn text="다음" onClick={() => handleChangeStep('second')} />}
            {!isValidInput && <S.NotActivateBtn disabled>다음</S.NotActivateBtn>}
          </S.BtnWrap>
        )}
      </S.ToastConatiner>

      {/* 약관 동의 모달 */}
      <PolicyModal isPolicyOpen={isPolicyOpen} setIsPolicyOpen={setIsPolicyOpen} />
    </S.Layout>
  );
};

const ToastWrapper = () => {
  return (
    <>
      <S.ToastWrap>
        <ToastProvider toastKey="validId">사용 가능한 아이디예요</ToastProvider>
      </S.ToastWrap>

      <S.ToastWrap>
        <ToastProvider toastKey="invalidId">이미 등록된 아이디예요</ToastProvider>
      </S.ToastWrap>

      <S.ToastWrap>
        <ToastProvider toastKey="serverError">서버를 점검하고 있습니다</ToastProvider>
      </S.ToastWrap>
    </>
  );
};

export default AuthInfoForm;
