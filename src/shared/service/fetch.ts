import { getCustomAppointment } from '@/shared/service/mock/getCustomAppointment';
import { postCustomAppointment } from '@/shared/service/mock/postCustomAppointment';
import { getAccessToken } from '@/shared/utils/axios/axiosUtils';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
// const BASE_URL = import.meta.env.VITE_RNTS_PUBLIC_API;

if (import.meta.env.MODE === 'mock') {
  const mock = new MockAdapter(axios, { delayResponse: 200 });

  mock.onGet('/api/v1/custom-appointment-types').reply(200, getCustomAppointment);
  mock.onPost('/api/v1/custom-appointment-type').reply(200, postCustomAppointment);
}

export const fetcher = axios.create({
  baseURL: 'https://rnts405-api.p-e.kr:8443',
  withCredentials: false,
});

if (import.meta.env.MODE !== 'mock') {
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
