import './penaltySelectBtn.scss';

interface PenaltySelectBtnProps {
  id: string;
  title: string;
  description: string;
  select?: string;
  illust: any;
  onClick: () => void;
}

export const PenaltySelectBtn = ({ id, title, description, illust, select, onClick }: PenaltySelectBtnProps) => {
  const isSelected = select === id;

  return (
    <button className={isSelected ? 'penalty_select_btn_container select' : 'penalty_select_btn_container'} onClick={onClick}>
      <div className="penalty_select_btn_character">
        <img src={illust} alt="illust" />
      </div>
      <div className={isSelected ? 'penalty_select_btn_description select' : 'penalty_select_btn_description'}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </button>
  );
};
