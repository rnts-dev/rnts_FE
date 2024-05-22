import { checkinStep } from '@/shared/store/atoms/checkin';
import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';

export default function useHandleBottomButton() {
  const [step, setStep] = useAtom(checkinStep);
  const navigate = useNavigate();

  const handleChangeStep = () => {
    // selected appointment 상태 관리 하기
    // 조건 추가해야 함 (첫번째 유저인지)
    if (step === 'init-checkin') {
      navigate('/penalty');
    }
  };

  return { handleChangeStep };
}
