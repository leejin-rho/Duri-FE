import { salonInstance } from "../axiosConfig";
import { PostQuotationRequest, PostQuotationResponse } from "../types";

export const postQuoatation = async (request: PostQuotationRequest): Promise<PostQuotationResponse['response']> => {
  console.log(request);
  const response = await salonInstance.post(`/quotation`, request);
  console.log(response);
  return response.data.response;
}