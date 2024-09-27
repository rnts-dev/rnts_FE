import ioClass from '@/assets/ioClass.svg';
import ioClassWhite from '@/assets/ioClassWhite.svg';
import ioHobby from '@/assets/iohobby.svg';
import ioHobbyWhite from '@/assets/ioHobbyWhite.svg';
import ioRestaurant from '@/assets/ioRestaurant.svg';
import ioRestaurantWhite from '@/assets/ioRestaurantWhite.svg';
import ioThunder from '@/assets/ioThunder.svg';
import ioThunderWhite from '@/assets/ioThunderWhite.svg';
import { AppointmentTendencyGrid, ConfirmButton2, Description } from '@/components/appointment';
import Input from '@/shared/components/Input/Input';
import RNTSBottomSlide from '@/shared/components/RNTSBottomSlide/RNTSBottomSlide';
import { postCustomAppointment } from '@/shared/service/appointment/type/postCustomAppointment';
import { CustomAppointmentTypeState } from '@/shared/store/atoms/customAppointmentType';
import { pick } from '@fxts/core';
import { useMutation } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import * as S from './CustomAppointmentTendencyBottomSheet.styled';

interface CustomAppointmentTendency {
  isOpen: boolean;
  refetchAppointmentType: () => void;
  onClose: () => void;
}

const customAppointmentTypeMeta = [
  { imageUrl: ioRestaurant, selectedImageUrl: ioRestaurantWhite, typeName: '1' },
  { imageUrl: ioHobby, selectedImageUrl: ioHobbyWhite, typeName: '2' },
  { imageUrl: ioThunder, selectedImageUrl: ioThunderWhite, typeName: '3' },
  { imageUrl: ioClass, selectedImageUrl: ioClassWhite, typeName: '4' },
];

export const CustomAppointmentTendencyBottomSheet = (props: CustomAppointmentTendency) => {
  const { isOpen, onClose, refetchAppointmentType } = props;
  const [customAppointmentType, setCustomAppointmentType] = useAtom(CustomAppointmentTypeState);

  const { mutate } = useMutation({
    mutationFn: (data: { id: string; imageUrl: string; typeName: string }) => {
      console.log('data', data);
      const body = pick(['imageUrl', 'typeName'], data);
      return postCustomAppointment(body);
    },
    onSuccess: () => {
      refetchAppointmentType();
    },
  });

  const handleSelectTendency = (selectedKey: string, imageUrl: string, selectedImageUrl: string) => {
    setCustomAppointmentType((prev) => {
      return {
        ...prev,
        imageUrl,
        selectedImageUrl,
        id: selectedKey,
      };
    });
  };

  const handleAppointmentTendencyName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAppointmentType((prev) => {
      return {
        ...prev,
        typeName: event.target.value,
      };
    });
  };

  const handleConfirm = () => {
    mutate(customAppointmentType);
    onClose();
  };

  return (
    <RNTSBottomSlide isOpen={isOpen} onClose={onClose}>
      <S.Container>
        <S.InputGroup>
          <Description title="아이콘 선택" description="약속 유형을 나타낼 아이콘을 선택하세요." />
          <AppointmentTendencyGrid tendencyList={customAppointmentTypeMeta} selectedItem={customAppointmentType.id} onSelect={handleSelectTendency} refetchAppointmentType={refetchAppointmentType} />
        </S.InputGroup>

        <S.InputGroup>
          <Description title="유형 이름" description="유형 이름을 정해 주세요." />
          <Input value={customAppointmentType.typeName ? customAppointmentType.typeName : ''} placeholder="띄어쓰기 포함 최대 6자 이내" onChange={handleAppointmentTendencyName} />
        </S.InputGroup>
      </S.Container>

      <ConfirmButton2 onConfirm={handleConfirm} onCancel={onClose} />
    </RNTSBottomSlide>
  );
};
