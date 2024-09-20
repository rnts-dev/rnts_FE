import * as S from './CopyBox.styled';

interface Props {
  text: string;
  onClick: () => void;
}

const CopyBox = ({ text, onClick }: Props) => {
  return <S.CopyBox onClick={onClick}>{text}</S.CopyBox>;
};

export default CopyBox;
