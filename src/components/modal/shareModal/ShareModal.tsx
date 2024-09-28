import * as S from './ShareModal.styled';
import { Dispatch, SetStateAction } from 'react';
import { Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react';
import ClipBoardBox from '@/shared/components/ClipBoardBox/ClipBoardBox';
import CopyBox from '@/shared/components/CopyBox/CopyBox';
import PrimaryShinBtn from '@/shared/components/PrimaryShinBtn/PrimaryShinBtn';
import { useSearchParams } from 'react-router-dom';

interface Props {
  modalState: {
    modal: string;
    setModal: Dispatch<SetStateAction<'request' | 'allow' | ''>>;
  };
}

const ShareModal = ({ modalState }: Props) => {
  const [searchParams] = useSearchParams();

  const CREAT_URL = `https://rnts-fe.vercel.app/?id=${searchParams.get('id')}&appointment=allow`;

  return (
    <Modal isOpen={modalState.modal === 'request'} onClose={() => modalState.setModal('')} size="sm">
      <ModalOverlay />

      <ModalContent>
        <S.Header>
          <p className="title">초대 링크를 생성했어요</p>
          <p className="description">복사해서 초대할 친구에게 보내 주세요!</p>
        </S.Header>

        <S.Body>
          <ModalBody>
            <S.LinkCopy>
              <ClipBoardBox text={CREAT_URL} />
              <CopyBox
                text="복사"
                onClick={() => {
                  navigator.clipboard.writeText(CREAT_URL);
                }}
              />
            </S.LinkCopy>
          </ModalBody>

          <S.BtnLayout>
            <PrimaryShinBtn text="확인" onClick={() => modalState.setModal('')} />
          </S.BtnLayout>
        </S.Body>
      </ModalContent>
    </Modal>
  );
};

export default ShareModal;
