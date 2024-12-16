import { BaseResponse } from './base';

export interface ShopInfoType {
  shopId: number;
  shopName: string;
  shopAddress: string;
  shopLat: number;
  shopLon: number;
  shopPhone: string;
  shopOpenTime: string;
  shopCloseTime: string;
  shopRating: number; // 별점
  reviewCnt: number; // 리뷰 개수
  distance: number; // 거리
  tags: string[]; // 태그 배열
  shopImage: string;
}

export interface ShopInfoResponse extends BaseResponse {
  response: ShopInfoType[];
}

export type CenterInfoType = {
  lat: number;
  lon: number;
  radius: number;
};

export type SearchParamType = {
  search: string;
  lat: number;
  lon: number;
};

export type ShopDetailParamType = {
  shopId: number;
  lat: number;
  lon: number;
};

export interface ShopInfoDetailType {
  shopDetail: {
    shopId: number;
    shopImage: string;
    shopName: string;
    shopAddress: string;
    shopLat: number;
    shopLon: number;
    shopPhone: string;
    shopOpenTime: { hour: number; minute: number };
    shopCloseTime: { hour: number; minute: number };
    shopRating: number;
    reviewCnt: number;
    distance: number;
    tags: string[];
  };
  groomerProfileDetail: {
    id: number;
    name: string;
    gender: string;
    age: number;
    history: number;
    image: string;
    info: string;
    license: string[];
  };
  shopImages: string[];
}

export interface ShopDetailResponse extends BaseResponse {
  response: ShopInfoDetailType;
}

export interface PetDetail {
  petId: number;
  imageURL: string;
  name: string;
  age: number;
  gender: string;
  breed: string;
  weight: number;
  neutering: boolean;
  lastGrooming: string;
}

export interface ShopReviewType {
  userId: number;
  userName: string;
  userImageURL: string;
  reviewId: number;
  rating: number;
  reviewImageURL: string;
  comment: string;
  createdAt: string | null;
  imgUrl: string;
  petInfo: PetDetail;
}

export interface ShopReviewListResponse extends BaseResponse {
  response: ShopReviewType[];
}
