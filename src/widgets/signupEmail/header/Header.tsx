import * as S from './header.styled';
import chevronLeft from '@/assets/chevronLeft.svg';

interface Props {
  step: 'first' | 'second' | 'third';
  handleBack: () => void;
}

const Header = ({ step, handleBack }: Props) => {
  return (
    <S.Header>
      <S.Chevron_left_back onClick={handleBack}>
        <img src={chevronLeft} alt="뒤로 가기" />
      </S.Chevron_left_back>
      <S.Title>{step === 'third' ? '닉네임 설정' : '회원 가입'}</S.Title>
    </S.Header>
  );
};

export default Header;
