import { duriInstance } from '../axiosConfig';

export async function getRegularShopInfo() {
  try {
    const response = await duriInstance.get(`shop/regular`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getRecommendedShopInfo() {
  try {
    const response = await duriInstance.get(`shop/recommend`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const getUpcomingReservation = async () => {
  const response = await duriInstance.get('/reservation');
  return response.data;
};

export const getLastReservation = async () => {
  const response = await duriInstance.get('/last/reservation');
  return response.data;
};
