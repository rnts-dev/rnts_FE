import { ViewAllAppointment } from '@/components/appointment';
import './appointmentHeader.scss';

export const AppointmentHeader = () => {
  return (
    <div className="appointment_header">
      <div>
        <p>나의 약속</p>
      </div>
      <ViewAllAppointment />
    </div>
  );
};
