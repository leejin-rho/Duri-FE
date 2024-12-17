import { publicInstance, salonInstance } from '@duri-fe/utils';

import {
  GetMyShopInfoResponse,
  GroomerAndShopProfileResponse,
  PutShopImageResponse,
} from '../types/my';

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

/** [GET] /groomer/profile 미용사 마이샵 */
export const getMyShopInfo = async (): Promise<
  GetMyShopInfoResponse['response']
> => {
  const response = await salonInstance.get('groomer/profile');
  return response.data.response;
};

/** [PUT] /shop/profile/image 미용사 마이샵 사진 수정 */
export const putShopImage = async (
  formData: FormData,
): Promise<PutShopImageResponse['response']> => {
  const response = await salonInstance.put('shop/profile/image', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data.response;
};
