import { fetcher } from '@/shared/service/fetch';
import { ApiResponse } from '@/shared/utils/types/api-helper.types';

export async function getCheckin([url, id]: [string, number]) {
  return fetcher
    .post<ApiResponse<never>>(url, {
      id: id,
    })
    .then((res) => res.data);
}
