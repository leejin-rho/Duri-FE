export interface RequestProps extends TimeProps {
  pet: PetInfoProps | undefined;
  quotationDetails: QuotationDetails;
}

export interface ResponseProps {
  salonName: string;
  salonAddress: string;
  salonPhone: string;
  designerName: string;
  quotationDetails: QuotationDetails;
  startDateTime: Date;
  endDateTime: Date;
  requestTime: Date;
  totalPrice: number;
}


export interface QuotationDetails {
  groomingMenu: string[];
  additionalGrooming: string[];
  specialCare: string[];
  designCut: string[];
  otherRequests?: string;
  day?: Date;
  shopIds?: number[];
}

export interface TimeProps {
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

export interface PetInfoProps {
  petId: number | undefined;
  name: string;
  image: string;
  breed: string;
  age: number;
  weight: number;
  gender: string;
  neutering: boolean;
  character: string[];
  diseases: string[];
  lastGrooming?: Date;
}
