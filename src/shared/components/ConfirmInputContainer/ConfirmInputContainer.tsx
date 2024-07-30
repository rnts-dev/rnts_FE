import * as S from './ConfirmInputContainer.styled';
import requiredImg from '@/assets/required.svg';

interface Props {
  value: string;
  register: any;
  label: string;
  placeholder: string;
  btnText: string;
  type: string;
  error: any;
  checkMsg?: string;
  disabled?: boolean;
  isValid?: boolean;
  maxLength?: number;
  onClick: () => void;
}

const ConfirmInputContainer = ({ value, register, label, placeholder, btnText, checkMsg, type, error, maxLength = 100, onClick, isValid = false, disabled = false }: Props) => {
  return (
    <S.InputContainer>
      <S.Label>
        {label}
        <S.RequiredImg src={requiredImg} alt="requiredImg" />
      </S.Label>
      <S.ValidateInputContainer>
        <S.Input value={value} {...register} placeholder={placeholder} type={type} err={error} disabled={isValid} maxLength={maxLength} />
        <S.ValidateBtn type="button" disabled={disabled} onClick={onClick}>
          {btnText}
        </S.ValidateBtn>
      </S.ValidateInputContainer>
      {error && (
        <S.ErrCheck>
          <p>{checkMsg}</p>
        </S.ErrCheck>
      )}
    </S.InputContainer>
  );
};

export default ConfirmInputContainer;
