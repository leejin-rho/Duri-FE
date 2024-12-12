import { salonInstance } from "../axiosConfig";
import { ApprovedQuotationListResponse, CompletedQuotationListResponse, PostQuotationRequest, PostQuotationResponse, ReservedQuotationListResponse } from "../types";

export const postQuoatation = async (request: PostQuotationRequest): Promise<PostQuotationResponse['response']> => {
  const response = await salonInstance.post(`/quotation`, request);
  return response.data.response;
}

export const getApprovedQuotationList = async (): Promise<ApprovedQuotationListResponse['response'][]> => {
  const response = await salonInstance.get(`/quotation/request/approved`);
  return response.data.response;
}

export const getReservedQuotationList = async (): Promise<ReservedQuotationListResponse['response'][]> => {
  const response = await salonInstance.get(`/quotation/request/reservation`);
  return response.data.response;
}

export const getCompletedQuotationList = async (): Promise<CompletedQuotationListResponse['response'][]> => {
  const response = await salonInstance.get(`/quotation/request/reservation/complete`);
  return response.data.response;
}