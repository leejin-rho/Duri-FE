import { duriInstance } from '../axiosConfig';
import { GetUuidResponse, HandlePaymentProps } from '../types';

export const getUUID = async (): Promise<GetUuidResponse['response']> => {
  const response = await duriInstance.get('/payments/keys');
  return response.data.response;
};

export const handlePayment = async ({
  widgets,
  groomingList,
  shopName,
  createdAt,
  orderId,
}: HandlePaymentProps) => {
  try {
    await widgets.requestPayment({
      orderId: orderId,
      orderName: `${groomingList[0]} 외 ${groomingList.length - 1}건`,
      successUrl: window.location.origin + '/payment/success',
      failUrl: window.location.origin + '/payment/fail',
      metadata: {
        salonName: shopName,
        date: createdAt,
      },
    });
  } catch (error) {
    console.log('결제 요청 실패 : ', error);
  }
};
