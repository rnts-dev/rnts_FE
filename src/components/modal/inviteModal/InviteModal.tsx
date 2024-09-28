import fiClock from '@/assets/fiClock.svg';
import fiMapFin from '@/assets/fiMapFin.svg';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay } from '@chakra-ui/react';
import { SetStateAction } from 'jotai';
import moment from 'moment';
import 'moment/locale/ko';
import { Dispatch } from 'react';
import * as S from './InviteModal.styled';
import { acceptInvite } from '@/mutation/appointment/acceptInvite';
import { declineInvite } from '@/mutation/appointment/declineInvite';
import ConfirmButton from '@/shared/components/ConfirmButton/ConfrimButton';

interface Props {
  modalState: {
    modal: string;
    setModal: Dispatch<SetStateAction<'request' | 'allow' | ''>>;
  };
  isSuccess: boolean;
  appointmentData: any;
  appointmentId: string | null;
  refetch: () => void;
}

const InviteModal = ({ modalState, isSuccess, appointmentData, appointmentId, refetch }: Props) => {
  const { mutate: acceptInviteMutate } = acceptInvite(refetch, modalState.setModal);
  const { mutate: declineInviteMutate } = declineInvite(modalState.setModal);

  return (
    <Modal isOpen={modalState.modal === 'allow'} onClose={() => modalState.setModal('')} size="sm">
      <ModalOverlay />
      <ModalContent>
        <S.Layout>
          <S.Header>초대받은 약속</S.Header>
          <S.Body>
            <p>From. 홍길동</p>
            <p className="appointment_id">00식당 밥 약속</p>
            <div className="place">
              <img src={fiMapFin} alt="map_icon" />
              <p>서울특별시 동작구 동작대로 83</p>
            </div>
            <div className="time">
              <img src={fiClock} alt="clock_icon" />
              <p>5월 26일 오전 10시 30분</p>
            </div>
          </S.Body>

          <ModalBody>
            {isSuccess && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', marginRight: '10px', gap: '4px' }}>
                  <img src={fiMapFin} alt="" />
                  <p>{appointmentData?.place}</p>
                </div>
                <div style={{ display: 'flex', marginRight: '10px', gap: '4px' }}>
                  <img src={fiClock} alt="s" />
                  <p>{moment(appointmentData?.time.filter((_: any, index: number) => index < 4)).format('LLL')}</p>
                </div>
              </div>
            )}
          </ModalBody>

          <ModalFooter>
            <ConfirmButton confirmTitle="수락" cancelTitle="거절" onConfirm={() => acceptInviteMutate(appointmentId)} onCancel={() => declineInviteMutate(appointmentId)} />
          </ModalFooter>
        </S.Layout>
      </ModalContent>
    </Modal>
  );
};

export default InviteModal;
