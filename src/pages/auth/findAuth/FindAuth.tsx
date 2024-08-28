import { useNavigate, useSearchParams } from 'react-router-dom';
import * as S from './findAuth.styled';
import { useState } from 'react';
import FindId from '@/widgets/findAuth/findId/FindId';
import FindPassword from '@/widgets/findAuth/findPassword/FindPassword';

const FindAuth = () => {
  const [searchParams, _] = useSearchParams();
  const pathType = searchParams.get('type');
  const navigate = useNavigate();
  const [type, setType] = useState<'loginId' | 'password'>(pathType === 'password' || pathType === 'loginId' ? pathType : 'loginId');

  return (
    <S.FindIdLayout>
      <S.Header>
        <S.BackBtn onClick={() => navigate('/email-login')}>
          <img src="src/assets/chevronLeft.svg" alt="back" />
        </S.BackBtn>
        <span>아이디/비밀번호 찾기</span>
      </S.Header>

      <S.SetFormContainer>
        <S.SetForm $isSelected={type === 'loginId'} onClick={() => setType('loginId')}>
          <span>아이디 찾기</span>
        </S.SetForm>
        <S.SetForm $isSelected={type === 'password'} onClick={() => setType('password')}>
          <span>비밀번호 찾기</span>
        </S.SetForm>
      </S.SetFormContainer>

      <S.FindIdForm>
        {type === 'loginId' && <FindId />}
        {type === 'password' && <FindPassword />}
      </S.FindIdForm>
    </S.FindIdLayout>
  );
};

export default FindAuth;
