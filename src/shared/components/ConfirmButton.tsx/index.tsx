import { Button } from '@chakra-ui/react';
import './index.scss';

interface ConfirmButton {
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmButton = (props: ConfirmButton) => {
  const { onConfirm, onCancel } = props;
  return (
    <>
      <Button onClick={onCancel} textColor="#BAC7DA" width={'100%'} colorScheme="#A1B2CA" variant="outline">
        취소
      </Button>
      <Button onClick={onConfirm} borderColor="#A1B2CA" background="#B0F93C" width={'100%'} colorScheme="#A1B2CA" variant="outline">
        확인
      </Button>
    </>
  );
};

export default ConfirmButton;
