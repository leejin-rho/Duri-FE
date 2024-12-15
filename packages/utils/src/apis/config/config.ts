import { AxiosError } from 'axios';

export const BASE_URL = import.meta.env.VITE_SERVER_API + '/api/v1';
export const BASE_URL_AUTH = import.meta.env.VITE_SERVER_API + '/oauth2';

export const TIME_OUT = 3000;

export const errorConfig = (error: AxiosError) => {
  if (error.response) {
    const { status } = error.response || {};
    if (status === 401) {
      window.location.href = '/login';
      // 재발급 필요
    }
  } else {
    console.error('Network or CORS error:', error);
  }
  return Promise.reject(error);
};
