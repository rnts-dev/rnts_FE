import Header from '@/widgets/penalty/ui/header/Header';
import PagePadding from '@/widgets/penalty/ui/pagePadding/PagePadding';
import SendPenaltyBtnContainer from '@/widgets/penalty/ui/sendPenaltyBtnContainer/SendPenaltyBtnContainer';
import SendPenaltyContent from '@/widgets/penalty/ui/sendPenaltyContent/SendPenaltyContent';

const SendPenaltyPage = () => {
  return (
    <PagePadding>
      <Header title="지각비 걷기" description="지각자에게 매운맛을 보여 주세요!" />
      <SendPenaltyContent />
      <SendPenaltyBtnContainer />
    </PagePadding>
  );
};

export default SendPenaltyPage;
