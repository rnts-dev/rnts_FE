import { useNavigate } from 'react-router-dom';
import * as S from './header.styled';
import chevronLeft from '@/assets/chevronLeft.svg';

interface Props {
  step: 'first' | 'second' | 'third';
}

const Header = ({ step }: Props) => {
  const navigate = useNavigate();

  return (
    <S.Header>
      <S.Chevron_left_back onClick={() => navigate(-1)}>
        <img src={chevronLeft} alt="뒤로 가기" />
      </S.Chevron_left_back>
      <S.Title>{step === 'third' ? '닉네임 설정' : '회원가입'}</S.Title>
    </S.Header>
  );
};

export default Header;
