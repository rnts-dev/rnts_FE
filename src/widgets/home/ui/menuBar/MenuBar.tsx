import './menuBar.scss';
import fiCalendar from '@/assets/fiCalendar.svg';
import addIcon from '@/assets/addIcon.svg';
import fiAchive from '@/assets/fiArchive.svg';

const MenuBar = () => {
  return (
    <div className="menubar">
      <div className="move_home_btn">
        <img src={fiCalendar} alt="calendar" />
      </div>
      <div className="add_btn">
        <img src={addIcon} alt="add_icon" />
      </div>
      <div className="penalty_btn">
        <img src={fiAchive} alt="fiAchive" />
      </div>
    </div>
  );
};

export default MenuBar;
