import { useNavigate } from 'react-router-dom';
import './addAppointmentBtn.scss';

export const AddAppointmentBtn = () => {
  const navigate = useNavigate();

  return (
    <button className="add_appointment_btn" onClick={() => navigate('/appointment/create/type')}>
      약속 등록하기
    </button>
  );
};
