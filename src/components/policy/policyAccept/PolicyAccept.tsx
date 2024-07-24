import { Link } from 'react-router-dom';
import * as S from './policyAccept.styled';
import { Dispatch } from 'react';
import { SetStateAction } from 'jotai';

interface Props {
  POLICY_LINK?: string;
  description: string;
  isCheck: boolean;
  onChangeCheck: Dispatch<SetStateAction<boolean>>;
}

const PolicyAccept = ({ POLICY_LINK, description, isCheck, onChangeCheck }: Props) => {
  return (
    <S.PolicyDetail>
      {isCheck ? (
        <button type="button" onClick={() => onChangeCheck((prev: boolean) => !prev)}>
          <img width={16} height={16} src="/src/assets/check.svg" alt="check" />
        </button>
      ) : (
        <button type="button" onClick={() => onChangeCheck((prev: boolean) => !prev)}>
          <img width={16} height={16} src="/src/assets/checkbox.svg" alt="checkbox" />
        </button>
      )}

      {POLICY_LINK && (
        <Link to={POLICY_LINK} target="_blank">
          <span>{description}</span>
          <img width={24} height={24} src="/src/assets/arrow-right.svg" alt="arrow-right" />
        </Link>
      )}
      {!POLICY_LINK && (
        <>
          <span>{description}</span>
          <img width={24} height={24} src="/src/assets/arrow-right.svg" alt="arrow-right" />
        </>
      )}
    </S.PolicyDetail>
  );
};

export default PolicyAccept;
