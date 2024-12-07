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