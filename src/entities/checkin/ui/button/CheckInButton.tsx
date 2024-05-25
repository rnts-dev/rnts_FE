import useHandleBottomButton from '@/entities/checkin/\bhook/useHandleBottomButton';
import { checkinStep } from '@/shared/store/atoms/checkin';
import { useSetAtom } from 'jotai';
import './checkinButton.scss';

const CheckInButton = () => {
  const setStep = useSetAtom(checkinStep);
  const { handleChangeStep, getCheckinUI } = useHandleBottomButton();

  return (
    <div className="checkin-button">
      <button
        className="confirm"
        onClick={() => {
          handleChangeStep();
        }}>
        <div>{getCheckinUI()?.bottomButton}</div>
      </button>
      {/* TODO : step별로 show 분기 처리 */}
      <button className="dismiss" onClick={() => setStep('canceled')}>
        <p>넘어가기</p>
      </button>
    </div>
  );
};

export default CheckInButton;
