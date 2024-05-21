import ViewAllAppointment from '@/features/appointment/ui/viewAllAppointment/ViewAllAppointment';
import './appointmentHeader.scss';

const AppointmentHeader = () => {
  return (
    <div className="appointment_header">
      <div>
        <p>나의 약속</p>
      </div>
      <ViewAllAppointment />
    </div>
  );
};

export default AppointmentHeader;
