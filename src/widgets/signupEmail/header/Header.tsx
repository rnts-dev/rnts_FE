import { useNavigate } from 'react-router-dom';
import * as S from './header.styled';
import chevronLeft from '@/assets/chevronLeft.svg';

const Header = () => {
  const navigate = useNavigate();

  return (
    <S.Header>
      <S.Chevron_left_back onClick={() => navigate(-1)}>
        <img src={chevronLeft} alt="뒤로 가기" />
      </S.Chevron_left_back>
      <S.Title>회원가입</S.Title>
    </S.Header>
  );
};

export default Header;
