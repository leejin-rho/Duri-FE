import { TimeType } from '@duri-fe/utils';

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

/** 견적 요청서 세부화면 Props */
export interface RequestDetailProps {
  userName: string;
  userPhone: string;
  pet: RequestDetailPetType;
  groomer: RequestDetailGroomerType;
  quotationDetails: QuotationDetailsType;
}

interface RequestDetailPetType {
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

interface RequestDetailGroomerType {
  image: string;
  name: string;
  history: number;
  info: string;
}

interface QuotationDetailsType extends TimeType {
  groomingMenu: string[];
  additionalGrooming: string[];
  specialCare: string[];
  designCut: string[];
  otherRequests: string;
  day: string;
}