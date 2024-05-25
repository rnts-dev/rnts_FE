import './appointmentTendencyList.scss';
import ioRestaurant from '@/assets/ioRestaurant.svg';
import ioHobby from '@/assets/iohobby.svg';
import ioThunder from '@/assets/ioThunder.svg';
import ioClass from '@/assets/ioClass.svg';
import ioFamliy from '@/assets/ioFamliy.svg';
import ioDate from '@/assets/ioDate.svg';
import ioRestaurantWhite from '@/assets/ioRestaurantWhite.svg';
import ioHobbyWhite from '@/assets/ioHobbyWhite.svg';
import ioThunderWhite from '@/assets/ioThunderWhite.svg';
import ioClassWhite from '@/assets/ioClassWhite.svg';
import ioFamliyWhite from '@/assets/ioFamilyWhite.svg';
import ioDateWhite from '@/assets/ioDateWhite.svg';
import { useAtom } from 'jotai';
import { AppointmentState } from '@/shared/store/atoms/appointment';
import Description from '@/entities/appointment/ui/description/Description';

const appointmentTendencyData = [
  { src: ioRestaurant, selectedSrc: ioRestaurantWhite, title: '식사' },
  { src: ioHobby, selectedSrc: ioHobbyWhite, title: '취미' },
  { src: ioThunder, selectedSrc: ioThunderWhite, title: '모임' },
  { src: ioClass, selectedSrc: ioClassWhite, title: '스터디' },
  { src: ioFamliy, selectedSrc: ioFamliyWhite, title: '가족' },
  { src: ioDate, selectedSrc: ioDateWhite, title: '데이트' },
];

const AppointmentTendencyList = () => {
  const [appointment, setAppointment] = useAtom(AppointmentState);

  const handleSelectTendency = (tendency: string) => {
    setAppointment((prev) => {
      return {
        ...prev,
        tendency,
      };
    });
  };

  return (
    <div className="appointment_tendency_container">
      <Description title="약속 유형" description="약속 유형을 선택하세요." />
      <div className="appointment_tendency_grid">
        {appointmentTendencyData.map((item) => {
          const isSelected = appointment.tendency === item.title;
          return (
            <button key={item.title} onClick={() => handleSelectTendency(item.title)} className="appointment_tendency_card">
              <img src={isSelected ? item.selectedSrc : item.src} className={isSelected ? 'select' : ''} alt="appointment_tendency" />
              <p>{item.title}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AppointmentTendencyList;
