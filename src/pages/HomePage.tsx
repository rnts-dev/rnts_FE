import { getMyAppointment } from '@/shared/service/appointment/getMyAppointment';
import Timeline from '@/widgets/appointment/ui/timeline/Timeline';
import AppointmentHeader from '@/widgets/home/ui/appointmentHeader/AppointmentHeader';
import HomeContentLayout from '@/widgets/home/ui/contentLayout/HomeContentLayout';
import Header from '@/widgets/home/ui/header/Header';
import MenuBar from '@/widgets/home/ui/menuBar/MenuBar';
import NotAppointment from '@/widgets/home/ui/notAppointment/NotAppointment';
import TimelinePadding from '@/widgets/home/ui/timelinePadding/TimelinePadding';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const HomePage = () => {
  const [appointmentList, setAppointmentList] = useState();

  const {} = useQuery({
    queryKey: ['appointment_list'],
    queryFn: () => {
      getMyAppointment().then((res) => {
        setAppointmentList(res.data);
      });
    },
  });

  return (
    <>
      <Header />
      <AppointmentHeader />
      {appointmentList && (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TimelinePadding>
            <Timeline isHome appointmentList={appointmentList} />
          </TimelinePadding>
          <MenuBar isFixed />
        </div>
      )}
      <HomeContentLayout>
        {!appointmentList && (
          <>
            <NotAppointment />
            <MenuBar isFixed={false} />
          </>
        )}
      </HomeContentLayout>
    </>
  );
};

export default HomePage;
