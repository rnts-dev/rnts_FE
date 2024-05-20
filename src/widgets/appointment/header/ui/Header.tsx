import ListSelectBtn from '@/features/appointment/listSelectBtn/ui/ListSelectBtn';
import './header.scss';
import chevronLeft from '@/assets/chevronLeft.svg';
import { useState } from 'react';

const Header = () => {
  const [selected, setSelected] = useState('남은 약속');

  return (
    <div className="container">
      <img src={chevronLeft} alt="chevronLeft" />
      <h1>나의 약속</h1>
      <p className="description">약속을 확인할 수 있어요</p>
      <div className="history_wrap">
        <ListSelectBtn text="남은 약속" selected={selected} onClickBtn={setSelected} />
        <ListSelectBtn text="지난 약속" selected={selected} onClickBtn={setSelected} />
      </div>
    </div>
  );
};

export default Header;
