import { duriInstance } from '@duri-fe/utils';

import { BaseResponse, RequestProps } from '../types';

interface RequestResponse extends BaseResponse {
  response: number;
}

export const postRequestQuotation = async (
  request: RequestProps,
): Promise<RequestResponse> => {
  const response = await duriInstance.post(`quotation/request`, request);
  return response.data;
};
