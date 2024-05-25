import ConfirmButton from '@/shared/components/ConfirmButton.tsx';
import { fetcher } from '@/shared/service/fetch';
import { getAccessToken } from '@/shared/utils/axios/axiosUtils';
import Timeline from '@/widgets/appointment/ui/timeline/Timeline';
import AppointmentHeader from '@/widgets/home/ui/appointmentHeader/AppointmentHeader';
import HomeContentLayout from '@/widgets/home/ui/contentLayout/HomeContentLayout';
import Header from '@/widgets/home/ui/header/Header';
import MenuBar from '@/widgets/home/ui/menuBar/MenuBar';
import NotAppointment from '@/widgets/home/ui/notAppointment/NotAppointment';
import TimelinePadding from '@/widgets/home/ui/timelinePadding/TimelinePadding';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

type Modal = 'request' | 'allow' | '';

const HomePage = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState<Modal>('');
  const [searchParams] = useSearchParams();
  const { data, refetch } = useQuery({
    queryKey: ['/api/userappt/myappt'],
    queryFn: () => {
      return fetcher.get('/api/userappt/myappt').then((res) => res.data);
    },
    refetchOnMount: true,
    refetchOnReconnect: true,
  });

  useEffect(() => {
    const accessToken = getAccessToken();
    if (!accessToken) {
      navigate(`/login?id=${searchParams.get('id')}&appointment=${searchParams.get('appointment')}`);
    }

    if (searchParams.get('id') && searchParams.get('appointment') !== 'allow') {
      setModal('request');
    }
    if (searchParams.get('id') && searchParams.get('appointment') === 'allow') {
      setModal('allow');
    }
  }, []);

  const CREAT_URL = `https://rnts-fia8jl95t-jungjihyouns-projects.vercel.app/?id=${searchParams.get('id')}&appointment=allow`;

  console.log(data);
  return (
    <>
      <Header />
      <AppointmentHeader />
      {data && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TimelinePadding>
            <Timeline isHome appointmentList={data} />
          </TimelinePadding>
          <MenuBar isFixed />
        </div>
      )}
      <HomeContentLayout>
        {!data && (
          <>
            <NotAppointment />
            <MenuBar isFixed={false} />
          </>
        )}
      </HomeContentLayout>

      {
        <Modal isOpen={modal === 'request'} onClose={() => setModal('')} size="sm">
          <ModalOverlay />

          <ModalContent>
            <div className="header">
              <p className="title">초대 링크를 생성했어요</p>
              <p className="description">복사해서 초대할 친구에게 보내 주세요!</p>
            </div>

            <ModalBody>
              {CREAT_URL}
              <button
                onClick={() => {
                  navigator.clipboard.writeText(CREAT_URL);
                }}>
                handleCopyClipBoard
              </button>
            </ModalBody>

            <div>
              <button
                style={{
                  width: '100%',
                  height: '36px',
                  paddingLeft: 36,
                  paddingRight: 36,
                  paddingTop: 12,
                  paddingBottom: 12,
                  background: '#B0F93C',
                  borderRadius: 8,
                  overflow: 'hidden',
                  border: '1px #A1B2CA solid',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 26,
                  display: 'inline-flex',
                  textAlign: 'center',
                  color: 'black',
                  fontSize: 14,
                  fontFamily: 'Pretendard',
                  fontWeight: '500',
                  lineHeight: 20,
                  wordWrap: 'break-word',
                }}
                onClick={() => setModal('')}>
                확인
              </button>
            </div>
          </ModalContent>
        </Modal>
      }

      <Modal isOpen={modal === 'allow'} onClose={() => setModal('')} size="sm">
        <ModalOverlay />

        <ModalContent>
          <div className="header">
            <p className="title">초대받은 약속</p>
            <p className="description">00식당 밥 약속!</p>
          </div>

          <ModalBody>
            <p>checkin</p>
          </ModalBody>

          <ModalFooter>
            <ConfirmButton
              confirmTitle="수락"
              cancelTitle="거절"
              onConfirm={async () => {
                await fetcher.post(`api/userappt/${searchParams.get('id')}`).then((res) => res.data);
                await refetch();
                await setModal('');
              }}
              onCancel={() => {
                setModal('');
              }}
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default HomePage;
