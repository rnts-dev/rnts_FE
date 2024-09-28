import * as S from './ArrowBox.styled';

interface Props {
  arrowImg: string;
  onClick: () => void;
}

const ArrowBox = ({ arrowImg, onClick }: Props) => {
  return (
    <S.ArrowBox onClick={onClick}>
      <img src={arrowImg} alt="위쪽 화살표" />
    </S.ArrowBox>
  );
};

export default ArrowBox;
