import { fetcher } from '@/shared/service/fetch';
import Timeline from '@/widgets/appointment/ui/timeline/Timeline';
import AppointmentHeader from '@/widgets/home/ui/appointmentHeader/AppointmentHeader';
import HomeContentLayout from '@/widgets/home/ui/contentLayout/HomeContentLayout';
import Header from '@/widgets/home/ui/header/Header';
import MenuBar from '@/widgets/home/ui/menuBar/MenuBar';
import NotAppointment from '@/widgets/home/ui/notAppointment/NotAppointment';
import TimelinePadding from '@/widgets/home/ui/timelinePadding/TimelinePadding';
import { Modal, ModalBody, ModalContent, ModalOverlay } from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const HomePage = () => {
  const [modal, setModal] = useState(false);
  const [searchParams] = useSearchParams();
  const { data } = useQuery({
    queryKey: ['/api/userappt/myappt'],
    queryFn: () => {
      return fetcher.get('/api/userappt/myappt').then((res) => res.data);
    },
  });

  useEffect(() => {
    if (searchParams.get('id')) {
      setModal(true);
    }
  }, []);

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

      {modal && (
        <Modal isOpen={modal} onClose={() => setModal(false)} size="sm">
          <ModalOverlay />

          <ModalContent>
            <div className="header">
              <p className="title">초대 링크를 생성했어요</p>
              <p className="description">복사해서 초대할 친구에게 보내 주세요!</p>
            </div>

            <ModalBody>
              {`https://rnts-fia8jl95t-jungjihyouns-projects.vercel.app//?id=${searchParams.get('id')}&appointment=true`}
              <button
                onClick={() => {
                  navigator.clipboard.writeText(`https://rnts-fia8jl95t-jungjihyouns-projects.vercel.app//?id=${searchParams.get('id')}&appointment=true`);
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
                }}>
                확인
              </button>
            </div>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default HomePage;
