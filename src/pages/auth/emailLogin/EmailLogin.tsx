import { Link, useNavigate } from 'react-router-dom';
import * as S from './emailLogin.styled';
import InputContainer from '@/shared/components/InputContainer/InputContainer';
import { useSigninForm } from '@/models/auth/useSigninForm';
import PrimaryShinBtn from '@/shared/components/PrimaryShinBtn/PrimaryShinBtn';

const EmailLogin = () => {
  const navigate = useNavigate();
  const { idValue, passwordValue, idValidate, passwordValidate, errors, trigger, handleSubmit } = useSigninForm();

  const isValid = !errors.id && !errors.password && idValue && passwordValue;

  const onClickNotActiveBtn = () => {
    trigger('id');
    trigger('password');
  };

  return (
    <S.EmailLoginLayout>
      <S.Header>
        <S.BackBtn onClick={() => navigate(-1)}>
          <img src="src/assets/chevronLeft.svg" alt="back" />
        </S.BackBtn>
        <span>일반 로그인</span>
      </S.Header>

      <S.SigninForm>
        <InputContainer
          type="text"
          label="아이디"
          value={idValue}
          maxLength={16}
          error={errors.id}
          placeholder="아이디 입력"
          register={idValidate}
          notRequired={true}
          checkMsg="영문 또는 영문+숫자 조합으로 이루어진 4-16자 아이디"
        />
        <InputContainer
          type="password"
          label="비밀번호"
          value={passwordValue}
          maxLength={12}
          error={errors.password}
          placeholder="비밀번호 입력"
          register={passwordValidate}
          notRequired={true}
          checkMsg="영문, 숫자, 특수문자를 포함하여 8~12자"
        />
        {isValid && <PrimaryShinBtn text="로그인" onClick={handleSubmit((data) => console.log(data))} />}
        {!isValid && (
          <S.NotActivateBtn type="button" onClick={onClickNotActiveBtn}>
            로그인
          </S.NotActivateBtn>
        )}
      </S.SigninForm>

      <S.LinkContainer>
        <Link to="/auth/find-id">아이디 찾기</Link>
        <S.LinkDevider />
        <Link to="/auth/find-password">비밀번호 찾기</Link>
        <S.LinkDevider />
        <Link to="/signup-email">회원가입</Link>
      </S.LinkContainer>
    </S.EmailLoginLayout>
  );
};

export default EmailLogin;
