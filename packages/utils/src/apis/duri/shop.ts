// import axios from 'axios';
// import { HttpResponse } from 'msw';

import { duriInstance, publicInstance } from '../axiosConfig';
import { ShopInfoType } from '../types';

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

export type CenterInfoType = {
  lat: number;
  lon: number;
  radius: number;
};

export const getNearByShopInfo = async (
  {
    lat,
    lon,
    radius,
  }: {
    lat: number;
    lon: number;
    radius: number;
  },
  sortby: string,
): Promise<ShopInfoType[]> => {
  const { data } = await publicInstance.get(`/shop/nearby/sort/${sortby}`, {
    params: { lat, lon, radius },
  });
  return data.response;
};
