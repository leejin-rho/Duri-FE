import { useMutation } from '@tanstack/react-query';

import { BaseResponse } from '../../types';
import { RequestProps } from '../../types/quotation';
import { postRequestQuotation } from '../request';
interface RequestResponse extends BaseResponse {
  response: number;
}

export const usePostRequestQuotation = () => {
  return useMutation<RequestResponse, Error, RequestProps>({
    mutationFn: (request: RequestProps) => postRequestQuotation(request),
    onSuccess: () => {
      alert('견적서 요청을 성공했습니다.');
      window.location.href = '/quotation';
    },
    onError: (error) => {
      console.error(error);
      alert('견적서 요청을 실패했습니다.');
    },
  });
};
