import * as S from './ConfirmInputContainer.styled';

interface Props {
  value: string;
  register: any;
  label: string;
  placeholder: string;
  btnText: string;
  type: string;
  error: any;
  onClick: () => void;
}

const ConfirmInputContainer = ({ value, register, label, placeholder, btnText, type, error, onClick }: Props) => {
  const checkIcon = error ? '/src/assets/auth/non-check.svg' : '/src/assets/auth/check.svg';

  return (
    <S.InputContainer>
      <S.Label>
        {label}
        <S.RequiredImg src="/src/assets/required.svg" alt="requiredImg" />
      </S.Label>
      <S.ValidateInputContainer>
        <S.Input value={value} {...register} placeholder={placeholder} type={type} />
        <S.ValidateBtn onClick={onClick}>{btnText}</S.ValidateBtn>
      </S.ValidateInputContainer>
      <S.ErrCheck>
        <S.CheckIcon src={checkIcon} />
        <p>영문 또는 숫자 조합으로 이루어진 4-16자 아이디</p>
      </S.ErrCheck>
    </S.InputContainer>
  );
};

export default ConfirmInputContainer;
