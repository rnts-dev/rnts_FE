import styled from 'styled-components';

export const Header = styled.div`
  margin-bottom: -20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 30px 20px;

  .title {
    align-self: 'stretch';
    text-align: 'center';
    color: 'black';
    font-size: 20;
    font-family: 'Pretendard';
    font-weight: 600;
    line-height: 28px;
    word-wrap: 'break-word';
  }

  .description {
    color: var(--System-Color-gray-700, #546174);
    text-align: center;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
    letter-spacing: -0.6px;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LinkCopy = styled.div`
  display: flex;
  gap: 10px;
`;

export const BtnLayout = styled.div`
  padding: 0px 22px 22px;
`;
