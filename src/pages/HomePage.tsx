import InviteModal from '@/components/modal/inviteModal/InviteModal';
import ShareModal from '@/components/modal/shareModal/ShareModal';
import { fetcher } from '@/shared/service/fetch';
import { getAccessToken } from '@/shared/utils/axios/axiosUtils';
import { MyAppointment } from '@/shared/utils/types/appointment.types';
import { Timeline } from '@/widgets/appointment';
import { AppointmentHeader, Header, HomeContentLayout, MenuBar, NotAppointment, TimelinePadding } from '@/widgets/home';
import { useMutation, useQuery } from '@tanstack/react-query';
import 'moment/locale/ko';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

type Modal = 'request' | 'allow' | '';

const HomePage = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState<Modal>('');
  const [searchParams] = useSearchParams();
  const { data, refetch } = useQuery<MyAppointment[]>({
    queryKey: ['/api/v1/appointments'],
    queryFn: () => fetcher.get('/api/v1/appointments').then((res) => res.data),
    refetchOnMount: true,
    refetchOnReconnect: true,
  });

  const {
    mutate,
    data: appointmentData,
    isSuccess,
  } = useMutation({
    mutationFn: (id: string) => {
      return fetcher.post(`/api/appointment/searchSingleAppointment/${id}`).then((res) => res.data);
    },
  });

  useEffect(() => {
    const accessToken = getAccessToken();
    if (!accessToken) {
      navigate(`/login?id=${searchParams.get('id')}&appointment=${searchParams.get('appointment')}`);
    }

    if (searchParams.get('id') === 'null' && searchParams.get('appointment') === 'null') {
      return;
    }

    if (searchParams.get('id') && searchParams.get('appointment') !== 'allow') {
      setModal('request');
    }
    if (searchParams.get('id') && searchParams.get('appointment') === 'allow') {
      setModal('allow');
      mutate(searchParams.get('id') as string);
    }
  }, []);

  return (
    <>
      <Header />
      <AppointmentHeader />
      {data?.length && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TimelinePadding>
            <Timeline isHome appointmentList={data} />
          </TimelinePadding>
          <MenuBar isFixed />
        </div>
      )}
      <HomeContentLayout>
        {!data?.length && (
          <>
            <NotAppointment />
            <MenuBar isFixed={false} />
          </>
        )}
      </HomeContentLayout>

      {/* 모달 컴포넌트 */}
      <ShareModal modalState={{ modal, setModal }} />
      <InviteModal modalState={{ modal, setModal }} isSuccess={isSuccess} appointmentData={appointmentData} appointmentId={searchParams.get('id')} refetch={refetch} />
    </>
  );
};

export default HomePage;
