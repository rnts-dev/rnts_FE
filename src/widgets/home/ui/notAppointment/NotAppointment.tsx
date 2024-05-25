import AddAppointmentBtn from '@/features/appointment/ui/addAppointmentBtn/AddAppointmentBtn';
import './notAppointment.scss';
import turtleSleep from '@/assets/turtle_sleep.png';

const NotAppointment = () => {
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

export default NotAppointment;
