import axios, { AxiosError } from 'axios';

import { BASE_URL, errorConfig, TIME_OUT } from './config';

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

export const publicInstance = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export const AIInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 300000,
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
  (error: AxiosError) => errorConfig(error),
);

salonInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => errorConfig(error),
);
