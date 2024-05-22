import useGlobalModal, { AlertType, ConfirmType } from '@/shared/manager/modal/useGlobalModal';

export default function useHandleCheckIn() {
  const { prompt } = useGlobalModal();

  // 정시 도착
  // 일찍 도착
  // 지각
  // 판별하는 api get 해와서
  // 1) response :: late , notLate / 오차 시간 / 도착 순서 (first, last , normal)
  // -> fe 1) response에 따라 모달 UI 다르게 띄워주기
  // -> fe 2) 모달 내용 post or get
  // prompt로 분기 처리

  // 1. get mutate api
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
  // 2. Modal UI
  const setModalMeta = async () => {
    const isFirst: ConfirmType = {
      type: 'confirm',
      header: '출발했어?',
      description: getLateInfo().safe === 'early' ? '3분 빨리 도착했어요' : '딱 맞춰 도착했어요',
      contents: '<p>캐릭터 일러스트</p>',
      confirmTitle: '지각자에게 보낼 페널티 정하기',
      cancelTitle: '넘어가기',
    };
    const isNormal: ConfirmType = {
      type: 'confirm',
      header: '출발했어?',
      description: getLateInfo().safe === 'early' ? '3분 빨리 도착했어요' : '딱 맞춰 도착했어요',
      contents: '<p>캐릭터 일러스트</p>',
      confirmTitle: '지각자가 받을 페널티 보러 가기',
      cancelTitle: '안 볼래요',
    };
    const isLast: AlertType = {
      type: 'alert',
      header: '출발했어?',
      description: getLateInfo().safe === 'early' ? '3분 빨리 도착했어요' : '딱 맞춰 도착했어요',
      contents: '<p>캐릭터 일러스트</p>',
      confirmTitle: '오늘은 아무도 안 늦었어요',
    };
    let modal = {};
    if (getLateInfo().safe !== 'late') {
      modal = getLateInfo().order === 'first' ? isFirst : getLateInfo().order === 'normal' ? isNormal : getLateInfo().order === 'last' ? isLast : '';
    }

    return new Promise((resolve) => {
      resolve(modal);
    });
  };
  const handleCheckInModal = async () => {
    const modal = await setModalMeta();
    const promptModal = await prompt(modal);
    // TODO : modal action 함수

    if (promptModal) {
      alert('확인');
    }
    if (!promptModal) {
      alert('취소');
    }
  };

  return { handleCheckInModal };
}
