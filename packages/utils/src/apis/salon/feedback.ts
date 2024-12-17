import { salonInstance } from '../config';
import {
  GetPetInfoByQuotationIdResponse,
  PostFeedbackResponse,
} from '../types/feedback';

export const getPetInfoByQuotationId = async (
  quotationId: number,
): Promise<GetPetInfoByQuotationIdResponse['response']> => {
  const response = await salonInstance.get(`user/pet/info/${quotationId}`);
  return response.data.response;
};

export const postFeedback = async (
  quotationId: number,
  formData: FormData,
): Promise<PostFeedbackResponse['response']> => {
  const response = await salonInstance.post(
    `feedback/${quotationId}`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return response.data.response;
};
