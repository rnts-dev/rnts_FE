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
import { CustomAppointmentTypeState } from '@/shared/store/atoms/customAppointmentType';
import { useAtom } from 'jotai';
import * as S from './CustomAppointmentTendencyBottomSheet.styled';

interface CustomAppointmentTendency {
  isOpen: boolean;
  onClose: () => void;
}

const customAppointmentTypeMeta = [
  { src: ioRestaurant, selectedSrc: ioRestaurantWhite, typeName: '1' },
  { src: ioHobby, selectedSrc: ioHobbyWhite, typeName: '2' },
  { src: ioThunder, selectedSrc: ioThunderWhite, typeName: '3' },
  { src: ioClass, selectedSrc: ioClassWhite, typeName: '4' },
];

export const CustomAppointmentTendencyBottomSheet = (props: CustomAppointmentTendency) => {
  const { isOpen, onClose } = props;
  const [customAppointmentType, setCustomAppointmentType] = useAtom(CustomAppointmentTypeState);

  const handleSelectTendency = (selectedKey: string) => {
    setCustomAppointmentType((prev) => {
      return {
        ...prev,
        imageUrl: 'TODO',
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
    console.log('APITODO : 커스텀 유형 POST', customAppointmentType);
    onClose();
  };

  return (
    <RNTSBottomSlide isOpen={isOpen} onClose={onClose}>
      <S.CustomAppointmentTendency>
        <Description title="아이콘 선택" description="약속 유형을 나타낼 아이콘을 선택하세요." />

        <AppointmentTendencyGrid tendencyList={customAppointmentTypeMeta} selectedItem={customAppointmentType.id} onSelect={handleSelectTendency} />

        <Description title="유형 이름" description="유형 이름을 정해 주세요." />
        <Input value={customAppointmentType.typeName ? customAppointmentType.typeName : ''} placeholder="띄어쓰기 포함 최대 6자 이내" onChange={handleAppointmentTendencyName} />
      </S.CustomAppointmentTendency>

      <ConfirmButton2 onConfirm={handleConfirm} onCancel={onClose} />
    </RNTSBottomSlide>
  );
};
