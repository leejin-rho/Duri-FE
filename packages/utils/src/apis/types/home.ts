import { BaseResponse } from "./base";

export interface ClosetGroomingResponse extends BaseResponse {
  response: {
    petId: number;
    petName: string;
    breed: string;
    gender: string;
    age: number;
    weight: number;
    memo: string;
    userId: number;
    userPhone: string;
    quotationId: number;
    startTime: string;
    complete: boolean;
    isNow: boolean | null;
  }
}

export interface DailyScheduleResponse extends BaseResponse {
  response: {
    date: string;
    startTime: string;
    petId: number;
    petName: string;
    breed: string;
    gender: string;
    weight: number;
    groomerName: string;
  }
}

export interface HomeQuotationRequestResponse extends BaseResponse {
  response: {
    requestId: number;
    petId: number;
    imageURL: string;
    name: string;
    breed: string;
    gender: string;
    age: number;
    weight: number;
    neutering: boolean;
    quotationReqId: number;
    memo: string;
  }
}