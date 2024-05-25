import { fetcher } from '../fetch';

export async function getMyAppointment() {
  return fetcher.get('/api/userappt/myappt');
}
