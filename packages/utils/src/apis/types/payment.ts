import { TossPaymentsWidgets } from '@tosspayments/tosspayments-sdk';

export interface GetUuidResponse {
  response: {
    orderId: string;
    customerKey: string;
  };
}

export interface HandlePaymentProps {
  widgets: TossPaymentsWidgets;
  groomingList: string[];
  shopName: string;
  createdAt: string;
  orderId: string;
}
