import { salonInstance } from "../axiosConfig"
import { NewRequestListResponse, RequestDetailResponse } from "../types";

export const getNewRequestList = async (): Promise<NewRequestListResponse['response'][]>  => {
  const response = await salonInstance.get(`/quotation/request/new?shopId=1`);
  return response.data.response;
}

export const getDetailRequest = async (requestId: number): Promise<RequestDetailResponse['response']> => {
  const response = await salonInstance.get(`/quotation/request/${requestId}`);
  return response.data.response;
}