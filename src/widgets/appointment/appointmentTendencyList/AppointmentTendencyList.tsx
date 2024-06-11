import ioClass from '@/assets/ioClass.svg';
import ioClassWhite from '@/assets/ioClassWhite.svg';
import ioDate from '@/assets/ioDate.svg';
import ioDateWhite from '@/assets/ioDateWhite.svg';
import ioFamliyWhite from '@/assets/ioFamilyWhite.svg';
import ioFamliy from '@/assets/ioFamliy.svg';
import ioHobby from '@/assets/iohobby.svg';
import ioHobbyWhite from '@/assets/ioHobbyWhite.svg';
import ioRestaurant from '@/assets/ioRestaurant.svg';
import ioRestaurantWhite from '@/assets/ioRestaurantWhite.svg';
import ioThunder from '@/assets/ioThunder.svg';
import ioThunderWhite from '@/assets/ioThunderWhite.svg';
import { AppointmentState } from '@/shared/store/atoms/appointment';
import { useAtom } from 'jotai';
import './appointmentTendencyList.scss';
import { Description } from '@/components/appointment';

const appointmentTendencyData = [
  { src: ioRestaurant, selectedSrc: ioRestaurantWhite, title: '식사' },
  { src: ioHobby, selectedSrc: ioHobbyWhite, title: '취미' },
  { src: ioThunder, selectedSrc: ioThunderWhite, title: '모임' },
  { src: ioClass, selectedSrc: ioClassWhite, title: '스터디' },
  { src: ioFamliy, selectedSrc: ioFamliyWhite, title: '가족' },
  { src: ioDate, selectedSrc: ioDateWhite, title: '데이트' },
];

export const AppointmentTendencyList = () => {
  const [appointment, setAppointment] = useAtom(AppointmentState);

  const handleSelectTendency = (appointmentType: string) => {
    setAppointment((prev) => {
      return {
        ...prev,
        appointmentType,
      };
    });
  };

  return (
    <div className="appointment_tendency_container">
      <Description title="약속 유형" description="약속 유형을 선택하세요." />
      <div className="appointment_tendency_grid">
        {appointmentTendencyData.map((item) => {
          const isSelected = appointment.appointmentType === item.title;
          return (
            <button key={item.title} onClick={() => handleSelectTendency(item.title)} className="appointment_tendency_card">
              <img src={isSelected ? item.selectedSrc : item.src} className={isSelected ? 'select' : ''} />
              <p>{item.title}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
};
