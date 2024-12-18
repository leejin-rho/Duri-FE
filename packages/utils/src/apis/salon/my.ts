import { publicInstance } from '@duri-fe/utils';

import { GroomerAndShopProfileResponse } from '../types/my';

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
