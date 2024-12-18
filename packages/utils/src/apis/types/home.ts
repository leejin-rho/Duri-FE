import { BaseResponse } from './base';
import { GroomerInfoType } from './my';

export interface ClosetGroomingResponse extends BaseResponse {
  response: {
    petId: number;
    petName: string;
    breed: string;
    gender: string;
    age: number;
    weight: number;
    memo: string;
    userId: number;
    userPhone: string;
    quotationId: number;
    startTime: string;
    complete: boolean;
    isNow: boolean | null;
  };
}

export interface DailyScheduleResponse extends BaseResponse {
  response: {
    date: string;
    startTime: string;
    petId: number;
    petName: string;
    breed: string;
    gender: string;
    weight: number;
    groomerName: string;
  };
}

export interface HomeQuotationRequestResponse extends BaseResponse {
  response: {
    requestId: number;
    petId: number;
    imageURL: string;
    name: string;
    breed: string;
    gender: string;
    age: number;
    weight: number;
    neutering: boolean;
    quotationReqId: number;
    memo: string;
  };
}

export interface PetInfoResponse extends BaseResponse {
  response: {
    petId: number;
    name: string;
    imageURL: string | null;
    breed: string;
    age: number;
    weight: number;
    gender: string;
    lastGrooming: string | null;
  };
}

export interface UpcomingReservationResponse extends BaseResponse {
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
    price: string;
  };
}

export interface RegularShopResponse extends BaseResponse {
  response: {
    petId: number;
    petName: string;
    homeShopList: {
      shopId: number;
      imageURL: string;
      shopName: string;
      rating: number;
      reviewCnt: number;
      visitCnt: number;
    }[];
  };
}

export interface RecommendShopResponse extends BaseResponse {
  response: {
    petId: number;
    recommendFeature: string;
    shopId: number;
    imageURL: string;
    shopName: string;
    address: string;
    phone: string;
    shopTag1: string;
    shopTag2: string;
    score: number;
  }[];
}

export interface HomeShopInfoResponse extends BaseResponse {
  response: {
    id: number;
    name: string;
    address: string;
    imageURL: string;
    phone: string;
  };
}

//미용사 GroomersList 프로필 조회 응답
export interface GroomersListProfileResponse extends BaseResponse {
  response: GroomerInfoType[];
}