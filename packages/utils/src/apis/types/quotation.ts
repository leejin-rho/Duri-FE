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

export interface QuotationDetailsType extends TimeType {
  groomingMenu: string;
  additionalGrooming: string;
  specialCare: string;
  designCut: string;
  otherRequests: string;
  day: string;
}