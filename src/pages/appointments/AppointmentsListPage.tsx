import { fetcher } from '@/shared/service/fetch';
import { Appointment } from '@/shared/utils/types/appointment.types';
import Header from '@/widgets/appointment/ui/header/Header';
import Timeline from '@/widgets/appointment/ui/timeline/Timeline';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

const AppointmentsListPage = () => {
  const [appointmentList, setAppointmentList] = useState<Appointment[]>();
  const [selected, setSelected] = useState('남은 약속');

  const onChangeSelect = (select: string) => {
    setSelected(select);
  };

  const appointmentSelectConfig: Record<string, string> = {
    '남은 약속': '/api/userappt/myappt/future',
    '지난 약속': '/api/userappt/myappt/past',
  };

  useEffect(() => {
    const getAppointmentList = async () => {
      const res = await fetcher(appointmentSelectConfig[selected]);
      const appointmentList = res.data;
      setAppointmentList(appointmentList);
    };

    getAppointmentList();
  }, [selected]);

  return (
    <div style={{ padding: '0px 25px' }}>
      <Header select={selected} onChangeSelect={onChangeSelect} />
      {appointmentList && <Timeline isFlag appointmentList={appointmentList} />}
      <Outlet />
    </div>
  );
};

export default AppointmentsListPage;
