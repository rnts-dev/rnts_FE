import './penaltyCard.scss';
import fiMapFin from '@/assets/fiMapFin.svg';
import fiClock from '@/assets/fiClock.svg';

interface PenaltyCardProps {
  type: string;
}

const PenaltyCard = ({ type }: PenaltyCardProps) => {
  return (
    <div>
      <div className="penalty_card_info">
        <div className="penalty_card_appointment_info">
          <p>
            From.홍길동 · <span>야구 경기 직관</span>
          </p>
          <div className={type === '받은 패널티' ? 'penalty_card_late_label' : 'penalty_card_early_label'}>4분 지각</div>
        </div>
        <p className="penalty_card_title">길거리에서 숏폼 찍기</p>
        {type === '받은 패널티' && (
          <div className="penalty_card_profile_container">
            <img className="penalty_card_profile_img" src="" alt="profile_img" />
            <img className="penalty_card_profile_img" src="" alt="profile_img" />
            <img className="penalty_card_profile_img" src="" alt="profile_img" />
          </div>
        )}
      </div>

      <div className="penalty_card_schedule">
        <div>
          <img src={fiMapFin} alt="fi_map_fin" />
          <p>서울특별시 동작구 동작대로 83</p>
        </div>
        <div>
          <img src={fiClock} alt="fi_clock" />
          <p>5월 18일 오전 10시 30분</p>
        </div>
      </div>
    </div>
  );
};

export default PenaltyCard;
