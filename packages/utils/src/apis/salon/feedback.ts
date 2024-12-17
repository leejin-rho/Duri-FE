import { salonInstance } from '../config';
import { GetPetInfoByQuotationIdResponse } from '../types/feedback';

export const getPetInfoByQuotationId = async (
  quotationId: number,
): Promise<GetPetInfoByQuotationIdResponse['response']> => {
  const response = await salonInstance.get(`user/pet/info/${quotationId}`);
  return response.data.response;
};
