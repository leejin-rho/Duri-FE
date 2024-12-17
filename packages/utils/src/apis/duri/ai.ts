import { AIInstance } from '../config';
import { AIParams, AIStylingResponse } from '../types/ai';

export const postAIStyling = async ({
  styleText,
  image,
}: AIParams): Promise<AIStylingResponse['response']> => {
  const { data } = await AIInstance.post(`/user/home/ai-styling`, image, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    params: {
      styleText,
    },
  });

  return data.response;
};
