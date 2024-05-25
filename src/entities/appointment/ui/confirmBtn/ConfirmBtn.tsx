import './confirmBtn.scss';

interface ConfirmBtnProps {
  isComplete: boolean;
  onClick: () => void;
}

const ConfirmBtn = ({ isComplete, onClick }: ConfirmBtnProps) => {
  return (
    <button onClick={onClick} className={isComplete ? 'appointment_create_confirm_btn select' : 'appointment_create_confirm_btn'}>
      다음
    </button>
  );
};

export default ConfirmBtn;
