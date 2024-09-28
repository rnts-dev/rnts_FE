import * as S from './EditCustomAppointment.styled';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay } from '@chakra-ui/react';
import redCaution from '@/assets/redCaution.svg';
import { modalState } from '@/shared/store/atoms/modal';
import { useAtom } from 'jotai';

interface Props {
  onClickConfirmBtn: () => void;
}

const EditCustomAppointment = ({ onClickConfirmBtn }: Props) => {
  const [modal, setModal] = useAtom(modalState);

  return (
    <Modal isOpen={modal === 'appointmentEdit'} onClose={() => setModal('')} size="sm" isCentered>
      <ModalOverlay />
      <ModalContent style={{ margin: '0 41px', borderRadius: '13px' }}>
        <S.Layout>
          <S.CautionIcon src={redCaution} alt="경고 아이콘" />
          <ModalBody>
            <S.CautionTitle>수정 전 확인해 주세요!</S.CautionTitle>
            <S.CautionDescription>
              이 유형에 해당하는 모든 약속이 <br />
              수정되며 복구할 수 없습니다.
            </S.CautionDescription>
          </ModalBody>

          <ModalFooter>
            <S.BtnContainer>
              <S.CancelBtn onClick={() => setModal('')}>취소</S.CancelBtn>
              <S.ConfirmBtn onClick={onClickConfirmBtn}>확인</S.ConfirmBtn>
            </S.BtnContainer>
          </ModalFooter>
        </S.Layout>
      </ModalContent>
    </Modal>
  );
};

export default EditCustomAppointment;
