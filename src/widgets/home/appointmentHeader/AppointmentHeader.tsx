import { ViewAllAppointment } from '@/components/appointment';
import * as S from './appointmentHeader.styled';

export const AppointmentHeader = () => {
  return (
    <S.AppointmentHeader>
      <p>나의 약속</p>
      <ViewAllAppointment />
    </S.AppointmentHeader>
  );
};
