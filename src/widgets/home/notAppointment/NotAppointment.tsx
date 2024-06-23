import turtleSleep from '@/assets/turtle_sleep.png';
import { AddAppointmentBtn } from '@/components/appointment';
import { globalDialogState } from '@/shared/store/atoms/globalDialog';
import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay } from '@chakra-ui/react';
import { useSetAtom } from 'jotai';
import './notAppointment.scss';

const TestConfirmComponent = () => {
  const setGlobalDialog = useSetAtom(globalDialogState);

  return (
    <Modal isOpen onClose={() => {}} size="sm">
      <ModalOverlay />

      <ModalContent>
        <div className="header">
          <p className="title">테스트 컨펌 입니다</p>
          <p className="description">설명 테스트 입니다</p>
        </div>

        <ModalBody>바디 부분</ModalBody>

        <ModalFooter
          onClick={() => {
            setGlobalDialog([]);
          }}>
          버튼
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export const NotAppointment = () => {
  const setGlobalDialog = useSetAtom(globalDialogState);

  return (
    <div className="not_appointment_content">
      <div className="character">
        <img src={turtleSleep} alt="turtle_sleep" />
      </div>
      <p className="description">등록된 약속이 없어요</p>
      <Button onClick={() => setGlobalDialog((prev) => [...prev, <TestConfirmComponent />])}>(테스트) 모달 오픈 버튼</Button>
      <AddAppointmentBtn />
    </div>
  );
};
