import { Header, PagePadding, SendPenaltyBtnContainer, SendPenaltyContent } from '@/widgets/penalty';
import { useState } from 'react';

const SendPenaltyPage = () => {
  const [penaltyType, setPenaltyType] = useState('late');

  return (
    <PagePadding>
      <Header title="패널티 보내기" description="지각자에게 매운맛을 보여 주세요!" />
      <SendPenaltyContent penaltyType={penaltyType} onChangePenaltyType={setPenaltyType} />
      <SendPenaltyBtnContainer penaltyType={penaltyType} />
    </PagePadding>
  );
};

export default SendPenaltyPage;
