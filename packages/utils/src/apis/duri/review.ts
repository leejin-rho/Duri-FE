import { duriInstance } from '../axiosConfig';
import { PostPutReviewResponse } from '../types/review';

export const postReview = async (
  quotationId: number,
  formData: FormData,
): Promise<PostPutReviewResponse> => {
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
): Promise<PostPutReviewResponse> => {
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
