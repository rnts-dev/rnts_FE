import './penaltyList.scss';
import { useState } from 'react';

import { Penalty } from '@/shared/utils/types/penalty.types';
import { PenaltyHistorySelect } from '@/components/penalty';
import { PenaltyCardList } from '../penaltyCardList/PenaltyCardList';

const mockData: { [key: string]: Penalty[] } = {
  '받은 패널티': [
    {
      from: '홍길동',
      appointmentTitle: '야구 경기 직관',
      penaltyTitle: '길거리에서 숏폼 찍기',
      appointmentPlace: '서울특별시 동작구 동작대로 83',
      appointmentTime: '5월 18일 오전 10시 30분',
      labelTime: '4',
      profileImgList: [
        'https://images.unsplash.com/photo-1497316730643-415fac54a2af?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs7HxzKKvBIkjKHsnqkVp-9MXfpoxiNKx7v6x8ks1ToA&s',
        'https://play-lh.googleusercontent.com/jInS55DYPnTZq8GpylyLmK2L2cDmUoahVacfN_Js_TsOkBEoizKmAl5-p8iFeLiNjtE=w526-h296-rw',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpIk-yiDGSA2AMrykU31HrJamu1Xs9lV7MVgHcVHkD9g&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpIk-yiDGSA2AMrykU31HrJamu1Xs9lV7MVgHcVHkD9g&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpIk-yiDGSA2AMrykU31HrJamu1Xs9lV7MVgHcVHkD9g&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpIk-yiDGSA2AMrykU31HrJamu1Xs9lV7MVgHcVHkD9g&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpIk-yiDGSA2AMrykU31HrJamu1Xs9lV7MVgHcVHkD9g&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpIk-yiDGSA2AMrykU31HrJamu1Xs9lV7MVgHcVHkD9g&s',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpIk-yiDGSA2AMrykU31HrJamu1Xs9lV7MVgHcVHkD9g&s',
      ],
    },
    {
      from: '홍길동',
      appointmentTitle: '야구 경기 직관',
      penaltyTitle: '길거리에서 숏폼 찍기',
      appointmentPlace: '서울특별시 동작구 동작대로 83',
      appointmentTime: '5월 18일 오전 10시 30분',
      labelTime: '4',
      profileImgList: [
        'https://images.unsplash.com/photo-1497316730643-415fac54a2af?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs7HxzKKvBIkjKHsnqkVp-9MXfpoxiNKx7v6x8ks1ToA&s',
        'https://play-lh.googleusercontent.com/jInS55DYPnTZq8GpylyLmK2L2cDmUoahVacfN_Js_TsOkBEoizKmAl5-p8iFeLiNjtE=w526-h296-rw',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpIk-yiDGSA2AMrykU31HrJamu1Xs9lV7MVgHcVHkD9g&s',
      ],
    },
  ],
  '보낸 패널티': [
    {
      from: '홍길동',
      appointmentTitle: '야구 경기 직관',
      penaltyTitle: '길거리에서 숏폼 찍기',
      appointmentPlace: '서울특별시 동작구 동작대로 83',
      appointmentTime: '5월 18일 오전 10시 30분',
      labelTime: '4',
      profileImgList: [
        'https://images.unsplash.com/photo-1497316730643-415fac54a2af?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs7HxzKKvBIkjKHsnqkVp-9MXfpoxiNKx7v6x8ks1ToA&s',
        'https://play-lh.googleusercontent.com/jInS55DYPnTZq8GpylyLmK2L2cDmUoahVacfN_Js_TsOkBEoizKmAl5-p8iFeLiNjtE=w526-h296-rw',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpIk-yiDGSA2AMrykU31HrJamu1Xs9lV7MVgHcVHkD9g&s',
      ],
    },
    {
      from: '홍길동',
      appointmentTitle: '야구 경기 직관',
      penaltyTitle: '길거리에서 숏폼 찍기',
      appointmentPlace: '서울특별시 동작구 동작대로 83',
      appointmentTime: '5월 18일 오전 10시 30분',
      labelTime: '4',
      profileImgList: [
        'https://images.unsplash.com/photo-1497316730643-415fac54a2af?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs7HxzKKvBIkjKHsnqkVp-9MXfpoxiNKx7v6x8ks1ToA&s',
        'https://play-lh.googleusercontent.com/jInS55DYPnTZq8GpylyLmK2L2cDmUoahVacfN_Js_TsOkBEoizKmAl5-p8iFeLiNjtE=w526-h296-rw',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpIk-yiDGSA2AMrykU31HrJamu1Xs9lV7MVgHcVHkD9g&s',
      ],
    },
  ],
};

export const PenaltyList = () => {
  const [selected, setSelected] = useState('받은 패널티');

  return (
    <>
      <PenaltyHistorySelect selected={selected} setSelected={setSelected} />
      <PenaltyCardList type={selected} penaltyList={mockData[selected]} />
    </>
  );
};
