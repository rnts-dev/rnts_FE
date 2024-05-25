import useCheckinModalUI from '@/entities/checkin/hook/useCheckinModalUI';
import { checkinStep } from '@/shared/store/atoms/checkin';
import { useSetAtom } from 'jotai';
import './checkinButton.scss';

const CheckInButton = ({ id }: { id: number }) => {
  const setStep = useSetAtom(checkinStep);
  const { handleChangeStep, getCheckinUI } = useCheckinModalUI(id);

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
