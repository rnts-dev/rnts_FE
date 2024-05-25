import Header from '@/widgets/penalty/ui/header/Header';
import PagePadding from '@/widgets/penalty/ui/pagePadding/PagePadding';
import SendPenaltyBtnContainer from '@/widgets/penalty/ui/sendPenaltyBtnContainer/SendPenaltyBtnContainer';
import SendPenaltyContent from '@/widgets/penalty/ui/sendPenaltyContent/SendPenaltyContent';
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
