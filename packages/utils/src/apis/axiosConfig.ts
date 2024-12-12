import axios from 'axios';

export const BASE_URL = import.meta.env.VITE_SERVER_API + '/api/v1';
export const BASE_URL_AUTH = import.meta.env.VITE_SERVER_API + '/oauth2';

export const duriInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export const salonInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export const adminInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export const authInstance = axios.create({
  baseURL: BASE_URL_AUTH,
  timeout: 10000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export const publicInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
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
