import IoMore from '@/assets/more.svg';
import IoRemove from '@/assets/remove.svg';

import { CustomAppointmentChangeMode } from '@/shared/store/atoms/customAppointmentType';
import { isSame } from '@/shared/utils/util';
import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import * as S from './AppointmentTendencyGrid.styled';
import { modalState } from '@/shared/store/atoms/modal';
import DeleteCustomAppointmentModal from '@/components/modal/appointment/customAppointment/DeleteCustomAppointment';

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
  const [customAppointmentChange, setCustomAppointmentChange] = useAtom(CustomAppointmentChangeMode);
  const [deleteTendencyId, setDeleteTendencyId] = useState<number>(0);

  const handleChangeAppointmentTendency = (item: any) => {
    onSelect(item.typeName, item.imageUrl, item.selectedImageUrl);
    setCustomAppointmentChange(undefined);
  };

  const onSelectDeleteTendency = (tendencyId: number) => {
    setDeleteTendencyId(tendencyId);
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
                  onClick={(e) => {
                    onSelectDeleteTendency(item.id);
                    setModal('appointmentDelete');
                    e.stopPropagation();
                  }}>
                  <img src={customAppointmentChange === 'DELETE' ? IoRemove : IoMore} />
                </S.AppointmentTendencyIconAddon>
              )}
            </S.AppointmentTendencyIcon>

            <p>{type === 'DETAIL' && item.typeName}</p>
          </S.AppointmentTendencyCard>
        ))}
      </S.AppointmentTendencyListGrid>

      <DeleteCustomAppointmentModal appointmentId={deleteTendencyId} refetchAppointmentType={refetchAppointmentType} />
    </>
  );
};
