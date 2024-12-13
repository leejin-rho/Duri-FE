import { getApprovedQuotationList, getCompletedQuotationList, getDetailQuotation, getReservedQuotationList, postQuoatation,PostQuotationRequest, PostQuotationResponse } from "@duri-fe/utils";
import { useMutation, UseMutationResult, useQuery } from "@tanstack/react-query"

export const usePostQuotation = (): UseMutationResult<PostQuotationResponse['response'], void, PostQuotationRequest> => {
  return useMutation({
    mutationFn: (request: PostQuotationRequest) => postQuoatation(request),
    onError: (error) => {
      console.error(error);
      alert('견적서 요청을 실패했습니다.');
    },
  })
}

export const useGetApprovedQuotationList = () => {
  const { data } = useQuery({
    queryKey: ['approvedQuotationList'],
    queryFn: () => getApprovedQuotationList(),
    enabled: true,
    staleTime: 10 * 60 * 1000,
  });

  return { data };
}

export const useGetReservedQuotationList = () => {
  const { data } = useQuery({
    queryKey: ['reservedQuotationList'],
    queryFn: () => getReservedQuotationList(),
    enabled: true,
    staleTime: 10 * 60 * 1000,
  });

  return { data };
}

export const useGetCompletedQuotationList = () => {
  const { data } = useQuery({
    queryKey: ['completedQuotationList'],
    queryFn: () => getCompletedQuotationList(),
    enabled: true,
    staleTime: 10 * 60 * 1000,
  });

  return { data };
}

export const useGetDetailQuotation = (requestId: number) => {
  const { data } = useQuery({
    queryKey: ['detailQuotation', requestId],
    queryFn: () => getDetailQuotation(requestId),
    enabled: true,
    staleTime: 10 * 60 * 1000,
  });

  return { data };
}