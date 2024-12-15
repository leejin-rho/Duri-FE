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

export interface ShopDetailType {
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
  response: ShopDetailType;
}
