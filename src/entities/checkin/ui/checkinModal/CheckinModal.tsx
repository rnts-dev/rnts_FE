import useHandleCheckIn from '@/entities/checkin/\bhook/useHandleCheckIn';
import CheckinCard from '@/entities/checkin/ui/card/CheckinCard';
import ModalManager from '@/shared/manager/modal/ModalManager';

const CheckinModal = () => {
  const { getModalMeta } = useHandleCheckIn();

  return (
    /* 다른 단계별로 분기 처리 */
    /* compled 되면 모달 close 처리 */
    <ModalManager title={getModalMeta().title} description={getModalMeta().description}>
      <CheckinCard />
    </ModalManager>
  );
};

export default CheckinModal;
