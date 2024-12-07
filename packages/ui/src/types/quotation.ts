export interface RequestType extends TimeType {
  pet: PetInfoType | undefined;
  quotationDetails: QuotationDetailsType;
}

export interface ResponseType {
  name: string;
  address: string;
  phone: string;
  designerName: string;
  quotationDetails: QuotationDetailsType;
  startDateTime: Date;
  endDateTime: Date;
  requestTime: Date;
  totalPrice: number;
}

export interface QuotationDetailsType {
  groomingMenu: string[];
  additionalGrooming: string[];
  specialCare: string[];
  designCut: string[];
  otherRequests?: string;
  day?: Date;
  shopIds?: number[];
}

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

export interface PetInfoType {
  id: number | undefined;
  name: string;
  image: string;
  breed: string;
  age: number;
  weight: number;
  gender: string;
  neutering: boolean;
  character: string[];
  diseases: string[];
  lastGrooming: Date | null;
}
