import chevronLeft from '@/assets/chevronLeft.svg';
import { Link, useNavigate } from 'react-router-dom';
import './header.scss';
import { ListSelectBtn } from '@/components/appointment';

interface Props {
  select: string;
  onChangeSelect: (state: string) => void;
}

export const Header = ({ select, onChangeSelect }: Props) => {
  const navigate = useNavigate();
  return (
    <div className="appointment_header_container">
      <Link to={'-1'}>
        <div
          className="chevron_left_back"
          onClick={() => {
            if (window.location.pathname.includes('create/schedule')) {
              navigate('/appointment/create/type');
            }
            history.back();
          }}>
          <img src={chevronLeft} alt="뒤로 가기" />
        </div>
      </Link>
      <h1>나의 약속</h1>
      <p className="description">약속 내역을 확인할 수 있어요.</p>
      <div className="appointment_history_wrap">
        <ListSelectBtn text="남은 약속" selected={select} onClickBtn={() => onChangeSelect('남은 약속')} />
        <ListSelectBtn text="지난 약속" selected={select} onClickBtn={() => onChangeSelect('지난 약속')} />
      </div>
    </div>
  );
};
