import { Link, useNavigate } from 'react-router-dom';
import * as S from './emailLogin.styled';
import InputContainer from '@/shared/components/InputContainer/InputContainer';
import { useSigninForm } from '@/models/auth/useSigninForm';
import PrimaryShinBtn from '@/shared/components/PrimaryShinBtn/PrimaryShinBtn';
import { useLogin } from '@/mutation/auth/useLogin';
import ToastProvider from '@/shared/components/ToastProvider/ToastProvider';
import chevronLeft from '@/assets/chevronLeft.svg';

const EmailLogin = () => {
  const navigate = useNavigate();
  const { idValue, passwordValue, idValidate, passwordValidate, errors, handleSubmit } = useSigninForm();
  const { mutate } = useLogin();

  return (
    <S.EmailLoginLayout>
      <S.Header>
        <S.BackBtn onClick={() => navigate(-1)}>
          <img src={chevronLeft} alt="back" />
        </S.BackBtn>
        <span>일반 로그인</span>
      </S.Header>

      <S.SigninForm>
        <InputContainer type="text" label="아이디" value={idValue} maxLength={16} error={errors.id} placeholder="아이디 입력" register={idValidate} notRequired={true} />
        <InputContainer type="password" label="비밀번호" value={passwordValue} maxLength={12} error={errors.password} placeholder="비밀번호 입력" register={passwordValidate} notRequired={true} />
        <PrimaryShinBtn text="로그인" onClick={handleSubmit((data) => mutate({ loginId: data.id, password: data.password }))} />
      </S.SigninForm>

      <S.LinkContainer>
        <Link to="/auth/find-id">아이디 찾기</Link>
        <S.LinkDevider />
        <Link to="/auth/find-password">비밀번호 찾기</Link>
        <S.LinkDevider />
        <Link to="/signup-email">회원가입</Link>
      </S.LinkContainer>

      <S.ToastConatiner>
        <ToastWrapper />
      </S.ToastConatiner>
    </S.EmailLoginLayout>
  );
};

const ToastWrapper = () => {
  return (
    <>
      <S.ToastWrap>
        <ToastProvider toastKey="invalidLogin">아이디 또는 비밀번호를 잘못 입력했어요</ToastProvider>
      </S.ToastWrap>
    </>
  );
};

export default EmailLogin;
