import { adminInstance } from '../config';
import { AdminRequestAnswerResponse, AdminShopsResponse } from '../types/admin';

export const getRequestShopList = async (): Promise<
  AdminShopsResponse['response']
> => {
  const { data } = await adminInstance.get(`/entry/waiting`);
  return data.response;
};

export const getApprovedShopList = async (): Promise<
  AdminShopsResponse['response']
> => {
  const { data } = await adminInstance.get(`/entry/approved`);
  return data.response;
};

export const postApproveShop = async ({
  shopId,
}: {
  shopId: number;
}): Promise<AdminRequestAnswerResponse['response']> => {
  const { data } = await adminInstance.post(`/entry/approve/${shopId}`);
  return data.response;
};

export const postRejectShop = async ({
  shopId,
}: {
  shopId: number;
}): Promise<AdminRequestAnswerResponse['response']> => {
  const { data } = await adminInstance.post(`/entry/reject/${shopId}`);
  return data.response;
};
