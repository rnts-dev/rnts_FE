import './confirmBtn.scss';

interface ConfirmBtnProps {
  isComplete?: boolean;
  title?: string;
  onClick: () => void;
}

const ConfirmBtn = ({ isComplete, title, onClick }: ConfirmBtnProps) => {
  return (
    <button onClick={onClick} className={isComplete ? 'appointment_create_confirm_btn select' : 'appointment_create_confirm_btn'}>
      {title || '다음'}
    </button>
  );
};

export default ConfirmBtn;
