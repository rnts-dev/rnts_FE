import { fetcher } from '@/shared/service/fetch';

interface postCustomAppointment {
  typeName: string;
  imageUrl: string;
}

export const postCustomAppointment = async (body: postCustomAppointment) => {
  const { data } = await fetcher.post('/api/v1/custom-appointment-type', body);

  return data;
};
