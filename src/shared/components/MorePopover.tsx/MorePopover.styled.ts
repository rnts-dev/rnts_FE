import styled from 'styled-components';

interface PopoverBodyProps {
  mode: string;
}

export const PopoverBody = styled.button<PopoverBodyProps>`
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 9px 10px;

  color: ${({ mode }) => (mode === '삭제' ? '#f74747' : '#000')};
`;
