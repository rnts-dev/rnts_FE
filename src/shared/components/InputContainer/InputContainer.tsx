import * as S from './InputContainer.styled';
import requiredImg from '@/assets/required.svg';

interface Props {
  label: string;
  placeholder: string;
  type: string;
  value: string;
  register: any;
  error: any;
  checkMsg?: string;
}

const InputContainer = ({ value, checkMsg, register, label, placeholder, type, error }: Props) => {
  return (
    <S.InputContainer>
      <S.Label>
        {label}
        <S.RequiredImg src={requiredImg} alt="requiredImg" />
      </S.Label>
      <S.Input value={value} {...register} placeholder={placeholder} type={type} err={error} />
      {error && (
        <S.ErrCheck>
          <p>{checkMsg}</p>
        </S.ErrCheck>
      )}
    </S.InputContainer>
  );
};

export default InputContainer;
