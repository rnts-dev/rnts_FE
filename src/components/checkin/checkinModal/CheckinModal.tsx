import { CheckinCard } from '@/components/checkin/card/CheckinCard';
import useCheckinModalUI from '@/models/checkin/useCheckinModalUI';
import ModalManager from '@/shared/manager/modal/ModalManager';
import { CheckInButton } from '@/components/checkin/button/CheckInButton';

export const CheckinModal = ({ id }: { id: number }) => {
  const { getCheckinUI } = useCheckinModalUI(id);

  return (
    <ModalManager title={getCheckinUI()?.title || ''} description={getCheckinUI()?.description || ''} button={<CheckInButton id={id} />}>
      <CheckinCard />
    </ModalManager>
  );
};
