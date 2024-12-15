import { duriInstance } from '../axiosConfig';
import { QuotationListResponse, RequestDetailResponse } from '../types';

//고객 -> 미용사 (request)견적서 상세조회
export const gettDetailRequestQuotaion = async (
  requestId: number,
): Promise<RequestDetailResponse['response']> => {
  const response = await duriInstance.get(`/quotation/request/${requestId}`);
  return response.data.response;
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
