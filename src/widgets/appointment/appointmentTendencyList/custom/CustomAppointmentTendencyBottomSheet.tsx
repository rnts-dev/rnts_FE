import { AppointmentTendencyGrid, ConfirmButton2, Description } from '@/components/appointment';
import Input from '@/shared/components/Input/Input';
import RNTSBottomSlide from '@/shared/components/RNTSBottomSlide/RNTSBottomSlide';
import { postCustomAppointment } from '@/shared/service/appointment/type/postCustomAppointment';
import { CustomAppointmentTypeState } from '@/shared/store/atoms/customAppointmentType';
import { pick } from '@fxts/core';
import { useMutation } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import * as S from './CustomAppointmentTendencyBottomSheet.styled';
import { AppointmentState } from '@/shared/store/atoms/appointment';

interface CustomAppointmentTendency {
  isOpen: boolean;
  refetchAppointmentType: () => void;
  onClose: () => void;
  onClickConfirmBtn?: () => void;
}

const customAppointmentTypeMeta = [
  { imageUrl: 'https://rnts-fe.s3.ap-northeast-2.amazonaws.com/icon/ioRestaurant.svg', selectedImageUrl: 'https://rnts-fe.s3.ap-northeast-2.amazonaws.com/icon/ioRestaurantWhite.svg', typeName: '1' },
  { imageUrl: 'https://rnts-fe.s3.ap-northeast-2.amazonaws.com/icon/iohobby.svg', selectedImageUrl: 'https://rnts-fe.s3.ap-northeast-2.amazonaws.com/icon/ioHobbyWhite.svg', typeName: '2' },
  { imageUrl: 'https://rnts-fe.s3.ap-northeast-2.amazonaws.com/icon/ioThunder.svg', selectedImageUrl: 'https://rnts-fe.s3.ap-northeast-2.amazonaws.com/icon/ioThunderWhite.svg', typeName: '3' },
  { imageUrl: 'https://rnts-fe.s3.ap-northeast-2.amazonaws.com/icon/ioClass.svg', selectedImageUrl: 'https://rnts-fe.s3.ap-northeast-2.amazonaws.com/icon/ioClassWhite.svg', typeName: '4' },
];

export const CustomAppointmentTendencyBottomSheet = (props: CustomAppointmentTendency) => {
  const { isOpen, onClose, refetchAppointmentType, onClickConfirmBtn } = props;
  const [appointment, _setAppointment] = useAtom(AppointmentState);
  const [customAppointmentType, setCustomAppointmentType] = useAtom(CustomAppointmentTypeState);

  const { mutate } = useMutation({
    mutationFn: (data: { id: string; imageUrl: string; typeName: string }) => {
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
          <AppointmentTendencyGrid tendencyList={customAppointmentTypeMeta} selectedItem={appointment} onSelect={handleSelectTendency} refetchAppointmentType={refetchAppointmentType} />
        </S.InputGroup>

        <S.InputGroup>
          <Description title="유형 이름" description="유형 이름을 정해 주세요." />
          <Input value={customAppointmentType.typeName ? customAppointmentType.typeName : ''} placeholder="띄어쓰기 포함 최대 6자 이내" onChange={handleAppointmentTendencyName} />
        </S.InputGroup>
      </S.Container>

      <ConfirmButton2 onConfirm={onClickConfirmBtn || handleConfirm} onCancel={onClose} />
    </RNTSBottomSlide>
  );
};
