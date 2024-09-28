import { fetcher } from '@/shared/service/fetch';
import { useMutation } from '@tanstack/react-query';

const DECLINE_INVITE_API = '/api/v1/appointment/invite';

export const declineInvite = (setModal: (status: 'request' | 'allow' | '') => void) => {
  return useMutation({
    mutationFn: (appointmentId: string | null) => fetcher.get(`${DECLINE_INVITE_API}/${appointmentId}?status=decline`),
    onSuccess: () => {
      setModal('');
    },
  });
};
