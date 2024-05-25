import { useNavigate } from 'react-router-dom';
import './createHeader.scss';
import chevronLeft from '@/assets/chevronLeft.svg';
import Description from '@/entities/appointment/ui/description/Description';

interface CreateHeaderProps {
  title: string;
  description: string;
}

const CreateHeader = ({ title, description }: CreateHeaderProps) => {
  const navigate = useNavigate();

  return (
    <div className="appointment_create_header_container">
      <button onClick={() => navigate(-1)} className="back_icon">
        <img src={chevronLeft} alt="chevronLeft" />
      </button>
      <Description title={title} description={description} />
    </div>
  );
};

export default CreateHeader;
