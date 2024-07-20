import Apology from '@/assets/apology_illust.png';
import Late from '@/assets/late_illust.png';
import NoLate from '@/assets/safe_illust.png';

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

export const CheckinCard = () => {
  const step = useAtomValue(checkinStep);

  return (
    <>
      {/* 지각한 사람 X */}
      {step === 'init-checkin' && (
        <div className="checkin__body">
          <img src={NoLate} alt="a" className="checkin__img" />
        </div>
      )}

      {/* 지각한 사람 X */}
      {step === 'init-checkin-isNormal' && (
        <div className="checkin__body">
          <img src={NoLate} alt="a" />
        </div>
      )}
      {step === 'view-penalty-completed' && (
        <div className="checkin__body">
          <div className="element">지각비 10000원</div>
        </div>
      )}

      {/* 지각한 사람 O */}
      {step === 'init-checkin-isLast' && (
        <div className="checkin__body">
          <img src={Late} alt="a" className="checkin__img" />
        </div>
      )}
      {step === 'my-penalty-completed' && (
        <div className="checkin__body">
          <div className="element">지각비 10000원</div>
        </div>
      )}

      {/* 모두 지각 */}
      {step === 'all-late' && (
        <div className="checkin__body">
          <img src={Apology} alt="a" className="checkin__img" />
        </div>
      )}
      {step === 'write-regret-completed' && <RegretInput />}
    </>
  );
};
