import IoRemove from '@/assets/remove.svg';
import ellipse from '@/assets/ellipse.svg';
import pencil from '@/assets/edit/BiPencil.svg';

import { CustomAppointmentChangeMode, CustomAppointmentTypeState } from '@/shared/store/atoms/customAppointmentType';
import { isSame } from '@/shared/utils/util';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import * as S from './AppointmentTendencyGrid.styled';
import { modalState } from '@/shared/store/atoms/modal';
import DeleteCustomAppointmentModal from '@/components/modal/appointment/customAppointment/DeleteCustomAppointment';
import EditCustomAppointment from '@/components/modal/appointment/customAppointment/EditCustomAppointment';
import { useDisclosure } from '@chakra-ui/react';
import { CustomAppointmentTendencyBottomSheet } from '@/widgets/appointment/appointmentTendencyList/custom/CustomAppointmentTendencyBottomSheet';
import { editCustomAppointment } from '@/mutation/appointment/editCustomAppointment';

interface AppointmentTendencyGrid<T> {
  tendencyList: Array<T>;
  selectedItem: string;
  onSelect: (selectedKey: string, imageUrl: string, selectedImageUrl: string) => any;
  type?: 'DETAIL';
  refetchAppointmentType: () => void;
}

export const AppointmentTendencyGrid = <T extends { typeName: string; selectedImageUrl: string; imageUrl: string; isCustom?: boolean }>(props: AppointmentTendencyGrid<T>) => {
  const [_, setModal] = useAtom(modalState);
  const { tendencyList, selectedItem, onSelect, type, refetchAppointmentType } = props;
  const [customAppointmentType, _setCustomAppointmentType] = useAtom(CustomAppointmentTypeState);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [customAppointmentChange, setCustomAppointmentChange] = useAtom(CustomAppointmentChangeMode);
  const { mutate: editCustomAppointmentMutate } = editCustomAppointment(refetchAppointmentType);
  const [tendencyId, setTendencyId] = useState<number>(0);

  const handleChangeAppointmentTendency = (item: any) => {
    onSelect(item.typeName, item.imageUrl, item.selectedImageUrl);
    setCustomAppointmentChange(undefined);
  };

  const onClickEditConfirmBtn = (appointmentId: number, typeName: string, imageUrl: string) => {
    editCustomAppointmentMutate({ customAppointmentId: appointmentId, typeName, imageUrl });
    onClose();
  };

  const onSelectTendency = (tendencyId: number) => {
    setTendencyId(tendencyId);
  };

  const onClickDeleteIcon = (appointmentId: number) => {
    onSelectTendency(appointmentId);
    setModal('appointmentDelete');
  };

  //TODO: custom appointment Edit --> Modal & API connecting
  const onClickEditIcon = (appointmentId: number) => {
    onSelectTendency(appointmentId);
    setModal('appointmentEdit');
  };

  const onClickEditBtn = () => {
    setModal('');
    onOpen();
  };

  useEffect(() => {
    return () => setCustomAppointmentChange(undefined);
  }, []);

  return (
    <>
      <S.AppointmentTendencyListGrid>
        {tendencyList.map((item: any) => (
          <S.AppointmentTendencyCard key={item.typeName} onClick={() => handleChangeAppointmentTendency(item)}>
            <S.AppointmentTendencyIcon $selected={isSame(item.typeName, selectedItem)}>
              <img src={isSame(item.typeName, selectedItem) ? item.selectedImageUrl : item.imageUrl} />

              {item.isCustom && customAppointmentChange && (
                <S.AppointmentTendencyIconAddon
                  onClick={() => {
                    customAppointmentChange === 'DELETE' ? onClickDeleteIcon(item.id) : onClickEditIcon(item.id);
                    // e.stopPropagation();
                  }}>
                  {customAppointmentChange === 'DELETE' ? (
                    <img src={IoRemove} />
                  ) : (
                    <S.EditEllipse>
                      <img src={ellipse} />
                      <S.EditPencilIcon src={pencil} />
                    </S.EditEllipse>
                  )}
                </S.AppointmentTendencyIconAddon>
              )}
            </S.AppointmentTendencyIcon>

            <p>{type === 'DETAIL' && item.typeName}</p>
          </S.AppointmentTendencyCard>
        ))}
      </S.AppointmentTendencyListGrid>

      <DeleteCustomAppointmentModal appointmentId={tendencyId} refetchAppointmentType={refetchAppointmentType} />
      <EditCustomAppointment appointmentId={tendencyId} refetchAppointmentType={refetchAppointmentType} onClickConfirm={onClickEditBtn} />

      <CustomAppointmentTendencyBottomSheet
        isOpen={isOpen}
        onClose={onClose}
        refetchAppointmentType={refetchAppointmentType}
        onClickConfirmBtn={() => onClickEditConfirmBtn(tendencyId, customAppointmentType.typeName, customAppointmentType.imageUrl)}
      />
    </>
  );
};
