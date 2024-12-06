// import { RequestProps } from '@duri-fe/duri/assets/types/RequestProps';
import { duriInstance } from '../axiosConfig';
import { RequestProps } from '../types/quotation';

export async function getPetInfo() {
  try {
    const response = await duriInstance.get(`pet`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const postRequestQuotation = async (request: RequestProps) => {
  // ): Promise<RequestResponse> => {
  const response = await duriInstance.post(`quotation/request`, request);
  return response.data;
};

export const getQuotationInfo = async (
  quotationId: string,
  // ): Promise<QuotationResponse> => {
) => {
  const response = await duriInstance.get(`quotation/${quotationId}`);
  return response.data;
};
