import './primaryBtn.scss';

interface PrimaryBtnProps {
  text: string;
  onClick: () => void;
}

const PrimaryBtn = ({ text, onClick }: PrimaryBtnProps) => {
  return (
    <button className="primary_btn" onClick={onClick}>
      {text}
    </button>
  );
};

export default PrimaryBtn;
