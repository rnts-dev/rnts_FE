import useHandleBottomButton from '@/entities/checkin/\bhook/useHandleBottomButton';
import CheckinCard from '@/entities/checkin/ui/card/CheckinCard';
import ModalManager from '@/shared/manager/modal/ModalManager';
import BottomButton from '@/entities/checkin/ui/button/CheckInButton';

const CheckinModal = ({ id }: { id: number }) => {
  const { getCheckinUI } = useHandleBottomButton(id);

  return (
    /* 다른 단계별로 분기 처리 */
    /* compled 되면 모달 close 처리 */
    <ModalManager title={getCheckinUI()?.title || ''} description={getCheckinUI()?.description || ''} button={<BottomButton />}>
      <CheckinCard />
    </ModalManager>
  );
};

export default CheckinModal;
