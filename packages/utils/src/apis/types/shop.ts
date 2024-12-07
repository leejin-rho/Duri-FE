import { BaseResponse } from './base';

export interface ShopTime {
  hour: number;
  minute: number;
  second: number;
  nano: number;
}

export interface ShopInfoType {
  shopId: number;
  shopName: string;
  shopAddress: string;
  shopLat: number;
  shopLon: number;
  shopPhone: string;
  shopOpenTime: ShopTime;
  shopCloseTime: ShopTime;
  shopRating: number; // 별점
  distance: number; // 거리
  tags: string[]; // 태그 배열
}

export interface ShopInfoResponse extends BaseResponse {
  response: ShopInfoType[];
}

export type CenterInfoType = {
  lat: number;
  lon: number;
  radius: number;
};
