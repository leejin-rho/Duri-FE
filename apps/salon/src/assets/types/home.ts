export interface ShopInfoType {
  id: number;
  name: string;
  address: string;
  imageURL: string | null;
  phone: string;
}

export interface ClosetGroomingType {
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

export interface ScheduleType {
  date: string;
  startTime: string;
  petId: number;
  petName: string;
  breed: string;
  gender: string;
  weight: number;
  groomerName: string;
}

export interface QuotationRequestType {
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