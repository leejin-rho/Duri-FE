import { useMutation } from '@tanstack/react-query';

import {
  PostPutReviewResponse,
  PostReviewProps,
  PutReviewProps,
} from '../../types/review';
import { postReview, putReview } from '../review';

export const usePostReview = () => {
  return useMutation<PostPutReviewResponse, Error, PostReviewProps>({
    mutationKey: ['postReview'],
    mutationFn: ({ quotationId, formData }: PostReviewProps) =>
      postReview(quotationId, formData),
    onSuccess: () => {
      window.location.href = '/my/review';
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export const usePutReview = (handleNavigate: () => void) => {
  return useMutation<PostPutReviewResponse, Error, PutReviewProps>({
    mutationKey: ['putReview'],
    mutationFn: ({ reviewId, formData }: PutReviewProps) =>
      putReview(reviewId, formData),
    onSuccess: () => {
      handleNavigate();
    },
    onError: (error) => {
      console.error(error);
    },
  });
};
