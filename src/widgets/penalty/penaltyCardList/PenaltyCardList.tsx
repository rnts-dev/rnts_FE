import { PenaltyCard } from '@/components/penalty';
import './penaltyCardList.scss';
import { Penalty } from '@/shared/utils/types/penalty.types';

interface PenaltyCardListProps {
  type: string;
  penaltyList: Penalty[];
}

export const PenaltyCardList = ({ type, penaltyList }: PenaltyCardListProps) => {
  return (
    <div className="penalty_card_list_container">
      {penaltyList.map((item: Penalty) => {
        return (
          <PenaltyCard
            type={type}
            from={item.from}
            appointmentTitle={item.appointmentTitle}
            penaltyTitle={item.penaltyTitle}
            profileImgList={item.profileImgList}
            appointmentPlace={item.appointmentPlace}
            appointmentTime={item.appointmentTime}
            labelTime={item.labelTime}
          />
        );
      })}
    </div>
  );
};
