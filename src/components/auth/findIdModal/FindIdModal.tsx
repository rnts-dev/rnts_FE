import ModalManager from '@/shared/manager/modal/ModalManager';
import * as S from './findIdModal.styled';
import PrimaryShinBtn from '@/shared/components/PrimaryShinBtn/PrimaryShinBtn';
import { useSetAtom } from 'jotai';
import { modalState } from '@/shared/store/atoms/modal';
import { useNavigate } from 'react-router-dom';

interface Props {
  id: string;
}

const FindIdModal = ({ id }: Props) => {
  const setModalOpen = useSetAtom(modalState);
  const navigate = useNavigate();

  const handleCloseModal = () => {
    setModalOpen(false);
    navigate('/email-login');
  };

  return (
    <ModalManager title="입력한 정보와 일치하는 아이디예요" description="" button={<PrimaryShinBtn text="확인" onClick={handleCloseModal} />}>
      <S.Description>{id}</S.Description>
    </ModalManager>
  );
};

export default FindIdModal;
