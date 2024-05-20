import './listSelectBtn.scss';

interface ListSelectBtnProps {
  text: string;
  selected: string;
  onClickBtn: (select: string) => void;
}

const ListSelectBtn = ({ text, selected, onClickBtn }: ListSelectBtnProps) => {
  const isSelected = selected === text;

  return (
    <button className={isSelected ? 'selectBtn select' : 'selectBtn'} onClick={() => onClickBtn(text)}>
      <p>{text}</p>
    </button>
  );
};

export default ListSelectBtn;
