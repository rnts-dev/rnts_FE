import ListSelectBtn from '@/features/appointment/ui/listSelectBtn/ListSelectBtn';
import './header.scss';
import chevronLeft from '@/assets/chevronLeft.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [selected, setSelected] = useState('남은 약속');

  return (
    <div className="appointment_header_container">
      <Link to={'-1'}>
        <div className="chevron_left_back" onClick={() => history.back()}>
          <img src={chevronLeft} alt="뒤로 가기" />
        </div>
      </Link>
      <h1>나의 약속</h1>
      <p className="description">약속 내역을 확인할 수 있어요.</p>
      <div className="appointment_history_wrap">
        <ListSelectBtn text="남은 약속" selected={selected} onClickBtn={setSelected} />
        <ListSelectBtn text="지난 약속" selected={selected} onClickBtn={setSelected} />
      </div>
    </div>
  );
};

export default Header;
