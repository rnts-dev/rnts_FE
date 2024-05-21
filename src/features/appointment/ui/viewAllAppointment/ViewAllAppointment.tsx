import './viewAllAppointment.scss';
import chevronRight from '@/assets/chevronRight.svg';

const ViewAllAppointment = () => {
  return (
    <button className="view_appointment_btn" onClick={() => {}}>
      <p>전체 약속</p>
      <img src={chevronRight} alt="chevronRight" />
    </button>
  );
};

export default ViewAllAppointment;
