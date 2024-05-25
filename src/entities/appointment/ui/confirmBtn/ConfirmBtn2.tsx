import ConfirmButton from '@/shared/components/ConfirmButton.tsx';
import './confirmBtm2.scss';

interface ConfirmButton2 {
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmButton2 = (props: ConfirmButton2) => {
  const { onConfirm, onCancel } = props;
  return (
    <div className="bottom-button">
      <ConfirmButton onCancel={onCancel} onConfirm={onConfirm} />
    </div>
  );
};

export default ConfirmButton2;
