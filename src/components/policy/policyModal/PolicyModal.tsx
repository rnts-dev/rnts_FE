import { useState } from 'react';
import * as S from './policyModal.styled';
import PolicyAccept from '../policyAccept/PolicyAccept';
import isCheckWhite from '@/assets/isCheckWhite.svg';
import checkbox from '@/assets/checkbox.svg';

interface Props {
  isPolicyOpen: boolean;
  setIsPolicyOpen: (isOpen: boolean) => void;
}

const POLICY_LINK = {
  SERVICE: 'https://amusing-drifter-f6d.notion.site/e9daa8ac12f743f78117409fc3d8ec3b?pvs=4',
  LOCATION: 'http://amusing-drifter-f6d.notion.site',
  PRIVACY: 'https://amusing-drifter-f6d.notion.site/7a994980242d48ed91c1fe54f2760c71?pvs=4',
};

const PolicyModal = ({ isPolicyOpen, setIsPolicyOpen }: Props) => {
  const [acceptServicePolicy, setAcceptServicePolicy] = useState(false);
  const [acceptLocationPolicy, setAcceptLocationPolicy] = useState(false);
  const [acceptPrivacyPolicy, setAcceptPrivacyPolicy] = useState(false);
  const [acceptAgePolicy, setAcceptAgePolicy] = useState(false);

  const isConfirmed = acceptServicePolicy && acceptLocationPolicy && acceptPrivacyPolicy && acceptAgePolicy;

  const handleChangeAllPolicy = () => {
    if (isConfirmed) {
      setAcceptServicePolicy(false);
      setAcceptLocationPolicy(false);
      setAcceptPrivacyPolicy(false);
      setAcceptAgePolicy(false);
      return;
    }

    setAcceptServicePolicy(true);
    setAcceptLocationPolicy(true);
    setAcceptPrivacyPolicy(true);
    setAcceptAgePolicy(true);
  };

  const onClickPolicySaveBtn = () => {
    setIsPolicyOpen(false);

    // TODO: 서버에 약관 동의 정보 저장
  };

  return (
    <>
      <S.PolicyBackground isOpen={isPolicyOpen} />
      <S.PolicyModal isOpen={isPolicyOpen}>
        <S.PolicyAllAccept type="button" onClick={handleChangeAllPolicy} isConfirmed={isConfirmed}>
          <div>
            {isConfirmed ? <img width={20} height={20} src={isCheckWhite} alt="checkbox" /> : <img width={20} height={20} src={checkbox} alt="checkbox" />}
            <span>약관 전체 동의</span>
          </div>
        </S.PolicyAllAccept>
        <S.PolictyDetailContainer>
          <PolicyAccept isCheck={acceptServicePolicy} onChangeCheck={setAcceptServicePolicy} POLICY_LINK={POLICY_LINK.SERVICE} description="[필수] 서비스 이용 약관" />
          <PolicyAccept isCheck={acceptLocationPolicy} onChangeCheck={setAcceptLocationPolicy} POLICY_LINK={POLICY_LINK.LOCATION} description="[필수] 위치 기반 서비스 이용 약관 동의" />
          <PolicyAccept isCheck={acceptPrivacyPolicy} onChangeCheck={setAcceptPrivacyPolicy} POLICY_LINK={POLICY_LINK.PRIVACY} description="[필수] 개인정보 수집 및 이용 동의" />
          <PolicyAccept isCheck={acceptAgePolicy} onChangeCheck={setAcceptAgePolicy} description="[필수] 만 14세 이상입니다." />
        </S.PolictyDetailContainer>
        <S.PolicySaveBtn type="button" disabled={!isConfirmed} onClick={onClickPolicySaveBtn} isConfirmed={isConfirmed}>
          확인
        </S.PolicySaveBtn>
      </S.PolicyModal>
    </>
  );
};

export default PolicyModal;
