import styled from 'styled-components';

export const Layout = styled.div`
  padding: 35px 22px 22px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Header = styled.div`
  text-align: center;
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 28px; /* 140% */
  letter-spacing: -0.2px;
`;

export const Body = styled.div`
  padding: 22px 36px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-start;

  border-radius: 13px;
  border: 1px solid #a1b2ca;
  background: #eef1f6;

  .appointment_id {
    color: #000;
    font-size: 20px;
    font-weight: 600;
    line-height: 28px; /* 140% */
    letter-spacing: -0.2px;
  }

  .place {
    display: flex;
    gap: 4px;
  }

  .time {
    display: flex;
    gap: 4px;
  }

  p {
    color: #000;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px; /* 142.857% */
    letter-spacing: -0.2px;
  }
`;
