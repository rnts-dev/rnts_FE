import { fetcher } from '@/shared/service/fetch';
import { CreateAppointment } from '@/shared/utils/types/appointment.types';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const CREATE_APPOINTMENT = '/api/v1/appointment';

export const createAppointment = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: ({ title, appointmentType, customAppointmentTypeId, appointmentTime, location }: CreateAppointment) => {
      return fetcher.post(CREATE_APPOINTMENT, {
        title,
        appointmentType,
        customAppointmentTypeId,
        appointmentTime,
        location: { place: location.place, latitude: location.latitude, longitude: location.longitude },
      });
    },
    onSuccess: (data: { data: { id: number; title: string; appointmentType: string; customAppointmentTypeName: string; place: string; appointmentTime: string } }) => {
      navigate(`/?id=${data.data.id}`);
    },
    onError: () => {},
  });
};
