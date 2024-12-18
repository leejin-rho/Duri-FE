import { publicInstance } from '@duri-fe/utils';

import { PorfolioDetailResponse, PorfolioResponse } from '../types/portfolio';

export const getGroomerPorfolio = async ({
  groomerId,
}: {
  groomerId: number;
}): Promise<PorfolioResponse['response']> => {
  const { data } = await publicInstance.get(`/feedback/${groomerId}`, {
    params: { groomerId },
  });
  return data.response;
};

export const getPortfolioDetail = async ({
  feedbackId,
}: {
  feedbackId: number;
}): Promise<PorfolioDetailResponse['response']> => {
  const { data } = await publicInstance.get(`/feedback/detail/${feedbackId}`, {
    params: { feedbackId },
  });
  console.log(data);
  return data.response;
};
