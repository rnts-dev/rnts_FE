import styled from 'styled-components';

export const NotActivateBtn = styled.button`
  width: 100%;
  border-radius: 10px;
  border: 1px solid var(--System-Color-gray-500, #bac7da);
  background: var(--System-Color-gray-200, #eef1f6);
  padding: 25px 70px;
  color: var(--Primary-Color-black, #000);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.6px;
`;

export const InputContainer = styled.div`
  width: 100%;
  height: calc(100vh - 476px);
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex-grow: 1;
`;

export const BtnWrap = styled.div`
  margin-bottom: 38px;
  width: 100%;
`;

export const ToastConatiner = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const ToastWrap = styled.div`
  position: fixed;
  bottom: 150px;
`;
