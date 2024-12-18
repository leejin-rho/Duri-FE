import { BaseResponse } from './base';

export interface PostReviewProps {
  quotationId: number;
  formData: FormData;
}

export interface PutReviewProps {
  reviewId: number;
  formData: FormData;
}

export interface PostPutDeleteReviewResponse extends BaseResponse {
  response: string;
}

//리뷰에 띄우는 매장, 펫 데이터 조회 요청
export interface ReviewShopAndPetResponse extends BaseResponse {
  response: {
    shopInfo: {
      shopId: number;
      imageURL: string;
      shopName: string;
      address: string;
      shopTag1: string;
      shopTag2: string;
      shopTag3: string;
    };
    petInfo: {
      petId: number;
      imageURL: string;
      name: string;
      breed: string;
      gender: string;
      age: number;
      weight: number;
      lastGrooming: string;
      neutering: boolean;
    };
  };
}
