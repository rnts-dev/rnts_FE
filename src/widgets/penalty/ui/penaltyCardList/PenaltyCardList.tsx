import PenaltyCard from '@/entities/penalty/ui/penaltyCard/PenaltyCard';
import './penaltyCardList.scss';

interface PenaltyCardListProps {
  type: string;
}

const PenaltyCardList = ({ type }: PenaltyCardListProps) => {
  return (
    <div className="penalty_card_list_container">
      <PenaltyCard type={type} />
      <PenaltyCard type={type} />
      <PenaltyCard type={type} />
    </div>
  );
};

export default PenaltyCardList;
