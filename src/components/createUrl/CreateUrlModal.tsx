import ModalManager from '@/shared/manager/modal/ModalManager';

export const CreateUrlModal = () => {
  return (
    <ModalManager title={'초대 링크를 생성했어요'} description={'복사해서 초대할 친구에게 보내 주세요!'} button={<button>dfd</button>}>
      <p></p>
    </ModalManager>
  );
};

// ocalStorage.setItem('id', id);
//     appointment && localStorage.setItem('appointment', appointment);
