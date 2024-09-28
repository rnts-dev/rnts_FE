import { fetcher } from '@/shared/service/fetch';
import { useMutation } from '@tanstack/react-query';

const DELETE_CUSTOM_APPOINTMENT_API = '/api/v1/custom-appointment-type/';

export const deleteCustomAppointment = (refetch: () => void) => {
  return useMutation({
    mutationFn: (customAppointmentId: number) => fetcher.delete(DELETE_CUSTOM_APPOINTMENT_API + customAppointmentId),
    onSuccess: () => refetch(),
  });
};
