import { ApiResponse } from '@/shared/utils/types/api-helper.types';
import { fetcher } from './fetch';

export async function testApi(test: string) {
  return fetcher.post<ApiResponse<string>>('we', test);
}
