import useHandleBottomButton from '@/entities/checkin/\bhook/useHandleBottomButton';
import { checkinStep } from '@/shared/store/atoms/checkin';
import { useSetAtom } from 'jotai';
import './bottomButton.scss';

const BottomButton = () => {
  const setStep = useSetAtom(checkinStep);
  const { handleChangeStep, getButtonTitle } = useHandleBottomButton();

  return (
    <div className="bottom-button">
      <div
        className="confirm"
        onClick={() => {
          handleChangeStep();
        }}>
        <div>{getButtonTitle()}</div>
      </div>
      {/* TODO : step별로 show 분기 처리 */}
      <div className="dismiss" onClick={() => setStep('canceled')}>
        <p>넘어가기</p>
      </div>
    </div>
  );
};

export default BottomButton;
