import { useMutation } from '@tanstack/react-query';

import { deletePortfolio } from '../portfolio';

export const useDeletePortfolio = () => {
  return useMutation({
    mutationKey: ['deletePortfolio'],
    mutationFn: (feedbackId: number) => deletePortfolio(feedbackId),
    onSuccess: () => {
      window.location.href = '/portfolio';
    },
    onError: (error) => {
      console.error(error);
    },
  });
};
