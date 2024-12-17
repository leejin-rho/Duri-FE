import { useMutation } from '@tanstack/react-query';

import {
  PostPutDeleteReviewResponse,
  PostReviewProps,
  PutReviewProps,
} from '../../types/review';
import { deleteReview, postReview, putReview } from '../review';

export const usePostReview = () => {
  return useMutation<PostPutDeleteReviewResponse, Error, PostReviewProps>({
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
  return useMutation<PostPutDeleteReviewResponse, Error, PutReviewProps>({
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

export const useDeleteReview = (handleNavigate: () => void) => {
  return useMutation({
    mutationKey: ['deleteReview'],
    mutationFn: (reviewId: number) => deleteReview(reviewId),
    onSuccess: () => {
      handleNavigate();
    },
    onError: (error) => {
      console.error(error);
    },
  });
};
