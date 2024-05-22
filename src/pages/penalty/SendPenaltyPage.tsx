import SkipBtn from '@/entities/penalty/ui/skipBtn/SkipBtn';
import PrimaryBtn from '@/shared/components/PrimaryBtn/PrimaryBtn';
import Header from '@/widgets/penalty/ui/header/Header';
import PagePadding from '@/widgets/penalty/ui/pagePadding/PagePadding';
import SendPenaltyContent from '@/widgets/penalty/ui/sendPenaltyContent/SendPenaltyContent';

const SendPenaltyPage = () => {
  return (
    <PagePadding>
      <Header title="지각비 걷기" description="지각자에게 매운맛을 보여 주세요!" />
      <SendPenaltyContent />
      <PrimaryBtn
        text="다음"
        onClick={() => {
          console.log('다음 로직');
        }}
      />
      <SkipBtn />
    </PagePadding>
  );
};

export default SendPenaltyPage;
