export interface RequestType extends TimeType {
  pet: PetInfoType | null;
  quotationDetails: QuotationDetailsType;
}

export interface ResponseQuotationType {
  shopDetail: {
    shopName: string;
    shopAddress: string;
    shopPhone: string;
    groomerName: string;
  };
  quotationCreatedAt: string;
  menuDetail: {
    groomingMenu: string[];
    additionalGrooming: string[];
    specialCare: string[];
    designCut: string[];
    otherRequests: string;
  };
  quotationId: number;
  quotation: {
    requestId: number;
    memo: string;
    startDateTime: string;
    endDateTime: string;
    priceDetail: {
      groomingPrice?: number;
      additionalPrice?: number;
      specialCarePrice?: number;
      designPrice?: number;
      customPrice?: number;
      totalPrice: number;
    };
  };
  status: string;
}

export interface QuotationDetailsType {
  groomingMenu: string[];
  additionalGrooming: string[];
  specialCare: string[];
  designCut: string[];
  otherRequests?: string;
  day?: string;
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
  id: number | null;
  name: string;
  image: string;
  breed: string;
  age: number;
  weight: number;
  gender: string;
  neutering: boolean;
  character: string[];
  diseases: string[];
  lastGrooming: string | null;
}
