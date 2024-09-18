import { fetcher } from '@/shared/service/fetch';

interface postCustomAppointment {
  typeName: 'string';
  imageUrl: 'string';
}

const postCustomAppointment = async (body: postCustomAppointment) => {
  return fetcher.post('/api/v1/custom-appointment-type', body);
};

export default postCustomAppointment;
