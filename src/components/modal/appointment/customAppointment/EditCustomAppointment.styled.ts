import styled from 'styled-components';

export const ModalLayout = styled.section`
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: red;
  padding: 0px 41px;
`;

export const Layout = styled.div`
  padding: 22px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 18px;
`;

export const CautionIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const CautionTitle = styled.h1`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px; /* 140% */
  letter-spacing: -0.2px;
  text-align: center;
`;

export const CautionDescription = styled.p`
  margin-top: 6px;
  text-align: center;
  color: #546174;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.2px;
`;

export const BtnContainer = styled.div`
  display: flex;
  gap: 14px;
  justify-content: center;
  align-items: center;
`;

export const CancelBtn = styled.button`
  display: flex;
  padding: 12px 36px;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  border: 1px solid #bac7da;

  color: #546174;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.2px;
`;

export const EditBtn = styled.button`
  display: flex;
  padding: 12px 36px;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  border: 1px solid #000;
  background: #f74747;
  border: 1px solid #bac7da;

  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  letter-spacing: -0.2px;
`;
