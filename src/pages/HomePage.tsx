import AppointmentHeader from '@/widgets/home/ui/appointmentHeader/AppointmentHeader';
import HomeContentLayout from '@/widgets/home/ui/contentLayout/HomeContentLayout';
import Header from '@/widgets/home/ui/header/Header';
import MenuBar from '@/widgets/home/ui/menuBar/MenuBar';
import NotAppointment from '@/widgets/home/ui/notAppointment/NotAppointment';

const HomePage = () => {
  return (
    <>
      <Header />
      <AppointmentHeader />
      <HomeContentLayout>
        <NotAppointment />
        <MenuBar />
      </HomeContentLayout>
    </>
  );
};

export default HomePage;
