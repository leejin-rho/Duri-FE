import { PostShopInfoResponse, salonInstance } from '@duri-fe/utils';

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
