import { useMutation, useQuery } from '@tanstack/react-query';

import {
  PostAmountProps,
  PostPaymentProps,
  PostPaymentResponse,
} from '../../types';
import {
  getUUID,
  postAmount,
  postAmountVerity,
  postPaymentConfirm,
} from '../payment';

export const useGetUuid = () => {
  return useQuery({
    queryKey: ['getUuid'],
    queryFn: () => getUUID(),
    staleTime: 1000 * 60 * 5,
  });
};

export const usePostAmount = () => {
  return useMutation<PostPaymentResponse, Error, PostAmountProps>({
    mutationFn: (saveData: PostAmountProps) => postAmount(saveData),
    onError: () => {
      alert('결제 요청을 실패했습니다. - save');
    },
  });
};

export const usePostAmountVerity = () => {
  return useMutation<PostPaymentResponse, Error, PostAmountProps>({
    mutationFn: (verifyData: PostAmountProps) => postAmountVerity(verifyData),
    onError: () => {
      alert('결제 요청을 실패했습니다. - verify');
    },
  });
};

export const usePostPayment = () => {
  return useMutation<PostPaymentResponse, Error, PostPaymentProps>({
    mutationFn: (paymentInfo: PostPaymentProps) =>
      postPaymentConfirm(paymentInfo),
    onError: () => {
      alert('결제 요청을 실패했습니다. - payment');
    },
    onMutate(variables) {
      if (!variables) {
        return; // 전달되는 변수인 paymentInfo가 undefined같은 값이면 mutate 중단하도록!!
      }
    },
  });
};
