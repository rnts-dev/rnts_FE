import { Button } from '@chakra-ui/react';
import './confirmButton.scss';

interface ConfirmButton {
  onConfirm: () => void;
  onCancel: () => void;
  confirmTitle?: string;
  cancelTitle?: string;
}

const ConfirmButton = (props: ConfirmButton) => {
  const { onConfirm, onCancel, cancelTitle, confirmTitle } = props;
  return (
    <div className="btn_layout">
      <Button onClick={onCancel} textColor="#BAC7DA" width={'100%'} height={'70px'} colorScheme="#A1B2CA" variant="outline">
        {cancelTitle || '취소'}
      </Button>
      <Button onClick={onConfirm} borderColor="#A1B2CA" background="#B0F93C" width={'100%'} height={'70px'} colorScheme="#A1B2CA" variant="outline">
        {confirmTitle || '확인'}
      </Button>
    </div>
  );
};

export default ConfirmButton;
