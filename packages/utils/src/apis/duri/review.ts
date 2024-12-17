import { duriInstance } from '@duri-fe/utils';

import { PostPutDeleteReviewResponse } from '../types/review';

export const postReview = async (
  quotationId: number,
  formData: FormData,
): Promise<PostPutDeleteReviewResponse> => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };
  const response = await duriInstance.post(
    `/user/review/new?quotationId=${quotationId}`,
    formData,
    config,
  );

  return response.data;
};

export const putReview = async (
  reviewId: number,
  formData: FormData,
): Promise<PostPutDeleteReviewResponse> => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };
  const response = await duriInstance.put(
    `/review/${reviewId}`,
    formData,
    config,
  );

  return response.data;
};

export const deleteReview = async(reviewId: number) => {
  const response = await duriInstance.delete(`/review/${reviewId}`);
  return response.data;
}