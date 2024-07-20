import * as S from './ConfirmInputContainer.styled';

interface Props {
  value: string;
  register: any;
  label: string;
  placeholder: string;
  btnText: string;
  type: string;
  error: any;
  checkMsg?: string;
  onClick: () => void;
}

const ConfirmInputContainer = ({ value, register, label, placeholder, btnText, checkMsg, type, error, onClick }: Props) => {
  return (
    <S.InputContainer>
      <S.Label>
        {label}
        <S.RequiredImg src="/src/assets/required.svg" alt="requiredImg" />
      </S.Label>
      <S.ValidateInputContainer>
        <S.Input value={value} {...register} placeholder={placeholder} type={type} err={error} />
        <S.ValidateBtn onClick={onClick}>{btnText}</S.ValidateBtn>
      </S.ValidateInputContainer>
      <S.ErrCheck>
        <p>{checkMsg}</p>
      </S.ErrCheck>
    </S.InputContainer>
  );
};

export default ConfirmInputContainer;
