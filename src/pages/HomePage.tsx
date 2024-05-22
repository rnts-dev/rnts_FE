import Timeline from '@/widgets/appointment/ui/timeline/Timeline';
import AppointmentHeader from '@/widgets/home/ui/appointmentHeader/AppointmentHeader';
import HomeContentLayout from '@/widgets/home/ui/contentLayout/HomeContentLayout';
import Header from '@/widgets/home/ui/header/Header';
import MenuBar from '@/widgets/home/ui/menuBar/MenuBar';
import NotAppointment from '@/widgets/home/ui/notAppointment/NotAppointment';
import TimelinePadding from '@/widgets/home/ui/timelinePadding/TimelinePadding';
import { useState } from 'react';

const HomePage = () => {
  const [isAppointment, setIsAppopintment] = useState(true);

  return (
    <>
      <button style={{ background: 'pink', marginLeft: '40px', cursor: 'pointer' }} onClick={() => setIsAppopintment((prev) => !prev)}>
        약속 유, 무 테스트 버튼
      </button>
      <Header />
      <AppointmentHeader />
      {isAppointment && (
        <TimelinePadding>
          <Timeline isHome />
        </TimelinePadding>
      )}
      <HomeContentLayout>
        {!isAppointment && <NotAppointment />}
        <MenuBar />
      </HomeContentLayout>
    </>
  );
};

export default HomePage;
