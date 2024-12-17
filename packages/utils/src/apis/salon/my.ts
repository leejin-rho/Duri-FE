import { publicInstance, salonInstance } from '@duri-fe/utils';

import { GroomerAndShopProfileResponse } from '../types/my';
import { GetMyShopInfoResponse } from '../types/my';

export const getGroomerInfo = async ({
  groomerId,
}: {
  groomerId: number;
}): Promise<GroomerAndShopProfileResponse['response']> => {
  const { data } = await publicInstance.get(`/groomer/profile/${groomerId}`, {
    params: { groomerId },
  });
  return data.response;
};

export const getMyShopInfo = async (): Promise<
  GetMyShopInfoResponse['response']
> => {
  const response = await salonInstance.get('groomer/profile');
  return response.data.response;
};
