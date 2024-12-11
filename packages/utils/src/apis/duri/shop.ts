import { publicInstance } from '../axiosConfig';
import { CenterInfoType, SearchParamType, ShopInfoResponse } from '../types';

export const getNearByShopInfo = async (
  { lat, lon, radius }: CenterInfoType,
  sortby: string,
): Promise<ShopInfoResponse['response']> => {
  const { data } = await publicInstance.get(`/shop/nearby/sort/${sortby}`, {
    params: { lat, lon, radius },
  });
  return data.response;
};

export const getSearchShopResult = async ({
  search,
  lat,
  lon,
}: SearchParamType): Promise<ShopInfoResponse['response']> => {
  const { data } = await publicInstance.get(`/shop/search`, {
    params: { search, lat, lon },
  });
  console.log(data.response);
  return data.response;
};
