import { AppointmentState } from '@/shared/store/atoms/appointment';
import { AppointmentInput } from '@/widgets/createAppointment';
import { useAtomValue } from 'jotai';
import './placeSettingButton.scss';

interface PlaceSettingButton {
  onclick: () => void;
}

export const PlaceSettingButton = (props: PlaceSettingButton) => {
  const { onclick } = props;
  const { place } = useAtomValue(AppointmentState);

  return (
    <div className="place-button">
      <button onClick={onclick}>
        <AppointmentInput placeholder="지번, 도로명, 건물명으로 검색" value={place} />
      </button>
    </div>
  );
};
