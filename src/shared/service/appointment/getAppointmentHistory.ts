import { fetcher } from '../fetch';

const getAppointmentHistory = async (type: string) => {
  console.log(type);
  return fetcher(`/api/userappt/myappt/${type}`);
};

export default getAppointmentHistory;
