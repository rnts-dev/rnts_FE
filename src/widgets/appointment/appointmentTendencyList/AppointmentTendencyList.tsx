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
import { MorePopover } from '@/shared/components/MorePopover.tsx';
import { getCustomAppointment } from '@/shared/service/appointment/type/getCustomAppointment';
import { AppointmentState } from '@/shared/store/atoms/appointment';
import { CustomAppointmentChangeMode } from '@/shared/store/atoms/customAppointmentType';
import { CustomAppointmentTendencyBottomSheet } from '@/widgets/appointment/appointmentTendencyList/custom/CustomAppointmentTendencyBottomSheet';
import { useDisclosure } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import * as S from './AppointmentTendencyList.styled';

type AppointmentTendencyData = { src: string; selectedSrc: string; typeName: string };
interface CustomAppointmentTendencyData extends AppointmentTendencyData {
  isCustom?: boolean;
}

// TODO : 동적으로 변함
const appointmentTendencyData = [
  { imageUrl: ioRestaurant, selectedImageUrl: ioRestaurantWhite, typeName: '식사' },
  { imageUrl: ioHobby, selectedImageUrl: ioHobbyWhite, typeName: '취미' },
  { imageUrl: ioThunder, selectedImageUrl: ioThunderWhite, typeName: '모임' },
  { imageUrl: ioClass, selectedImageUrl: ioClassWhite, typeName: '스터디' },
  { imageUrl: ioFamliy, selectedImageUrl: ioFamliyWhite, typeName: '가족' },
  { imageUrl: ioDate, selectedImageUrl: ioDateWhite, typeName: '데이트' },
  { imageUrl: checkbox, selectedImageUrl: checkbox, typeName: '기타' },
  { imageUrl: addIcon, selectedImageUrl: addIcon, typeName: 'custom' },
];

export const AppointmentTendencyList = () => {
  const [appointment, setAppointment] = useAtom(AppointmentState);
  const [customAppointmentChange, setCustomAppointmentChange] = useAtom(CustomAppointmentChangeMode);
  const { onOpen, onClose, isOpen } = useDisclosure();
  const [concatTendencyList, setConcatTendencyList] = useState(appointmentTendencyData);

  const { data: customTendencyData } = useQuery({
    queryKey: ['/api/v1/custom-appointment-types'],
    queryFn: () => getCustomAppointment(),
    refetchOnMount: true,
    refetchOnReconnect: true,
  });

  const handleSelectTendency = (selectedKey: string) => {
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

  const popoverBtn = [
    {
      title: '수정',
      onClick: () => setCustomAppointmentChange('EDIT'),
    },
    {
      title: '삭제',
      onClick: () => setCustomAppointmentChange('DELETE'),
    },
  ];

  useEffect(() => {
    setConcatTendencyList((prev) => [
      ...prev.slice(0, -1),
      ...(customTendencyData
        ? customTendencyData.map((item) => ({
            ...item,
            isCustom: true,
          }))
        : []),
      prev[prev.length - 1],
    ]);
  }, [customTendencyData]);

  // TODOAPI : 커스텀 get 연동
  // TODOAPI : 커스텀 생성 후 돌아왔을 때 select 처리
  return (
    <>
      <S.AppointmentTendencyList>
        <span>
          <Description title="약속 유형" description="약속 유형을 선택하세요." />
          <MorePopover contentMetaList={popoverBtn} />
        </span>

        <AppointmentTendencyGrid tendencyList={concatTendencyList} selectedItem={appointment.appointmentType} onSelect={handleSelectTendency} type="DETAIL" />
      </S.AppointmentTendencyList>

      <CustomAppointmentTendencyBottomSheet isOpen={isOpen} onClose={onClose} />
    </>
  );
};
