import * as S from './InputContainer.styled';

interface Props {
  label: string;
  placeholder: string;
  type: string;
  value: string;
  register: any;
  error: any;
}

const InputContainer = ({ value, register, label, error, placeholder, type }: Props) => {
  const checkIcon = error ? '/src/assets/auth/non-check.svg' : '/src/assets/auth/check.svg';

  return (
    <S.InputContainer>
      <S.Label>
        {label}
        <S.RequiredImg src="/src/assets/required.svg" alt="requiredImg" />
      </S.Label>
      <S.Input value={value} {...register} placeholder={placeholder} type={type} />
      <S.ErrCheck>
        <S.CheckIcon src={checkIcon} />
        <p>영문 또는 숫자 조합으로 이루어진 4-16자 아이디</p>
      </S.ErrCheck>
    </S.InputContainer>
  );
};

export default InputContainer;
