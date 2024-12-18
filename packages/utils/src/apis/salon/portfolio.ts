import { salonInstance } from '../config';
import { PutDeletePortfolioResponse } from '../types/portfolio';

export const deletePortfolio = async (
  feedbackId: number,
): Promise<PutDeletePortfolioResponse> => {
  const { data } = await salonInstance.put(`/feedback/remove/${feedbackId}`);
  return data;
};
