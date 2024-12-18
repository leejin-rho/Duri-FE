import { salonInstance } from '@duri-fe/utils';

import { NewRequestListResponse, RequestDetailResponse } from '../types';

/** 새로운 견적요청 리스트 */
export const getNewRequestList = async (): Promise<
  NewRequestListResponse['response'][]
> => {
  const response = await salonInstance.get(`/quotation/request/new`);
  return response.data.response;
};

export const getDetailRequest = async (
  requestId: number,
): Promise<RequestDetailResponse['response']> => {
  const response = await salonInstance.get(`/quotation/request/${requestId}`);
  return response.data.response;
};
