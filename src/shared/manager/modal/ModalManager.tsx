import BottomButton from '@/entities/checkin/ui/button/BottomButton';
import { checkinStep } from '@/shared/store/atoms/checkin';
import { modalState } from '@/shared/store/atoms/modal';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay } from '@chakra-ui/react';
import { useAtom, useAtomValue } from 'jotai';
import { ReactNode, useEffect } from 'react';
import './modal.scss';

const ModalManager = ({ title, description, children }: { title: string; description: string; children: ReactNode }) => {
  const [modalOpen, setModalOpen] = useAtom(modalState);
  const step = useAtomValue(checkinStep);

  const handleCloseModal = () => setModalOpen(false);

  useEffect(() => {
    if (step === 'completed') {
      handleCloseModal();
    }
  }, [step]);

  return (
    <Modal isOpen={modalOpen} onClose={handleCloseModal} size="sm">
      <ModalOverlay />

      <ModalContent>
        <div className="header">
          <p className="title">{title}</p>
          <p className="description">{description}</p>
        </div>

        <ModalBody>{children}</ModalBody>

        <ModalFooter>
          <BottomButton />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalManager;
