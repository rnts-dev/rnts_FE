import Input from '@/widgets/createAppointment/ui/input/Input';
import './placeButton.scss';

interface PlaceButton {
  onclick: () => void;
}

const PlaceButton = (props: PlaceButton) => {
  const { onclick } = props;

  return (
    <div className="place-button">
      <button onClick={onclick}>
        <Input placeholder="지번, 도로명, 건물명으로 검색" />
      </button>
    </div>
  );
};

export default PlaceButton;
