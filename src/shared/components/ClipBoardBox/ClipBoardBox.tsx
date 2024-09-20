import * as S from './ClipBoardBox.styled';

interface Props {
  text: string;
}

const ClipBoardBox = ({ text }: Props) => {
  return <S.ClipBoardBox>{text}</S.ClipBoardBox>;
};

export default ClipBoardBox;
