import styled from 'styled-components';

export const AppointmentTendencyList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 50px;

  > span {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

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

  & img {
    border-radius: 50%;
    padding: 20px;
    width: 70.5px;
    height: 70.5px;
    border: 1px solid var(--Primary-Color-black, #000);
    background: ${(props) => (props.$selected ? 'var(--Primary-Color-black, #000)' : 'white')};
  }

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
