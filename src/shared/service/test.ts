import { ApiResponse } from '@/shared/utils/types/api-helper.types';
import { fetcher } from './fetch';

export async function testApi(test: string) {
  return fetcher
    .post<ApiResponse<string>>('api/test/', test)
    .then((res) => alert(`호출 성공 ${res}`))
    .catch((err) => console.error(err));
}
