import axios from 'axios';
import { getAccessToken } from '@/shared/utils/axios/axiosUtils';

const baseURL = process.env.RNTS_PUBLIC_API;

export const fetcher = axios.create({
  baseURL,
  withCredentials: true,
});

fetcher.interceptors.request.use((configOrigin) => {
  const config = configOrigin;
  const accessToken = getAccessToken();

  if (config.headers && accessToken !== null) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

fetcher.interceptors.response.use(
  (response) => {
    console.debug(response);
    return response;
  },
  (error) => {
    console.error(error);
  },
);
