import styled from 'styled-components';

interface InputProps {
  err: any;
}

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

export const Label = styled.label`
  display: flex;
  gap: 4px;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.6px;
`;

export const RequiredImg = styled.img`
  width: 4px;
  height: 4px;
`;

export const Input = styled.input<InputProps>`
  width: 100%;
  border-radius: 4px;
  border: 1px solid #bac7da;
  background: #fff;
  border: ${({ err }) => (err ? '1px solid var(--Sub-Color-danger, #f74747)' : '1px solid #bac7da')};
  padding: 12px 18px;

  &:focus {
    border-radius: 4px;
    border: ${({ err }) => (err ? '1px solid var(--Sub-Color-danger, #f74747)' : '1px solid var(--Primary-Color-black, #000)')};
    background: var(--System-Color-white, #fff);
    outline: #000;
  }
`;

export const CheckIcon = styled.img`
  width: 16px;
  height: 16px;
`;

export const ErrCheck = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;
