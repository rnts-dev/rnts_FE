import './primaryShinBtn.scss';

interface PrimaryShinBtnProps {
  text: string;
  onClick: () => void;
  image?: string;
}

const PrimaryShinBtn = ({ text, onClick, image }: PrimaryShinBtnProps) => {
  return (
    <button className="primary_shin_btn" type="button" onClick={onClick}>
      {image && <img src={image} alt="" />}
      {text}
    </button>
  );
};

export default PrimaryShinBtn;
