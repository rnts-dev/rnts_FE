import './penaltySelectBtn.scss';

interface PenaltySelectBtnProps {
  id: string;
  title: string;
  description: string;
  select?: string;
  onClick: () => void;
}

const PenaltySelectBtn = ({ id, title, description, select, onClick }: PenaltySelectBtnProps) => {
  const isSelected = select === id;

  return (
    <button className={isSelected ? 'penalty_select_btn_container select' : 'penalty_select_btn_container'} onClick={onClick}>
      <div className="penalty_select_btn_character">캐릭터 일러스트</div>
      <div className={isSelected ? 'penalty_select_btn_description select' : 'penalty_select_btn_description'}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </button>
  );
};

export default PenaltySelectBtn;
