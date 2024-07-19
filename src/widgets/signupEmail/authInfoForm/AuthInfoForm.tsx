import * as S from './authInfoForm.styled';
import PrimaryShinBtn from '@/shared/components/PrimaryShinBtn/PrimaryShinBtn';
import InputContainer from '@/shared/components/InputContainer/InputContainer';
import ConfirmInputContainer from '@/shared/components/ConfirmInputContainer/ConfirmInputContainer';

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
  const isValidInput = idValue && passwordValue && confirmPasswordValue && !errors.id && !errors.password && !errors.confirmPassword;

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
          onClick={() => console.log('confirm')}
          error={errors.id}
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

      <S.BtnWrap>
        {isValidInput && <PrimaryShinBtn text="다음" onClick={() => handleChangeStep('second')} />}
        {!isValidInput && <S.NotActivateBtn disabled>다음</S.NotActivateBtn>}
      </S.BtnWrap>
    </S.Layout>
  );
};

export default AuthInfoForm;
