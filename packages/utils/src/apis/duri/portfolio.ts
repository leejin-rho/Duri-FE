import { publicInstance } from '@duri-fe/utils';

import { PortfolioDetailResponse, PortfolioResponse } from '../types/portfolio';

export const getGroomerPortfolio = async ({
  groomerId,
}: {
  groomerId: number;
}): Promise<PortfolioResponse['response']> => {
  const { data } = await publicInstance.get(`/feedback/${groomerId}`, {
    params: { groomerId },
  });
  return data.response;
};

export const getPortfolioDetail = async ({
  feedbackId,
}: {
  feedbackId: number;
}): Promise<PortfolioDetailResponse['response']> => {
  const { data } = await publicInstance.get(`/feedback/detail/${feedbackId}`, {
    params: { feedbackId },
  });

  return data.response;
};
