import Header from '@/widgets/appointment/header/ui/Header';
import Timeline from '@/widgets/appointment/timeline/ui/Timeline';
import { Outlet } from 'react-router-dom';

const AppointmentsListPage = () => {
  return (
    <div style={{ padding: '0px 25px' }}>
      <Header />
      <Timeline />
      <Outlet />
    </div>
  );
};

export default AppointmentsListPage;
