import { Link } from 'react-router-dom';
import * as S from './header.styled';
import chevronLeft from '@/assets/chevronLeft.svg';

const Header = () => {
  return (
    <S.Header>
      <S.Chevron_left_back>
        <Link to={'-1'}>
          <img src={chevronLeft} alt="뒤로 가기" />
        </Link>
      </S.Chevron_left_back>
      <S.Title>회원가입</S.Title>
    </S.Header>
  );
};

export default Header;
