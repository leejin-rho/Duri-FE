import { duriInstance } from '@duri-fe/utils';

import {
  BaseResponse,
  RecommendShopResponse,
  RegularShopResponse,
  UpcomingReservationResponse,
} from '../types';

interface PetInfoResponse extends BaseResponse {
  response: {
    petId: number;
    name: string;
    imageURL?: string;
    breed: string;
    age: number;
    weight: number;
    gender: string;
    lastGrooming?: string;
    neutering?: boolean;
  };
}

export const getRegularShopInfo = async (): Promise<
  RegularShopResponse['response']
> => {
  const response = await duriInstance.get(`/user/home/regular`);
  return response.data.response;
};

export const getRecommendedShopInfo = async (
  lat: number,
  lon: number,
): Promise<RecommendShopResponse['response']> => {
  const response = await duriInstance.get('/user/home/recommend', {
    params: { lat, lon },
  });
  return response.data.response;
};

export const getUpcomingReservation = async (): Promise<
  UpcomingReservationResponse['response']
> => {
  const response = await duriInstance.get('/user/home/schedule');
  return response.data.response;
};

export const getPetInfo = async (): Promise<PetInfoResponse['response']> => {
  const response = await duriInstance.get(`/user/home/pet`);
  return response.data.response;
};
