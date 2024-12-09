import { salonInstance } from "../axiosConfig"
import { NewRequestListResponse } from "../types";

export const getNewRequestList = async (): Promise<NewRequestListResponse['response'][]>  => {
  const response = await salonInstance.get(`/quotation/request/new?shopId=1`);
  return response.data.response;
}