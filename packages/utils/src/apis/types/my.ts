import { BaseResponse } from './base';

interface PetInfoType {
  petId: number;
  imageURL?: string;
  name: string;
  breed: string;
  age: number;
  weight: number;
  gender: string;
  neutering?: boolean;
  lastGrooming?: string;
}

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

//이용기록 - 견적응답서 조회를 위한 requestId 컬럼 추가
export interface HistoryType {
  requestId: number;
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

/** 그루머 아이디로 그루머 인포 조회 시 사용 & 포트폴리오 조회를 위해 id 얻으려고 사용 */
export interface GroomerInfoType {
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

export interface ShopInfoType {
  id: 0;
  name: string;
  address: string;
  imageURL: string;
  phone: string;
  openTime: string;
  closeTime: string;
  info: string;
  kakaoTalk: string;
  tags: string[];
}

export interface GroomerAndShopProfileResponse extends BaseResponse {
  response: {
    groomerProfileDetail: GroomerInfoType;
    shopProfileDetail: ShopInfoType;
  };
}

/** [GET] /groomer/profile 미용사 마이샵 */
export interface GetMyShopInfoResponse extends BaseResponse {
  response: {
    groomerProfileDetailResponse: GroomerInfoType;
    reservationCount: number;
    noShowCount: number;
    shopProfileDetailResponse: ShopProfileDetailType;
  };
}

export interface ShopProfileDetailType {
  id: number;
  name: string;
  address: string;
  imageURL: string;
  phone: string;
  openTime: string;
  closeTime: string;
  info: string;
  kakaoTalk: string;
  rating: number;
  tags: string[];
}

/** [PUT] /shop/profile, /shop/profile/image 미용사 마이샵 수정 */
export interface PutShopInfoResponse extends BaseResponse {
  response: ShopProfileDetailType;
}

/** [PUT] /shop/profile 미용사 마이샵 정보 수정 */
export interface PutShopInfoRequest {
  phone: string;
  openTime: string;
  closeTime: string;
  info: string;
  kakaoTalk: string;
  tags: string[];
}
//펫정보 삭제 응답
export interface DeletePetResponse extends BaseResponse {
  response: string;
}
