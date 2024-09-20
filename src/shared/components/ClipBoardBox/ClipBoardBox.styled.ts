import styled from 'styled-components';

export const ClipBoardBox = styled.div`
  display: flex;
  height: 60px;
  padding: 12px 18px;
  align-items: center;

  overflow: hidden;
  color: var(--System-Color-gray-700, #546174);
  text-overflow: ellipsis;

  border-radius: 4px;
  border: 1px solid #bac7da;
  background: #eef1f6;

  font-size: 16px;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.2px;
`;
