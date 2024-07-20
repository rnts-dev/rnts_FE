import { MenuBar } from '@/widgets/home';
import { Header, PagePadding, PenaltyList } from '@/widgets/penalty';

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
