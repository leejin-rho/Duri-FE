import { publicInstance } from '@duri-fe/utils';

import {
  CenterInfoType,
  SearchParamType,
  ShopDetailParamType,
  ShopDetailResponse,
  ShopInfoResponse,
  ShopReviewListResponse,
} from '../types';
import { ReviewShopAndPetResponse } from '../types/review';

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
  console.log('샵', data.response);

  return data.response;
};

export const getShopReviewList = async ({
  shopId,
}: {
  shopId: number;
}): Promise<ShopReviewListResponse['response']> => {
  const { data } = await publicInstance.get(`/review/shop`, {
    params: { shopId: shopId },
  });
  return data.response;
};

export const getReviewShopAndPetInfo = async (
  quotationId: number,
): Promise<ReviewShopAndPetResponse['response']> => {
  const { data } = await publicInstance.get(`/review-new`, {
    params: { quotationId },
  });

  return data.response;
};
