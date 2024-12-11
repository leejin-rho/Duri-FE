import { duriInstance } from '../axiosConfig';
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

export const getRecommendedShopInfo = async (): Promise<
  RecommendShopResponse['response']
> => {
  const response = await duriInstance.get(`/user/home/recommend`);
  return response.data.response;
};

export const getUpcomingReservation = async (): Promise<
  UpcomingReservationResponse['response']
> => {
  const response = await duriInstance.get('/user/home/schedule');
  return response.data.response;
};

// export const getLastReservation = async () => {
//   const response = await duriInstance.get('/last/reservation');
//   return response.data;
// }; 이게 없고 펫 정보에 lastGroomingDate 데이터를 이용해야됨!!

export const getPetInfo = async (): Promise<PetInfoResponse['response']> => {
  const response = await duriInstance.get(`/user/home/pet`);
  return response.data.response;
};
