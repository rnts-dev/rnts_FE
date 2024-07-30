import styled from 'styled-components';

export const PolicyDetail = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;

  button {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 12px;

    span {
      text-align: left;
      flex-grow: 1;
    }
  }

  a {
    display: flex;
    justify-content: space-between;
    color: var(--System-Color-gray-700, #546174);
    font-size: 16px;
    font-weight: 500;
    line-height: 24px; /* 150% */
    letter-spacing: -0.6px;
    width: 80px;
    justify-content: flex-end;
  }

  span {
    flex-grow: 1;
  }
`;
