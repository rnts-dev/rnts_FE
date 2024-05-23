import { checkinStep } from '@/shared/store/atoms/checkin';
import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';

export default function useHandleBottomButton() {
  const [step, setStep] = useAtom(checkinStep);
  const navigate = useNavigate();

  // 체크인 모달 하단 버튼 액션
  const handleChangeStep = () => {
    // selected appointment 상태 관리 하기
    // 조건 추가해야 함 (첫번째 유저인지)
    if (step === 'init-checkin') {
      navigate('/penalty/send');
    }

    if (step === 'view-penalty') {
      setStep('view-penalty-completed');
    }

    if (step === 'all-late') {
      setStep('write-regret-completed');
    }

    if (step === 'my-penalty') {
      setStep('my-penalty-completed');
    }

    if (step.includes('completed')) {
      setStep('canceled');
    }
  };

  // 체크인 모달 하단 버튼 텍스트
  const getButtonTitle = () => {
    if (step === 'init-checkin') {
      return '지각자에게 보낼 패널티 정하기';
    }
    if (step === 'view-penalty') {
      return '지각자가 받을 페널티 보러 가기';
    }
    if (step === 'view-penalty-completed') {
      return '확인';
    }
    if (step === 'view-my-penalty') {
      return '페널티 확인하기';
    }
    if (step === 'my-penalty') {
      return '페널티 확인하기';
    }
    if (step === 'my-penalty-completed') {
      return '확인';
    }
    if (step === 'all-late') {
      return '반성문쓰기';
    }
    if (step === 'write-regret-completed') {
      return '확인';
    }
  };

  return { handleChangeStep, getButtonTitle };
}
