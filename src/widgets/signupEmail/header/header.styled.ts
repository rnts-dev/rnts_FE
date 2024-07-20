import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
`;

export const Chevron_left_back = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 4px;
  border: 1px solid var(--Primary-Color-black, #000);
  background: var(--Primary-Color-green, #b0f93c);
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  line-height: 34px; /* 141.667% */
  letter-spacing: -0.6px;
`;
