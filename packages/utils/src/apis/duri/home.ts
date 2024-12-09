import { duriInstance } from '../axiosConfig';
import { PetInfoResponse, RecommendShopResponse, RegularShopResponse, UpcomingReservationResponse } from '../types';

export const getRegularShopInfo = async(): Promise<RegularShopResponse['response']> => {
  const response = await duriInstance.get(`home/regular/1`);
    return response.data.response;
}

export const getRecommendedShopInfo = async(): Promise<RecommendShopResponse['response']> => {
    const response = await duriInstance.get(`home/recommend/1`);
    return response.data.response;
}

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
  const response = await duriInstance.get(`user/home/pet/1`);
  console.log(response);
  return response.data.response;
};