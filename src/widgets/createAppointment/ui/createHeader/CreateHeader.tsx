import chevronLeft from '@/assets/chevronLeft.svg';
import Description from '@/entities/appointment/ui/description/Description';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './createHeader.scss';

interface CreateHeaderProps {
  title: string;
  description: string;
}

const CreateHeader = ({ title, description }: CreateHeaderProps) => {
  const navigate = useNavigate();
  const [nav, setNav] = useState('');

  useEffect(() => {
    if (window.location.pathname.includes('/create/schedule')) {
      setNav('/appointment/create/type');
    } else {
      setNav('/');
    }
  }, [window.location.pathname]);

  return (
    <div className="appointment_create_header_container">
      <button
        onClick={() => {
          navigate(nav);
        }}
        className="back_icon">
        <img src={chevronLeft} alt="chevronLeft" />
      </button>
      <Description title={title} description={description} />
    </div>
  );
};

export default CreateHeader;
