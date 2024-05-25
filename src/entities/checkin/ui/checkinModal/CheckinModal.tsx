import useCheckinModalUI from '@/entities/checkin/hook/useCheckinModalUI';
import BottomButton from '@/entities/checkin/ui/button/CheckInButton';
import CheckinCard from '@/entities/checkin/ui/card/CheckinCard';
import ModalManager from '@/shared/manager/modal/ModalManager';

const CheckinModal = ({ id }: { id: number }) => {
  const { getCheckinUI } = useCheckinModalUI(id);

  return (
    <ModalManager title={getCheckinUI()?.title || ''} description={getCheckinUI()?.description || ''} button={<BottomButton id={id} />}>
      <CheckinCard />
    </ModalManager>
  );
};

export default CheckinModal;
