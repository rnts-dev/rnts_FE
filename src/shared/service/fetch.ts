import { getAccessToken } from '@/shared/utils/axios/axiosUtils';
import axios from 'axios';
// const BASE_URL = import.meta.env.VITE_RNTS_PUBLIC_API;

export const fetcher = axios.create({
  baseURL: 'https://rnts405-api.p-e.kr:8443',
  withCredentials: false,
});

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
