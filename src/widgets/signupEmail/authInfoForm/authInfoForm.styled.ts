import styled from 'styled-components';

interface IsOpen {
  isOpen: boolean;
}

interface IsConfirmed {
  isConfirmed: boolean;
}

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

export const PolicyBackground = styled.div<IsOpen>`
  position: absolute;
  top: 0;
  left: 0;

  min-height: 100vh;
  min-width: 100vw;
  background-color: gray;
  z-index: 999;
  opacity: 0.5;

  animation: ${({ isOpen }) => (isOpen ? '' : 'fadeOut 0.5s ease-in-out forwards')};

  @keyframes fadeOut {
    0% {
      opacity: 0.5;
    }

    100% {
      opacity: 0;
    }
  }
`;

export const PolicyModal = styled.div<IsOpen>`
  border-radius: 40px 40px 0px 0px;
  opacity: 1;
  background: #fff;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1000;
  padding: 36px 24px 40px;
  animation: ${({ isOpen }) => (isOpen ? 'up 0.5s ease-in-out forwards' : 'down 0.5s ease-in-out forwards')};

  @keyframes up {
    0% {
      transform: translateY(100%);
    }

    100% {
      transform: translateY(0);
    }
  }

  @keyframes down {
    0% {
      transform: translateY(0);
    }

    100% {
      transform: translateY(100%);
    }
  }
`;

export const PolicyAllAccept = styled.div<IsConfirmed>`
  padding: 25px 21px;

  button {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  border-radius: 10px;
  border: 1px solid var(--System-Color-gray-600, #a1b2ca);
  background: ${({ isConfirmed }) => (isConfirmed ? 'var(--Primary-Color-black, #000)' : 'var(--System-Color-white, #fff)')};

  span {
    color: ${({ isConfirmed }) => (isConfirmed ? 'var(--System-Color-white, #FFF)' : 'var(--System-Color-gray-700, #546174)')};
    font-size: 18px;
    font-weight: 600;
    line-height: 28px; /* 155.556% */
    letter-spacing: -0.6px;
  }
`;

export const PolictyDetailContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const PolicySaveBtn = styled.button<IsConfirmed>`
  margin-top: 20px;
  width: 100%;
  padding: 25px 70px;
  border-radius: 10px;
  border: 1px solid var(--System-Color-gray-500, #bac7da);
  background: ${({ isConfirmed }) => (isConfirmed ? 'var(--Primary-Color-green, #B0F93C)' : 'var(--System-Color-gray-200, #eef1f6)')};

  color: ${({ isConfirmed }) => (isConfirmed ? 'var(--Primary-Color-black, #000)' : 'var(--System-Color-gray-500, #bac7da)')};

  font-size: 16px;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.6px;
`;

export const ToastWrap = styled.div`
  width: 100vw;
  margin: 0 -24px;
  position: absolute;
  top: -120px;
`;

export const ToastConatiner = styled.div`
  width: 100%;
  position: relative;
`;
