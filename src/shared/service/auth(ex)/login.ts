import { fetcher } from '@/shared/service/fetch';
import { ApiResponse } from '@/shared/utils/types/api-helper.types';

/**
 * @example
 * service 함수 예시 입니다
 *
 * @param
 * 배열 형태로 들어갑니다
 * 해당 배열은 react-query의 queryKey가 됩니다.
 */
export async function getLogin([url, name]: [string, string]) {
  // never <- types에 정의한 api response type 넣기
  return fetcher.get<ApiResponse<never>>(url, {
    params: {
      name: name,
    },
  });
}
