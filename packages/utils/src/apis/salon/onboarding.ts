import { PostShopInfoResponse } from '@duri-fe/utils';

import { salonInstance } from '../axiosConfig';

export const postShopInfo = async (
  formData: FormData,
): Promise<PostShopInfoResponse['response']> => {
  const response = await salonInstance.post('/shop/onboarding', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data.response;
};
