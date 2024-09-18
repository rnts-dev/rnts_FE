import { fetcher } from '@/shared/service/fetch';

const DeleteCustomAppointment = async (id: number) => {
  return fetcher.get(`/api/v1/custom-appointment-type/${id}`);
};

export default DeleteCustomAppointment;
