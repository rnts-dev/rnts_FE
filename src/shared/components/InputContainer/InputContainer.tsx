import * as S from './InputContainer.styled';

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
        <S.RequiredImg src="/src/assets/required.svg" alt="requiredImg" />
      </S.Label>
      <S.Input value={value} {...register} placeholder={placeholder} type={type} err={error} />
      <S.ErrCheck>
        <p>{checkMsg}</p>
      </S.ErrCheck>
    </S.InputContainer>
  );
};

export default InputContainer;
