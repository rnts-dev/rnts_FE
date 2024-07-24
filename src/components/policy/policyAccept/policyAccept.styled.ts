import styled from 'styled-components';

export const PolicyDetail = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;

  a {
    display: flex;
    justify-content: space-between;
    color: var(--System-Color-gray-700, #546174);
    flex-grow: 1;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px; /* 150% */
    letter-spacing: -0.6px;
  }

  span {
    flex-grow: 1;
  }
`;
