import { publicInstance } from '../axiosConfig';
import { CenterInfoType, ShopInfoResponse } from '../types';

export const getNearByShopInfo = async (
  { lat, lon, radius }: CenterInfoType,
  sortby: string,
): Promise<ShopInfoResponse['response']> => {
  const { data } = await publicInstance.get(`/shop/nearby/sort/${sortby}`, {
    params: { lat, lon, radius },
  });
  return data.response;
};
