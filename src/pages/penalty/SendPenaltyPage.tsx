import SkipBtn from '@/entities/penalty/ui/skipBtn/SkipBtn';
import PrimaryBtn from '@/shared/components/PrimaryBtn/PrimaryBtn';
import Header from '@/widgets/penalty/ui/header/Header';
import PagePadding from '@/widgets/penalty/ui/pagePadding/PagePadding';
import SendPenaltyContent from '@/widgets/penalty/ui/sendPenaltyContent/SendPenaltyContent';

const SendPenaltyPage = () => {
  return (
    <PagePadding>
      <Header />
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
