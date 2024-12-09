import { duriInstance } from '../axiosConfig';
import { RequestProps } from '../types';

export const postRequestQuotation = async (request: RequestProps) => {
  // ): Promise<RequestResponse> => {
  const response = await duriInstance.post(`quotation/request`, request);
  return response.data;
};