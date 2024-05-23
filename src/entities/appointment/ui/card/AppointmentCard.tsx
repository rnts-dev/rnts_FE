import './appointmentCard.scss';
import fiMoreVertical from '@/assets/fiMoreVertical.svg';
import fiMapFin from '@/assets/fiMapFin.svg';
import fiClock from '@/assets/fiClock.svg';
import fiShare from '@/assets/fiShare.svg';

interface AppoinmentCardProps {
  isShared?: boolean;
  isCheckinBtn?: boolean;
  title: string;
  profileImgList: string[];
  place: string;
  time: Date;
}

const AppointmentCard = ({ isShared, isCheckinBtn, title, profileImgList, place, time }: AppoinmentCardProps) => {
  return (
    <div className="appointment_card">
      <div className="top">
        <p className="title">{title}</p>
        <div className="appointment_card_option_container">
          {isShared && (
            <button>
              <img src={fiShare} alt="share_icon" />
            </button>
          )}
          <button>
            <img src={fiMoreVertical} alt="more_btn" />
          </button>
        </div>
      </div>
      <div className="profile_container">
        {profileImgList.map((item) => {
          return <img className="profile" src={item} alt="profile_img" />;
        })}
      </div>
      <div className="schedule">
        <img src={fiMapFin} alt="dotImg" />
        <p>{place}</p>
      </div>
      <div className="schedule">
        <img src={fiClock} alt="dotImg" />
        <p>{String(time)}</p>
      </div>
      {isCheckinBtn && (
        <div className="appointment_card_checkin_btn_wrap">
          <button className="appointment_card_checkin_btn">도착 체크인</button>
        </div>
      )}
    </div>
  );
};

export default AppointmentCard;
