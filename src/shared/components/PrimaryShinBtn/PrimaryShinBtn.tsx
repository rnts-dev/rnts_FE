import './primaryShinBtn.scss';

interface PrimaryShinBtnProps {
  text: string;
  onClick: () => void;
  image?: string;
}

const PrimaryShinBtn = ({ text, onClick, image }: PrimaryShinBtnProps) => {
  return (
    <button className="primary_shin_btn" onClick={onClick}>
      <img src={image} alt="" />
      {text}
    </button>
  );
};

export default PrimaryShinBtn;
