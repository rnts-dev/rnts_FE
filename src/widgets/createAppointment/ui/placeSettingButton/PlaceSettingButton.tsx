import { AppointmentState } from '@/shared/store/atoms/appointment';
import Input from '@/widgets/createAppointment/ui/appointmentInput/AppointmentInput';
import { useAtomValue } from 'jotai';
import './placeSettingButton.scss';

interface PlaceSettingButton {
  onclick: () => void;
}

const PlaceSettingButton = (props: PlaceSettingButton) => {
  const { onclick } = props;
  const { place } = useAtomValue(AppointmentState);

  return (
    <div className="place-button">
      <button onClick={onclick}>
        <Input placeholder="지번, 도로명, 건물명으로 검색" value={place} />
      </button>
    </div>
  );
};

export default PlaceSettingButton;
