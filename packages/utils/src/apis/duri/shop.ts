import { publicInstance } from '../axiosConfig';
import {
  CenterInfoType,
  SearchParamType,
  ShopDetailParamType,
  ShopDetailResponse,
  ShopInfoResponse,
  ShopReviewListResponse,
} from '../types';

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

  return data.response;
};

export const getShopDetailInfo = async ({
  shopId,
  lat,
  lon,
}: ShopDetailParamType): Promise<ShopDetailResponse['response']> => {
  const { data } = await publicInstance.get(`/shop/detail`, {
    params: { shopId, lat, lon },
  });

  return data.response;
};

export const getShopReviewList = async ({
  shopId,
}: {
  shopId: number;
}): Promise<ShopReviewListResponse['response']> => {
  const { data } = await publicInstance.get(`/shop/review`, {
    headers: { ShopId: shopId },
  });

  console.log(data.response);

  return data.response;
};
