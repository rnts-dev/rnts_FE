import './appointmentCard.scss';
import kebabIcon from '@/assets/kebab.svg';
import testImg from '@/assets/kakaoLogin.png';
import grayCircleImg from '@/assets/grayCircle.svg';

const AppointmentCard = () => {
  return (
    <div className="card">
      <div className="top">
        <p className="title">밥 약속</p>
        <div className="option">
          <div className="share">
            <p>공유</p>
          </div>
          <img src={kebabIcon} alt="kebab" />
        </div>
      </div>
      <div className="profile_container">
        <img className="profile" src={testImg} alt="profleImg" />
        <img className="profile" src={testImg} alt="profleImg" />
        <img className="profile" src={testImg} alt="profleImg" />
      </div>
      <div className="schedule">
        <img src={grayCircleImg} alt="dotImg" />
        <p>00 대학교 00관 301호</p>
      </div>
      <div className="schedule">
        <img src={grayCircleImg} alt="dotImg" />
        <p>5월 18일 토요일 오후 10시</p>
      </div>
    </div>
  );
};

export default AppointmentCard;
