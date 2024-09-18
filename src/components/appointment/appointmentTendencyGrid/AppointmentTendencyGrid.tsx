import { isSame } from '@/shared/utils/util';
import * as S from './AppointmentTendencyGrid.styled';

interface AppointmentTendencyGrid<T> {
  tendencyList: Array<T>;
  selectedItem: string;
  onSelect: (selectedKey: string) => any;
  type?: 'DETAIL';
}

export const AppointmentTendencyGrid = <T extends { typeName: string; selectedSrc: string; src: string }>(props: AppointmentTendencyGrid<T>) => {
  const { tendencyList, selectedItem, onSelect, type } = props;

  return (
    <S.AppointmentTendencyListGrid>
      {tendencyList.map((item) => (
        <S.AppointmentTendencyCard key={item.typeName} $selected={isSame(item.typeName, selectedItem)} onClick={() => onSelect(item.typeName)}>
          <img src={isSame(item.typeName, selectedItem) ? item.selectedSrc : item.src} />
          <p>{type === 'DETAIL' && item.typeName}</p>
        </S.AppointmentTendencyCard>
      ))}
    </S.AppointmentTendencyListGrid>
  );
};
