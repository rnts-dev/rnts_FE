import { fetcher } from '@/shared/service/fetch';
import { useMutation } from '@tanstack/react-query';

const ACCEPT_APPOINTMENT_API_PATH = '/api/v1/appointment/invite';

export const acceptInvite = (refetch: () => void, setModal: (status: 'request' | 'allow' | '') => void) => {
  return useMutation({
    mutationFn: (appointmentId: string | null) => fetcher.get(`${ACCEPT_APPOINTMENT_API_PATH}/${appointmentId}?status=accept`),
    onSuccess: () => {
      refetch();
      setModal('');
    },
  });
};
