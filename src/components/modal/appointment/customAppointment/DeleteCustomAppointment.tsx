import * as S from './DeleteCustomAppointment.styled';

import redCaution from '@/assets/redCaution.svg';
import { useAtom } from 'jotai';
import { modalState } from '@/shared/store/atoms/modal';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay } from '@chakra-ui/react';
import { deleteCustomAppointment } from '@/mutation/appointment/deleteCustomAppointment';

interface Props {
  appointmentId: number;
  refetchAppointmentType: () => void;
}

const DeleteCustomAppointmentModal = ({ appointmentId, refetchAppointmentType }: Props) => {
  const [modal, setModal] = useAtom(modalState);
  const { mutate: deleteCustomAppointmentMutate } = deleteCustomAppointment(refetchAppointmentType);

  const onClickDeleteBtn = (appointmentId: number) => {
    deleteCustomAppointmentMutate(appointmentId);
    setModal('');
  };

  return (
    <Modal isOpen={modal === 'appointmentDelete'} onClose={() => setModal('')} size="sm" isCentered>
      <ModalOverlay />
      <ModalContent style={{ margin: '0 41px', borderRadius: '13px' }}>
        <S.Layout>
          <S.CautionIcon src={redCaution} alt="경고 아이콘" />
          <ModalBody>
            <S.CautionTitle>정말 삭제하시겠어요?</S.CautionTitle>
            <S.CautionDescription>
              해당 유형의 모든 약속이 <br />
              '기타' 유형으로 변경됩니다.
            </S.CautionDescription>
          </ModalBody>

          <ModalFooter>
            <S.BtnContainer>
              <S.CancelBtn onClick={() => setModal('')}>취소</S.CancelBtn>
              <S.DeleteBtn onClick={() => onClickDeleteBtn(appointmentId)}>삭제</S.DeleteBtn>
            </S.BtnContainer>
          </ModalFooter>
        </S.Layout>
      </ModalContent>
    </Modal>
  );
};

export default DeleteCustomAppointmentModal;
