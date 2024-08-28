import styled from 'styled-components';

interface IsSelected {
  $isSelected: boolean;
}

export const FindIdLayout = styled.div`
  padding: 75px 24px 0px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;

  span {
    color: var(--Primary-Color-black, #000);

    font-size: 24px;
    font-weight: 700;
    line-height: 34px; /* 141.667% */
    letter-spacing: -0.6px;
  }
`;

export const BackBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 4px;

  border-radius: 4px;
  border: 1px solid var(--Primary-Color-black, #000);
  background: var(--Primary-Color-green, #b0f93c);
`;

export const SetFormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const SetForm = styled.button<IsSelected>`
  width: 100%;
  border-bottom: ${({ $isSelected }) => ($isSelected ? '2px solid #000' : '2px solid #bac7da')};
  text-align: center;
  padding-bottom: 14px;

  span {
    color: var(--Primary-Color-black, #000);

    font-size: 16px;
    font-weight: 500;
    line-height: 24px; /* 150% */
    letter-spacing: -0.6px;
  }
`;

export const FindIdForm = styled.form`
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const NotActivateBtn = styled.button`
  width: 100%;
  border-radius: 10px;
  border: 1px solid var(--System-Color-gray-500, #bac7da);
  background: var(--System-Color-gray-200, #eef1f6);
  padding: 25px 70px;

  color: var(--Primary-Color-black, #000);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: -0.6px;
`;
