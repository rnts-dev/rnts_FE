import { ApiResponse } from '@/shared/utils/types/api-helper.types';
import { fetcher } from '../fetch';

export async function kakaoLogin(code: { code: string }) {
  return fetcher.post<ApiResponse<string>>('/test/test/api', code);
}
