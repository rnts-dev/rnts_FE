import styled from 'styled-components';

export const ToastWrap = styled.div`
  padding: 10px 22px;
  border-radius: 4px;
  background: var(--Primary-Color-black, #000);

  color: var(--System-Color-white, #fff);
  text-align: center;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.6px;

  animation: fadeInOut 2s ease-in-out;

  @keyframes fadeInOut {
    0% {
      opacity: 0;
    }
    33% {
      opacity: 1;
    }
    66% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
