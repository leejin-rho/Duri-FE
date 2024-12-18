import { TossPaymentsWidgets } from '@tosspayments/tosspayments-sdk';

import { BaseResponse } from './base';

export interface GetUuidResponse {
  response: {
    orderId: string;
    customerKey: string;
  };
}

export interface PostPaymentResponse extends BaseResponse {
  response: string;
}

export interface HandlePaymentProps {
  widgets: TossPaymentsWidgets;
  groomingList: string[];
  orderId: string;
  quotationId: number
}
export interface PostAmountProps {
  orderId: string;
  amount: number;
}

export interface PostPaymentProps {
  paymentKey?: string;
  orderId?: string;
  amount?: number;
  quotationId?: number;
}