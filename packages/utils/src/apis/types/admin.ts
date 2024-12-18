import { BaseResponse } from './base';

export interface AdminShopInfo {
  shopId: number;
  shopName: string;
  shopAddress: string;
  shopPhone: string;
  shopLat: number;
  shopLon: number;
  businessRegistrationNumber: string;
  groomerLicenseNumber: string;
}

export interface AdminGroomerInfo {
  groomerName: string;
  groomerGender: 'M' | 'F';
  groomerAge: number;
  license: string[];
}

export interface AdminShop {
  shop: AdminShopInfo;
  groomer: AdminGroomerInfo;
}

export interface AdminShopsResponse extends BaseResponse {
  response: AdminShop[];
}

export interface AdminRequestAnswerResponse {
  response: string;
}
