import styled from 'styled-components';

export const Layout = styled.form`
  margin-top: 30px;
  display: flex;
  height: 100%;
  flex-direction: column;
`;

export const InputForm = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  gap: 20px;
`;

export const ValidateInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ValidateBtn = styled.div`
  min-height: 50px;
  min-width: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  border: 1px solid var(--System-Color-gray-700, #546174);
  background: var(--System-Color-white, #fff);

  cursor: pointer;
`;

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

export const Input = styled.input`
  width: 100%;
  border-radius: 4px;
  border: 1px solid #bac7da;
  background: #fff;

  padding: 12px 18px;

  &:focus {
    border-radius: 4px;
    border: 1px solid var(--Primary-Color-black, #000);
    background: var(--System-Color-white, #fff);
    outline: #000;
  }
`;

export const BtnWrap = styled.div`
  width: 100%;
`;

export const NotActivateBtn = styled.button`
  width: 100%;
  border-radius: 10px;
  border: 1px solid var(--System-Color-gray-500, #bac7da);
  background: var(--System-Color-gray-200, #eef1f6);
  padding: 25px 70px;
`;
