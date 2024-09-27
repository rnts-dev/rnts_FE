import { fetcher } from '@/shared/service/fetch';

export const getCustomAppointment = async () => {
  const { data } = await fetcher.get('/api/v1/custom-appointment-types');

  return data;
};
