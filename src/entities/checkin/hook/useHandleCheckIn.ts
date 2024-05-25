import BottomButton from '@/entities/checkin/ui/button/CheckInButton';
import { fetcher } from '@/shared/service/fetch';
import { useQuery } from '@tanstack/react-query';

export default function useHandleCheckIn() {
  const query = useQuery<any>({
    queryKey: ['api/userappt/checkin', 1],
    queryFn: () =>
      fetcher
        .post('api/userappt/checkin', {
          id: 1,
        })
        .then((res) => res.data),
  });

  console.log('e33', query);
  // api/userappt/checkin/1
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
  const getModalMeta = () => {
    const isFirst: any = {
      title: '출발했어?',
      description: getLateInfo().safe === 'early' ? '3분 빨리 도착했어요' : '딱 맞춰 도착했어요',
      bottomButton: BottomButton,
    };
    const isNormal: any = {
      title: '출발했어?',
      description: getLateInfo().safe === 'early' ? '3분 빨리 도착했어요' : '딱 맞춰 도착했어요',
      bottomButton: BottomButton,
    };
    const isLast: any = {
      title: '출발했어?',
      description: getLateInfo().safe === 'early' ? '3분 빨리 도착했어요' : '딱 맞춰 도착했어요',
      bottomButton: BottomButton,
    };

    if (getLateInfo().safe !== 'late') {
      return getLateInfo().order === 'first' ? isFirst : getLateInfo().order === 'normal' ? isNormal : getLateInfo().order === 'last' ? isLast : '';
    }

    return isNormal;
  };

  return { getModalMeta };
}
