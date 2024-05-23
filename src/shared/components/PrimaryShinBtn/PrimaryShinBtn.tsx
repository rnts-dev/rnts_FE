import './primaryShinBtn.scss';

interface PrimaryShinBtnProps {
  text: string;
  onClick: () => void;
}

const PrimaryShinBtn = ({ text, onClick }: PrimaryShinBtnProps) => {
  return (
    <button className="primary_shin_btn" onClick={onClick}>
      {text}
    </button>
  );
};

export default PrimaryShinBtn;
