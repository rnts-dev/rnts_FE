import './tendencyBtn.scss';

interface PenaltySelectBtnProps {
  id: string;
  title: string;
  illust: any;
  description: string;
  select?: string;
  onClick: () => void;
}

export const TendencyBtn = ({ id, title, illust, description, select, onClick }: PenaltySelectBtnProps) => {
  const isSelected = select === id;

  return (
    <button className={isSelected ? 'penalty_select_btn_container select' : 'penalty_select_btn_container'} onClick={onClick}>
      <div className="penalty_select_btn_character">
        <img src={illust} alt="character_illust" />
      </div>
      <div className={isSelected ? 'penalty_select_btn_description select' : 'penalty_select_btn_description'}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </button>
  );
};
