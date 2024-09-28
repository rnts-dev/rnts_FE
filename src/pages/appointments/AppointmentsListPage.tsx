import getAppointmentHistory from '@/shared/service/appointment/getAppointmentHistory';
import { Appointment } from '@/shared/utils/types/appointment.types';
import { Header } from '@/widgets/appointment';

import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';

const AppointmentsListPage = () => {
  const [_appointmentList, setAppointmentList] = useState<Appointment[]>();
  const [selected, setSelected] = useState('남은 약속');

  const onChangeSelect = (select: string) => {
    setSelected(select);
  };

  const appointmentSelectConfig: Record<string, string> = {
    '남은 약속': 'future',
    '지난 약속': 'past',
  };

  const {} = useQuery({
    queryKey: ['appointment_history_list', selected],
    queryFn: () => {
      getAppointmentHistory(appointmentSelectConfig[selected]).then((res) => {
        setAppointmentList(res.data);
      });
    },
  });

  return (
    <div style={{ padding: '0px 25px' }}>
      <Header select={selected} onChangeSelect={onChangeSelect} />
      {/* {appointmentList && <Timeline isFlag appointmentList={appointmentList} />} */}
      <Outlet />
    </div>
  );
};

export default AppointmentsListPage;
