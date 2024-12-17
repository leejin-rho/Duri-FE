import {
  BaseError,
  getPetInfoByQuotationId,
  GetPetInfoByQuotationIdResponse,
  postFeedback,
  PostFeedbackResponse,
  UseQueryProps,
} from '@duri-fe/utils';
import { useMutation, useQuery } from '@tanstack/react-query';

type UseGetPetInfoByQuotationIdProps = UseQueryProps<
  GetPetInfoByQuotationIdResponse['response'],
  BaseError
> & {
  quotationId: number;
};

export const useGetPetInfoByQuotationId = ({
  queryKey,
  options,
  quotationId,
}: UseGetPetInfoByQuotationIdProps) => {
  return useQuery({
    queryKey: ['getPetInfoByQuotationId', quotationId, ...(queryKey || [])],
    queryFn: () => getPetInfoByQuotationId(quotationId),
    enabled: !!quotationId,
    ...options,
  });
};

export const usePostFeedback = () => {
  return useMutation<
    PostFeedbackResponse['response'],
    BaseError,
    { quotationId: number; formData: FormData }
  >({
    mutationKey: ['usePostFeedback'],
    mutationFn: ({
      quotationId,
      formData,
    }: {
      quotationId: number;
      formData: FormData;
    }) => postFeedback(quotationId, formData),
    onError: (error) => console.error(error),
  });
};
