export interface QuotationFormData {
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
