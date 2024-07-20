import './penaltyCard.scss';
import fiMapFin from '@/assets/fiMapFin.svg';
import fiClock from '@/assets/fiClock.svg';

interface PenaltyCardProps {
  type: string;
  from: string;
  appointmentTitle: string;
  penaltyTitle: string;
  profileImgList: string[];
  appointmentPlace: string;
  appointmentTime: string;
  labelTime: string;
}

export const PenaltyCard = ({ type, from, appointmentTitle, penaltyTitle, profileImgList, appointmentPlace, appointmentTime, labelTime }: PenaltyCardProps) => {
  const profileImgSlice = profileImgList.slice(0, 6);
  const otherProfileImgLength = profileImgList.slice(6, -1).length;

  return (
    <div>
      <div className="penalty_card_info">
        <div className="penalty_card_appointment_info">
          <p>
            From.{from} · <span>{appointmentTitle}</span>
          </p>
          <div className={type === '받은 패널티' ? 'penalty_card_late_label' : 'penalty_card_early_label'}>{labelTime}분 지각</div>
        </div>
        <p className="penalty_card_title">{penaltyTitle}</p>
        {type === '받은 패널티' && (
          <div className="penalty_card_profile_container">
            {profileImgSlice.map((profileImg) => {
              return <img className="penalty_card_profile_img" src={profileImg} alt="profile_img" />;
            })}
            {otherProfileImgLength > 0 && <div className="penalty_card_other_profile_length">{`+${otherProfileImgLength}`}</div>}
          </div>
        )}
      </div>

      <div className="penalty_card_schedule">
        <div>
          <img src={fiMapFin} alt="fi_map_fin" />
          <p>{appointmentPlace}</p>
        </div>
        <div>
          <img src={fiClock} alt="fi_clock" />
          <p>{appointmentTime}</p>
        </div>
      </div>
    </div>
  );
};
