import { duriInstance } from '../axiosConfig';
import { RequestDetailResponse, RequestItemsResponse } from '../types';

export const getRequestItems = async (): Promise<
  RequestItemsResponse['response']
> => {
  const response = await duriInstance.get(`quotation/request`);
  return response.data.response;
};

//미용사 -> 고객 견적서 상세조회
export const getQuotationInfo = async (
  quotationId: number,
  // ): Promise<QuotationResponse> => {
) => {
  const response = await duriInstance.get(`quotation/${quotationId}`);
  return response.data;
};

//고객 -> 미용사 요청서 상세조회
export const getRequestDetailInfo = async (
  requestId: number,
): Promise<RequestDetailResponse['response']> => {
  const response = await duriInstance.get(`/quotation/request/${requestId}`);
  return response.data.response;
};