import { BaseResponse } from './base';

export interface TimeType {
  time9: boolean;
  time10: boolean;
  time11: boolean;
  time12: boolean;
  time13: boolean;
  time14: boolean;
  time15: boolean;
  time16: boolean;
  time17: boolean;
  time18: boolean;
}

/** [POST] 견적 요청서 작성 request */
export interface RequestProps extends TimeType {
  petId?: number;
  menu: string[];
  addMenu: string[];
  specialMenu: string[];
  design: string[];
  etc: string;
  day: string;
  shopIds: number[];
}

/** [GET] 견적 요청서 리스트 response */
export interface NewRequestListResponse {
  response: {
    requestId: number;
    userId: number;
    petId: number;
    petImage: string;
    petName: string;
    petAge: number;
    petBreed: string;
    petNeutering: boolean;
    petGender: string;
    petWeight: number;
    petCharacter: string[];
    petDiseases: string[];
    requestCreatedAt: Date | null;
  };
}

/** [GET] 견적 요청서 세부 response */
export interface RequestDetailResponse {
  response: {
    userName: string;
    userPhone: string;
    pet: RequestDetailPetType;
    groomer: RequestDetailGroomerType;
    quotationDetails: QuotationDetailsType;
  };
}

export interface RequestDetailPetType {
  image: string;
  name: string;
  age: number;
  gender: string;
  breed: string;
  weight: number;
  neutering: boolean;
  character: string[];
  diseases: string[];
  lastGrooming: string | Date;
}

export interface RequestDetailGroomerType {
  image: string;
  name: string;
  history: number;
  info: string;
}

export interface QuotationDetailsType extends TimeType {
  groomingMenu: string[];
  additionalGrooming: string[];
  specialCare: string[];
  designCut: string[];
  otherRequests: string;
  day: string;
}

/** [POST] 견적서 작성 request */
export interface PostQuotationRequest {
  requestId: number;
  priceDetail: {
    groomingPrice: number;
    additionalPrice: number;
    specialCarePrice: number;
    designPrice: number;
    customPrice: number;
    totalPrice: number;
  };
  memo: string;
  startDateTime: string;
  endDateTime: string;
}

export interface PostQuotationResponse extends BaseResponse {
  response: {
    data: string;
  };
}

export interface ApprovedQuotationListResponse extends BaseResponse {
  response: NewRequestListResponse['response'] & {
    status: string;
  };
}

export interface ReservedQuotationListResponse extends BaseResponse {
  response: {
    requestId: number;
    userId: number;
    petId: number;
    petDetailResponse: RequestDetailPetType;
    groomerName: string;
    groomerImage: string;
    totalPrice: number;
    dday: number;
    date: string;
    startTime: string;
    endTime: string;
  };
}

export interface CompletedQuotationListResponse extends BaseResponse {
  response: {
    requestId: number;
    userId: number;
    petId: number;
    petDetailResponse: RequestDetailPetType;
    groomerName: string;
    groomerImage: string;
    totalPrice: number;
    dday: number;
    date: string;
    startTime: string;
    endTime: string;
  };
}


//응답 견적서 상세조회
export interface QuotationDetailResponse extends BaseResponse {
  response: {
    shopDetail: ShopDetailType;
    quotationCreatedAt: string;
    petDetail: RequestDetailPetType;
    menuDetail: QuotationDetailsType;
    quotation: PostQuotationRequest;
    quotationId: number;
    status: string;
  };
}

export interface ShopDetailType {
  shopName: string;
  shopAddress: string;
  shopPhone: string;
  groomerName: string;
}

export interface ShopType {
  shopName: string;
  shopImage: string;
}

export interface QuotationListResponse extends BaseResponse {
  response: {
    createdAt: Date;
    expiredAt: Date;
    bestDistanceShop: ShopType | null;
    bestPriceShop: ShopType | null;
    bestRatingShop: ShopType | null;
    bestShop: ShopType | null;
    quotations: {
      requestId: number;
      shopName: string;
      totalPrice: number | null;
    }[];
  };
}

export interface PutGroomingCompleteResponse extends BaseResponse {
  response: string;
}
export interface RequestItemsType {
  quotationId: number;
  createdAt: Date;
  expiredAt: Date;
  shops: [
    {
      shopId: number;
      shopName: string;
    },
  ];
  isExpired: boolean;
}

export interface RequestItemsResponse extends BaseResponse {
  response: RequestItemsType[];
}
