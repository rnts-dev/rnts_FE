import useHandleCheckIn from '@/entities/checkin/\bhook/useHandleCheckIn';
import CheckinCard from '@/entities/checkin/ui/card/CheckinCard';
import ModalManager from '@/shared/manager/modal/ModalManager';
import { checkinStep } from '@/shared/store/atoms/checkin';
import { useAtomValue } from 'jotai';

const CheckinModal = () => {
  const step = useAtomValue(checkinStep);
  const { getModalMeta } = useHandleCheckIn();

  return (
    /* 다른 단계별로 분기 처리 */
    /* compled 되면 모달 close 처리 */
    <ModalManager title={getModalMeta().title} description={getModalMeta().description}>
      {/* 지각 X */}
      {/* 1등. 페널티 만들러 가기 */}
      {step === 'init-checkin' && <CheckinCard />}
      {/* 지각 X */}
      {/* 노1등. 두가지 플로우 이어져 있는거임 */}
      {step === 'view-penalty' && <p>패널티 보러 가기</p>}
      {step === 'view-penalty-completed' && <p>패널티 내용</p>}

      {/* 지각한 사람 O */}
      {step === 'my-penalty' && <p>지각자가 받은 지각 페널티 내용</p>}

      {/* 모두 지각 */}
      {step === 'all-late' && <p>반성문 쓰는 내용</p>}
    </ModalManager>
  );
};

export default CheckinModal;
