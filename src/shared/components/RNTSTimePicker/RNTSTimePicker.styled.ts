import styled from 'styled-components';

export const TimePickerWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;

  padding: 38px 0px;
`;

export const TimePickerContainer = styled.div`
  display: flex;
  gap: 45px;
  justify-content: center;
  align-items: center;

  span {
    color: var(--Primary-Color-black, #000);
    font-size: 20px;
    font-weight: 600;
    line-height: 28px; /* 140% */
    letter-spacing: -0.2px;
  }
`;

export const TimeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 22px;
`;

export const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  input {
    text-align: center;
    width: 35px;
    color: #000;
    font-size: 20px;
    font-weight: 600;
    line-height: 28px; /* 140% */
    letter-spacing: -0.2px;
  }
`;

export const BtnContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  height: 70px;
`;

export const CancelBtn = styled.button`
  border-radius: 10px;
  border: 1px solid #bac7da;
  background: #fff;

  color: #546174;
  text-align: center;

  font-size: 16px;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.2px;
`;

export const ConfirmBtn = styled.button`
  text-align: center;
  border-radius: 10px;
  border: 1px solid var(--System-Color-gray-600, #a1b2ca);
  background: var(--Primary-Color-green, #b0f93c);

  color: var(--Primary-Color-black, #000);
  text-align: center;

  font-size: 16px;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.2px;
`;
