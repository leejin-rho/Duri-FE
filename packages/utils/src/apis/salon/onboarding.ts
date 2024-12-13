import { PostShopInfoRequest, PostShopInfoResponse } from '@duri-fe/utils';

import { salonInstance } from '../axiosConfig';

export const postShopInfo = async (
  request: PostShopInfoRequest,
): Promise<PostShopInfoResponse['response']> => {
  const response = await salonInstance.post('/shop/onboarding', request);
  return response.data;
};
