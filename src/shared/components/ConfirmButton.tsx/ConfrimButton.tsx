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
    <>
      <Button onClick={onCancel} textColor="#BAC7DA" width={'100%'} colorScheme="#A1B2CA" variant="outline">
        {cancelTitle || '취소'}
      </Button>
      <Button onClick={onConfirm} borderColor="#A1B2CA" background="#B0F93C" width={'100%'} colorScheme="#A1B2CA" variant="outline">
        {confirmTitle || '확인'}
      </Button>
    </>
  );
};

export default ConfirmButton;
