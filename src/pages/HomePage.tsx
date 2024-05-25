import { fetcher } from '@/shared/service/fetch';
import Timeline from '@/widgets/appointment/ui/timeline/Timeline';
import AppointmentHeader from '@/widgets/home/ui/appointmentHeader/AppointmentHeader';
import HomeContentLayout from '@/widgets/home/ui/contentLayout/HomeContentLayout';
import Header from '@/widgets/home/ui/header/Header';
import MenuBar from '@/widgets/home/ui/menuBar/MenuBar';
import NotAppointment from '@/widgets/home/ui/notAppointment/NotAppointment';
import TimelinePadding from '@/widgets/home/ui/timelinePadding/TimelinePadding';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [appointmentList, setAppointmentList] = useState();

  useEffect(() => {
    const getAppointmentList = async () => {
      const res = await fetcher('/api/userappt/myappt');
      const appointmentList = res.data;
      setAppointmentList(appointmentList);
    };

    getAppointmentList();
  }, []);

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
