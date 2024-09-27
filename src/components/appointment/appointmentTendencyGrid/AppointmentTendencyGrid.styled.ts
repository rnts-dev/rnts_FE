import styled from 'styled-components';

export const AppointmentTendencyListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  row-gap: 30px;
`;

export const AppointmentTendencyCard = styled.button<{ $selected?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 9px;

  & p {
    color: #000;
    text-align: center;
    font-size: 12px;
    min-height: 16px;
    font-weight: 500;
    line-height: 16px; /* 133.333% */
    letter-spacing: -0.6px;
  }
`;

export const AppointmentTendencyIcon = styled.span<{ $selected?: boolean }>`
  position: relative;

  > img {
    border-radius: 50%;
    padding: 20px;
    width: 70.5px;
    height: 70.5px;
    border: 1px solid var(--Primary-Color-black, #000);
    background: ${(props) => (props.$selected ? 'var(--Primary-Color-black, #000)' : 'white')};
  }
`;

export const AppointmentTendencyIconAddon = styled.span<{ $selected?: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 999;

  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    right: 0;
    width: 200%;
    height: 200%;
  }
`;
