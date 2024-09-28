import { fetcher } from '@/shared/service/fetch';
import { useMutation } from '@tanstack/react-query';

const EDIT_CUSTOM_APPOINTMENT_API = '/api/v1/custom-appointment-type/';

export const editCustomAppointment = (refetch: () => void) => {
  return useMutation({
    mutationFn: (data: { customAppointmentId: number; typeName: string; imageUrl: string }) => {
      const { customAppointmentId, typeName, imageUrl } = data;
      return fetcher.patch(EDIT_CUSTOM_APPOINTMENT_API + customAppointmentId, { typeName, imageUrl });
    },
    onSuccess: () => refetch(),
  });
};
