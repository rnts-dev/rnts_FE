import './listSelectBtn.scss';

interface ListSelectBtnProps {
  text: string;
  selected: string;
  onClickBtn: (select: string) => void;
}

export const ListSelectBtn = ({ text, selected, onClickBtn }: ListSelectBtnProps) => {
  const isSelected = selected === text;

  return (
    <button className={isSelected ? 'selectBtn select' : 'selectBtn'} onClick={() => onClickBtn(text)}>
      <p>{text}</p>
    </button>
  );
};
