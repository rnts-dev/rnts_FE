import useHandleCheckIn from '@/entities/checkin/\bhook/useHandleCheckIn';
import CheckinCard from '@/entities/checkin/ui/card/CheckinCard';
import ModalManager from '@/shared/manager/modal/ModalManager';
import { checkinStep } from '@/shared/store/atoms/checkin';
import { useAtom } from 'jotai';

const CheckinModal = () => {
  const [step, setStep] = useAtom(checkinStep);
  const { getModalMeta } = useHandleCheckIn();

  return (
    /* 다른 단계별로 분기 처리 */
    /* compled 되면 모달 close 처리 */

    <ModalManager title={getModalMeta().title} description={getModalMeta().description}>
      {step === 'init-checkin' && <CheckinCard />}

      {/* 노1등 두가지 플로우 이어져 있는거임 */}
      {step === 'make-penalty' && <p>패널티 보러 가기</p>}
      {step === 'view-penalty' && <p>패널티 내용</p>}

      {step === 'view-penalty' && <p>지각</p>}

      {/* 다른 단계별로 분기 처리 */}
      {/* compled 되면 모달 close 처리 */}
    </ModalManager>
  );
};

export default CheckinModal;
