import { BaseResponse } from './base';

export interface PostShopInfoRequest {
  shopOnboardingInfo: ShopOnboardingInfoType;
  groomerOnboardingInfo: GroomerOnboardingInfoType;
}

export interface ShopOnboardingInfoType {
  name: string;
  phone: string;
  address: string;
  lat: number;
  lon: number;
  businessRegistrationNumber: string;
  groomerLicenseNumber: string;
}

export interface GroomerOnboardingInfoType {
  name: string;
  gender: string;
  age: number;
  history: number;
  license: string[];
}

export interface PostShopInfoResponse extends BaseResponse {
  response: {
    shopDetailResponse: ShopDetailResponseType;
    groomerProfileDetailResponse: GroomerProfileDetailResponseType;
  };
}

export interface ShopDetailResponseType {
  id: number;
  name: string;
  address: string;
  imageURL: string | null;
  phone: string;
}

export interface GroomerProfileDetailResponseType {
  id: number;
  email: string;
  phone: string;
  name: string;
  gender: string;
  age: number;
  history: number;
  image: string;
  info: string;
  license: string[];
}
