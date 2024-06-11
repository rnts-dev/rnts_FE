import { AddAppointmentBtn } from '@/components/appointment';
import './notAppointment.scss';
import turtleSleep from '@/assets/turtle_sleep.png';

export const NotAppointment = () => {
  return (
    <div className="not_appointment_content">
      <div className="character">
        <img src={turtleSleep} alt="turtle_sleep" />
      </div>
      <p className="description">등록된 약속이 없어요</p>
      <AddAppointmentBtn />
    </div>
  );
};
