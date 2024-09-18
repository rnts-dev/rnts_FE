import addIcon from '@/assets/addIcon.svg';
import checkbox from '@/assets/checkbox.svg';
import ioClass from '@/assets/ioClass.svg';
import ioClassWhite from '@/assets/ioClassWhite.svg';
import ioDate from '@/assets/ioDate.svg';
import ioDateWhite from '@/assets/ioDateWhite.svg';
import ioFamliyWhite from '@/assets/ioFamilyWhite.svg';
import ioFamliy from '@/assets/ioFamliy.svg';
import ioHobby from '@/assets/iohobby.svg';
import ioHobbyWhite from '@/assets/ioHobbyWhite.svg';
import ioRestaurant from '@/assets/ioRestaurant.svg';
import ioRestaurantWhite from '@/assets/ioRestaurantWhite.svg';
import ioThunder from '@/assets/ioThunder.svg';
import ioThunderWhite from '@/assets/ioThunderWhite.svg';
import { AppointmentTendencyGrid, Description } from '@/components/appointment';
import { getCustomAppointment } from '@/shared/service/appointment/type/getCustomAppointment';
import { AppointmentState } from '@/shared/store/atoms/appointment';
import { CustomAppointmentTendencyBottomSheet } from '@/widgets/appointment/appointmentTendencyList/custom/CustomAppointmentTendencyBottomSheet';
import { useDisclosure } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import * as S from './AppointmentTendencyList.styled';

// TODO : 동적으로 변함
const appointmentTendencyData = [
  { src: ioRestaurant, selectedSrc: ioRestaurantWhite, typeName: '식사' },
  { src: ioHobby, selectedSrc: ioHobbyWhite, typeName: '취미' },
  { src: ioThunder, selectedSrc: ioThunderWhite, typeName: '모임' },
  { src: ioClass, selectedSrc: ioClassWhite, typeName: '스터디' },
  { src: ioFamliy, selectedSrc: ioFamliyWhite, typeName: '가족' },
  { src: ioDate, selectedSrc: ioDateWhite, typeName: '데이트' },
  { src: checkbox, selectedSrc: checkbox, typeName: '기타' },
  { src: addIcon, selectedSrc: addIcon, typeName: 'custom' },
];

export const AppointmentTendencyList = () => {
  const [appointment, setAppointment] = useAtom(AppointmentState);
  const { onOpen, onClose, isOpen } = useDisclosure();
  const [concatTendencyList, setConcatTendencyList] = useState(appointmentTendencyData);

  const { data: customTendencyData } = useQuery({
    queryKey: ['/api/v1/custom-appointment-types'],
    queryFn: () => getCustomAppointment(),
    refetchOnMount: true,
    refetchOnReconnect: true,
  });

  const handleSelectTendency = (selectedKey: string) => {
    console.log('##1', selectedKey);

    if (selectedKey === 'custom') {
      onOpen();
    }

    setAppointment((prev) => {
      return {
        ...prev,
        appointmentType: selectedKey || 'custom',
      };
    });
  };

  useEffect(() => {
    setConcatTendencyList((prev) => [...prev.slice(0, -1), ...(customTendencyData ? customTendencyData : []), prev[prev.length - 1]]);
  }, [customTendencyData]);

  // TODOAPI : 커스텀 get 연동
  // TODOAPI : 커스텀 생성 후 돌아왔을 때 select 처리
  return (
    <>
      <S.AppointmentTendencyList>
        <Description title="약속 유형" description="약속 유형을 선택하세요." />

        <AppointmentTendencyGrid tendencyList={concatTendencyList} selectedItem={appointment.appointmentType} onSelect={handleSelectTendency} type="DETAIL" />
      </S.AppointmentTendencyList>

      <CustomAppointmentTendencyBottomSheet isOpen={isOpen} onClose={onClose} />
    </>
  );
};
