import { getMyAppt } from '@/shared/service/mock/getMyAppointment';
import { getAccessToken } from '@/shared/utils/axios/axiosUtils';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
// const BASE_URL = import.meta.env.VITE_RNTS_PUBLIC_API;

if (import.meta.env.MODE === 'mock') {
  console.log('gㅎㅎ히히히');

  const mock = new MockAdapter(axios, { delayResponse: 200 });

  mock.onGet('/api/userappt/myappt').reply(200, getMyAppt);
}

export const fetcher = axios.create({
  baseURL: 'https://rnts405-api.p-e.kr:8443',
  withCredentials: false,
});

if (import.meta.env.MODE !== 'mock') {
  console.log(',.,,,dfsdf??', import.meta.env.VITE_IS_MOCK);
  fetcher.interceptors.request.use((configOrigin) => {
    const config = configOrigin;
    const accessToken = getAccessToken();

    if (config.headers && accessToken !== null) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  });

  fetcher.interceptors.response.use((response) => {
    console.debug(response);
    return response;
  });
}
