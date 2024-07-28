import { Link } from 'react-router-dom';
import './viewAllAppointment.scss';
import chevronRight from '@/assets/chevronRight.svg';

export const ViewAllAppointment = () => {
  return (
    <Link to="/appointment">
      <div className="view_appointment_btn">
        <p className="view_appointment_text">전체 약속</p>
        <img src={chevronRight} alt="chevronRight" />
      </div>
    </Link>
  );
};
