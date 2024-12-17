import { useMutation } from '@tanstack/react-query';

import { AIParams, AIStylingResponse, BaseError } from '../../types';
import { UseMutationProps } from '../../types/tanstack';
import { postAIStyling } from '../ai';

type UsePostAIStylingProps = UseMutationProps<
  AIStylingResponse['response'],
  BaseError,
  AIParams
>;

export const UsePostAIStyling = ({
  mutationKey,
  options,
}: UsePostAIStylingProps) => {
  return useMutation<AIStylingResponse['response'], BaseError, AIParams>({
    mutationKey: ['postAIStyling', ...(mutationKey || [])],
    mutationFn: ({ styleText, image }: AIParams) =>
      postAIStyling({ styleText, image }),
    ...options,
  });
};
