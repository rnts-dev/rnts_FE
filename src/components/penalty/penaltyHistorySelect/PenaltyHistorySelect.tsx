import { ListSelectBtn } from '@/components/penalty/listSelectBtn/ListSelectBtn';
import './penaltyHistorySelect.scss';

interface PenaltyHistorySelectProps {
  selected: string;
  setSelected: (state: string) => void;
}

export const PenaltyHistorySelect = ({ selected, setSelected }: PenaltyHistorySelectProps) => {
  return (
    <div className="penalty_history_wrap">
      <ListSelectBtn text="받은 패널티" selected={selected} onClickBtn={setSelected} />
      <ListSelectBtn text="보낸 패널티" selected={selected} onClickBtn={setSelected} />
    </div>
  );
};
