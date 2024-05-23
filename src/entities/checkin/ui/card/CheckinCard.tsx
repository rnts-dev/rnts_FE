import { checkinStep } from '@/shared/store/atoms/checkin';
import { useAtomValue } from 'jotai';
import './checkinCard.scss';

// TODO : 여기서 step에 따라 분기치자
const RegretInput = () => {
  return (
    <div className="regret">
      <input />
    </div>
  );
};

const CheckinCard = () => {
  const step = useAtomValue(checkinStep);

  return (
    <>
      {/* 지각한 사람 X */}
      {step === 'init-checkin' && (
        <div className="checkin__body">
          <div className="element">캐릭터</div>
        </div>
      )}

      {/* 지각한 사람 X */}
      {step === 'view-penalty' && <p>노지각 - 다른사람 패널티 보러 가기</p>}
      {step === 'view-penalty-completed' && <p>패널티 내용</p>}

      {/* 지각한 사람 O */}
      {step === 'my-penalty' && <p>지각 - 패널티 보러가기</p>}
      {step === 'my-penalty-completed' && <p>지각 당사자가 받은 지각 페널티 내용</p>}

      {/* 모두 지각 */}
      {step === 'all-late' && <p>모두 지각했어요</p>}
      {step === 'write-regret-completed' && <RegretInput />}
    </>
  );
};

export default CheckinCard;
