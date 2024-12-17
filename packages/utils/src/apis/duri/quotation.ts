import { duriInstance } from '@duri-fe/utils';

import { QuotationListResponse, RequestDetailResponse, RequestItemsResponse } from '../types';

//고객 -> 미용사 (request)견적서 상세조회
export const getDetailRequestQuotaion = async (
  requestId: number,
): Promise<RequestDetailResponse['response']> => {
  const response = await duriInstance.get(`/quotation/request/${requestId}`);
  return response.data.response;
};

export const getQuotationInfo = async (
  quotationId: number,
  // ): Promise<QuotationResponse> => {
) => {
  const response = await duriInstance.get(`quotation/${quotationId}`);
  return response.data;
};

//들어온 견적서 리스트 조회, 매장 추천 순위
export const getQuotationList = async (
  quotationReqId: number,
  lat: number,
  lon: number,
): Promise<QuotationListResponse['response']> => {
  const response = await duriInstance.get(`/quotation/request/detail`, {
    params: { quotationReqId, lat, lon },
  });
  return response.data.response;
};

export const getRequestItems = async (): Promise<
  RequestItemsResponse['response']
> => {
  const response = await duriInstance.get(`quotation/request`);
  return response.data.response;
};
