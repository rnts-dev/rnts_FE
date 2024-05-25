import MenuBar from '@/widgets/home/ui/menuBar/MenuBar';
import Header from '@/widgets/penalty/ui/header/Header';
import PagePadding from '@/widgets/penalty/ui/pagePadding/PagePadding';
import PenaltyList from '@/widgets/penalty/ui/penaltyList/PenaltyList';

const PenaltyListPage = () => {
  return (
    <PagePadding>
      <Header title="지각 패널티" description="주고받은 패널티 내역이에요." isProfileImg />
      <PenaltyList />
      <MenuBar isFixed />
    </PagePadding>
  );
};

export default PenaltyListPage;
