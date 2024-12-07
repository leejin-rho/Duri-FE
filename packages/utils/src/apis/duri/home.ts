import { duriInstance } from '../axiosConfig';
import { BaseResponse } from '../types';

interface PetInfoResponse extends BaseResponse {
  response: {
    id: number;
    name: string;
    image: null;
    breed: string;
    age: number;
    weight: number;
    gender: string;
    neutering: boolean;
    lastGrooming: Date | null;
  };
}

interface UpcomingReservationResponse extends BaseResponse {
  response: {
    petId: number;
    lastSinceDay: number;
    shopId: number;
    imageURL: string;
    name: string;
    address: string;
    phone: string;
    kakaoURL: string;
    quotationId: number;
    reserveDday: number;
    reservationDate: string;
    price: number;
  };
}

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

export async function getPetInfo(): Promise<PetInfoResponse['response']> {
  const response = await duriInstance.get(`user/pet/petId`);
  return response.data.response;
}
