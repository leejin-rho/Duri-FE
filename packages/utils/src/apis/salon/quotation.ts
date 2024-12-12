import { salonInstance } from "../axiosConfig";
import { PostQuotationRequest, PostQuotationResponse } from "../types";

export const postQuoatation = async (request: PostQuotationRequest): Promise<PostQuotationResponse['response']> => {
  const response = await salonInstance.post(`/quotation`, request);
  return response.data.response;
}