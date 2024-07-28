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
  disabled?: boolean;
  isValid?: boolean;
}

const ConfirmInputContainer = ({ value, register, label, placeholder, btnText, checkMsg, type, error, onClick, isValid = false, disabled = false }: Props) => {
  return (
    <S.InputContainer>
      <S.Label>
        {label}
        <S.RequiredImg src="/src/assets/required.svg" alt="requiredImg" />
      </S.Label>
      <S.ValidateInputContainer>
        <S.Input value={value} {...register} placeholder={placeholder} type={type} err={error} disabled={isValid} />
        <S.ValidateBtn type="button" disabled={disabled} onClick={onClick}>
          {btnText}
        </S.ValidateBtn>
      </S.ValidateInputContainer>
      <S.ErrCheck>
        <p>{checkMsg}</p>
      </S.ErrCheck>
    </S.InputContainer>
  );
};

export default ConfirmInputContainer;
