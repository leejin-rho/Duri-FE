import { duriInstance } from '../axiosConfig';

export const getUpcomingReservation = async () => {
  const response = await duriInstance.get('/reservation');
  return response.data;
};

export const getLastReservation = async () => {
  const response = await duriInstance.get('/last/reservation');
  return response.data;
};