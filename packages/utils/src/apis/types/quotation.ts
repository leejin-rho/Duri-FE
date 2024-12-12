import { BaseResponse } from "./base";

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
  day: Date;
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
    petCharacter: string[];
    petDiseases: string[];
    requestCreatedAt: Date | string | null
  }
}

/** [GET] 견적 요청서 세부 response */
export interface RequestDetailResponse {
  response: {
    userName: string;
    userPhone: string;
    pet: RequestDetailPetType;
    groomer: RequestDetailGroomerType;
    quotationDetails: QuotationDetailsType;
  }
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

/** TODO: string[] 변경시 적용 */
export interface QuotationDetailsType extends TimeType {
  groomingMenu: string;
  additionalGrooming: string;
  specialCare: string;
  designCut: string;
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
  }
}

export interface ApprovedQuotationListResponse extends BaseResponse {
  response: (NewRequestListResponse['response'] & {
    status: string;
  })
}

/*
      "requestId": 2,
      "userId": 2,
      "petId": 2,
      "petDetailResponse": {
        "image": "https://example.com/dog2.jpg",
        "name": "초코",
        "age": 3,
        "gender": "F",
        "breed": "푸들",
        "weight": 10,
        "neutering": true,
        "character": [
          "사람을 잘 따름",
          "조용한 성격"
        ],
        "diseases": [
          "딱히 없음"
        ],
        "lastGrooming": "2023-10-14T15:00:00.000+00:00"
      },
      "groomerName": "한지민",
      "groomerImage": "https://example.com/groomer1.jpg",
      "totalPrice": 220,
      "dday": 0,
      "date": "2024-12-07",
      "startTime": "00:31:30",
      "endTime": "00:31:30"
*/
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
  }
}