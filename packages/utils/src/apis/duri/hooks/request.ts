import { useMutation } from '@tanstack/react-query';

import { RequestProps } from '../../types/quotation';
import { postRequestQuotation } from '../request';

// import { BaseResponse } from './../../types/base';


export const useRequestQuotation = () => {
  return useMutation<void, Error, RequestProps>({
    mutationFn: (request: RequestProps) => postRequestQuotation(request),
    onError: (error) => {
      console.error(error);
      alert('견적서 요청을 실패했습니다.');
    },
  });
};