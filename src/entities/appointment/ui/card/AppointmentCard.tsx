import './appointmentCard.scss';
import fiMoreVertical from '@/assets/fiMoreVertical.svg';
import testImg from '@/assets/kakaoLogin.png';
import fiMapFin from '@/assets/fiMapFin.svg';
import fiClock from '@/assets/fiClock.svg';
import fiShare from '@/assets/fiShare.svg';

interface AppoinmentCardProps {
  isShared?: boolean;
  isCheckinBtn?: boolean;
}

const AppointmentCard = ({ isShared, isCheckinBtn }: AppoinmentCardProps) => {
  return (
    <div className="appointment_card">
      <div className="top">
        <p className="title">밥 약속</p>
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
        <img className="profile" src={testImg} alt="profleImg" />
        <img className="profile" src={testImg} alt="profleImg" />
        <img className="profile" src={testImg} alt="profleImg" />
      </div>
      <div className="schedule">
        <img src={fiMapFin} alt="dotImg" />
        <p>00 대학교 00관 301호</p>
      </div>
      <div className="schedule">
        <img src={fiClock} alt="dotImg" />
        <p>5월 18일 토요일 오후 10시</p>
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
