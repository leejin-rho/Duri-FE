import axios from 'axios';

export const BASE_URL = import.meta.env.VITE_SERVER_API + '/api/v1';
export const BASE_URL_AUTH = import.meta.env.VITE_SERVER_API + '/oauth2';

const TIME_OUT = 3000;
const DURI_TOKEN_EMPTY = `Required request header 'authorization_user' for method parameter type String is not present`;
const SALON_TOKEN_EMPTY = `Required request header 'authorization_shop' for method parameter type String is not present`;

export const duriInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export const salonInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export const adminInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export const authInstance = axios.create({
  baseURL: BASE_URL_AUTH,
  timeout: TIME_OUT,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export const publicInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

duriInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('authorization_user');
  config.headers['authorization_user'] = token ? `Bearer ${token}` : '';
  return config;
});

salonInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('authorization_shop');
  config.headers['authorization_shop'] = token ? `Bearer ${token}` : '';
  return config;
});

duriInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (
        error.response.status === 401 ||
        error.response.message === DURI_TOKEN_EMPTY
      ) {
        window.location.href = '/login';
      }
    } else {
      console.error('Network or CORS error:', error);
    }
    return Promise.reject(error);
  },
);

salonInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (
        error.response.status === 401 ||
        error.response.message === SALON_TOKEN_EMPTY
      ) {
        window.location.href = '/login';
      }
    } else {
      console.error('Network or CORS error:', error);
    }
    return Promise.reject(error);
  },
);
