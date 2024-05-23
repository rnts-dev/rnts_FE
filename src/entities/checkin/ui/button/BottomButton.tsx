import useHandleBottomButton from '@/entities/checkin/\bhook/useHandleBottomButton';
import { checkinStep } from '@/shared/store/atoms/checkin';
import { useAtom } from 'jotai';
import './bottomButton.scss';

const BottomButton = () => {
  const [step, setStep] = useAtom(checkinStep);
  const { handleChangeStep } = useHandleBottomButton();

  return (
    <div className="bottom-button">
      <div
        className="confirm"
        onClick={() => {
          handleChangeStep();
        }}>
        <div>지각자에게 보낼 패널티 정하기</div>
      </div>
      <div className="dismiss" onClick={() => setStep('completed')}>
        <p>넘어가기</p>
      </div>
    </div>
  );
};

export default BottomButton;
