import styled from 'styled-components';

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const Container = styled.section`
  min-height: 35rem;
  padding: 40px 0 40px;

  & > ${InputGroup}:not(:first-child) {
    margin-top: 36px;
  }
`;
