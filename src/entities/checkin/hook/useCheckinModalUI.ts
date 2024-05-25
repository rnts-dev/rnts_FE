import { checkinStep } from '@/shared/store/atoms/checkin';
import { useAtom } from 'jotai';
import { useNavigate } from 'react-router-dom';

export default function useCheckinModalUI(id: number) {
  const [step, setStep] = useAtom(checkinStep);
  const navigate = useNavigate();

  // 체크인 모달 하단 버튼 액션
  const handleChangeStep = () => {
    // selected appointment 상태 관리 하기
    // 조건 추가해야 함 (첫번째 유저인지)
    if (step === 'init-checkin') {
      navigate(`/penalty/send&uaid=${id}`);
    }

    if (step === 'init-checkin-isNormal') {
      setStep('view-penalty-completed');
    }

    if (step === 'all-late') {
      setStep('canceled');
    }

    if (step === 'init-checkin-isLast') {
      setStep('my-penalty-completed');
    }

    if (step.includes('completed')) {
      setStep('canceled');
    }
  };
  const getLateInfo = () => {
    const mock_response = {
      data: {
        safe: 'early',
        time: 33,
        order: 'first',
      },
    };

    return mock_response.data;
  };
  // 체크인 UI
  const getCheckinUI = () => {
    // 1등
    if (step === 'init-checkin') {
      return {
        title: '출발했어?',
        description: getLateInfo().safe === 'early' ? '3분 빨리 도착했어요' : '딱 맞춰 도착했어요',
        bottomButton: '지각자에게 보낼 패널티 정하기',
      };
    }
    // 2등 이상
    if (step === 'init-checkin-isNormal') {
      return {
        title: '출발했어?',
        description: getLateInfo().safe === 'early' ? '3분 빨리 도착했어요' : '딱 맞춰 도착했어요',
        bottomButton: '지각자가 받을 페널티 보러 가기',
      };
    }
    if (step === 'view-penalty-completed') {
      return {
        title: '지각자가 받을 페널티',
        description: 'From. 김길동',
        bottomButton: '확인',
      };
    }
    // 지각자
    if (step === 'init-checkin-isLast') {
      return {
        title: '출발했어?',
        description: '3분 늦게 도착했어요',
        bottomButton: '페널티 확인하기',
      };
    }
    if (step === 'my-penalty-completed') {
      return {
        title: '받은 페널티',
        description: 'From. 김길동',
        bottomButton: '확인',
      };
    }

    if (step === 'all-late') {
      return {
        title: '출발했어?',
        description: '3분 늦게 도착했어요',
        bottomButton: '모두 늦었어요.',
      };
    }
    if (step === 'write-regret-completed') {
      return {
        title: '단체 반성문 쓰기',
        description: 'To. 우리 모두',
        bottomButton: '확인',
      };
    }
  };

  return { handleChangeStep, getCheckinUI };
}
