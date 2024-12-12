import { salonInstance } from "../axiosConfig";
import { ApprovedQuotationListResponse, PostQuotationRequest, PostQuotationResponse } from "../types";

export const postQuoatation = async (request: PostQuotationRequest): Promise<PostQuotationResponse['response']> => {
  const response = await salonInstance.post(`/quotation`, request);
  return response.data.response;
}

export const getApprovedQuotationList = async (): Promise<ApprovedQuotationListResponse['response'][]> => {
  const response = await salonInstance.get(`/quotation/request/approved`);
  return response.data.response;
}