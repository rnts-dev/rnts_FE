import IoMore from '@/assets/more.svg';
import IoRemove from '@/assets/remove.svg';

import { CustomAppointmentChangeMode } from '@/shared/store/atoms/customAppointmentType';
import { isSame } from '@/shared/utils/util';
import { useAtom } from 'jotai';
import { useEffect } from 'react';
import * as S from './AppointmentTendencyGrid.styled';

interface AppointmentTendencyGrid<T> {
  tendencyList: Array<T>;
  selectedItem: string;
  onSelect: (selectedKey: string) => any;
  type?: 'DETAIL';
}

export const AppointmentTendencyGrid = <T extends { typeName: string; selectedImageUrl: string; imageUrl: string; isCustom?: boolean }>(props: AppointmentTendencyGrid<T>) => {
  const { tendencyList, selectedItem, onSelect, type } = props;
  const [customAppointmentChange, setCustomAppointmentChange] = useAtom(CustomAppointmentChangeMode);

  const handleChangeAppointmentTendency = (item) => {
    onSelect(item.typeName);
    setCustomAppointmentChange(undefined);
  };

  useEffect(() => {
    return () => setCustomAppointmentChange(undefined);
  }, []);

  return (
    <S.AppointmentTendencyListGrid>
      {tendencyList.map((item) => (
        <S.AppointmentTendencyCard key={item.typeName} onClick={() => handleChangeAppointmentTendency(item)}>
          <S.AppointmentTendencyIcon $selected={isSame(item.typeName, selectedItem)}>
            <img src={isSame(item.typeName, selectedItem) ? item.selectedImageUrl : item.imageUrl} />

            {item.isCustom && customAppointmentChange && (
              <S.AppointmentTendencyIconAddon
                onClick={(e) => {
                  console.log('@@@@@@');
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
  );
};
