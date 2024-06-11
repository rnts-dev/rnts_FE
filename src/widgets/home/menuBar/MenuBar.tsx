import './menuBar.scss';
import fiCalender from '@/assets/fiCalendar.svg';
import addIcon from '@/assets/addIcon.svg';
import fiAchive from '@/assets/fiArchive.svg';
import { Link } from 'react-router-dom';
import { useScrollEndFixed } from '@/shared/utils/useScrollEndFixed';

interface MenuBarProps {
  isFixed?: boolean;
}

export const MenuBar = ({ isFixed }: MenuBarProps) => {
  const { menubarFixed } = useScrollEndFixed(isFixed);

  return (
    <div className={menubarFixed ? 'menubar_blur' : 'menubar_nonblur'}>
      <div className="menubar">
        <Link to="/">
          <div className="move_home_btn">
            <img src={fiCalender} alt="calendar" />
          </div>
        </Link>
        <Link to={'/appointment/create/type'}>
          <div className="add_btn">
            <img src={addIcon} alt="add_icon" />
          </div>
        </Link>
        <Link to="/penalty">
          <div className="penalty_btn">
            <img src={fiAchive} alt="fiAchive" />
          </div>
        </Link>
      </div>
    </div>
  );
};
