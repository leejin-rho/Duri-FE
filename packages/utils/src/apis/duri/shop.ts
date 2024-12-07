import { duriInstance, publicInstance } from '../axiosConfig';
import { CenterInfoType, ShopInfoResponse } from '../types';

export async function a() {
  try {
    const response = await duriInstance.get(`shop/regular`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function b() {
  try {
    const response = await duriInstance.get(`shop/recommend`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const getNearByShopInfo = async (
  { lat, lon, radius }: CenterInfoType,
  sortby: string,
): Promise<ShopInfoResponse['response']> => {
  const { data } = await publicInstance.get(`/shop/nearby/sort/${sortby}`, {
    params: { lat, lon, radius },
  });
  return data.response;
};
