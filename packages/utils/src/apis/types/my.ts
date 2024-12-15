import { PetInfoType } from './../../../../../apps/duri/src/assets/types/pet';
export interface MyReviewResponseType {
  response: {
    reviewCnt: number;
    reviewList: [
      {
        userId: number;
        userImageURL: string;
        userName: string;
        reviewId: number;
        createdAt: string;
        rating: number;
        shopId: number;
        shopName: string;
        comment: string;
        reviewImageURL: string;
      },
    ];
  };
}

export interface PetListInfo {
  response: {
    petProfileList: PetInfo[];
  };
}

export interface PetInfo {
  id: number;
  name: string;
  image?: string;
  breed: string;
  age: number;
  weight: number;
  gender: string;
  neutering?: boolean;
  lastGrooming?: string | null;
  character: string[];
  diseases: string[];
}

export interface UserInfo {
  response: {
    id: number;
    name: string;
    email: string;
    phone: string;
    profileImg: string | null;
    reservationCount: number;
    noShowCount: number;
    stamp: number;
  };
}

export interface RequestQuotationType {
  response: {
    quotationReqId: number;
    requestId: number;
    createdAt: Date;
    expiredAt: Date;
    shops: {
      shopId: number;
      shopName: string;
    }[];
    isExpired: boolean;
  }[];
}

export interface ReviewDetailResponse {
  response: {
    userId: number;
    userImageURL: string;
    userName: string;
    reviewId: number;
    rating: number;
    createdAt: string;
    shopId: number;
    shopName: string;
    comment: string;
    imgUrl: string;
    petInfo: PetInfoType;
  };
}

export interface HistoryType {
  quotationId: number;
  complete: boolean;
  groomerImageURL: string;
  groomerName: string;
  shopId: number;
  shopName: string;
  petName: string;
  day: string;
  startDate: string;
}

export interface VisitHistoryResponse {
  response: {
    month: string;
    historyList: HistoryType[];
  }[];
}
