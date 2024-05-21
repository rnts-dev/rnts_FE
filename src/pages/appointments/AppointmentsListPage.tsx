import Header from '@/widgets/appointment/ui/header/Header';
import Timeline from '@/widgets/appointment/ui/timeline/Timeline';
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
