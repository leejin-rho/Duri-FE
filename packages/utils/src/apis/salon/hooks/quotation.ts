import { postQuoatation,PostQuotationRequest, PostQuotationResponse } from "@duri-fe/utils";
import { useMutation, UseMutationResult } from "@tanstack/react-query"

export const usePostQuotation = (): UseMutationResult<PostQuotationResponse['response'], void, PostQuotationRequest> => {
  return useMutation({
    mutationFn: (request: PostQuotationRequest) => postQuoatation(request),
    onError: (error) => {
      console.error(error);
      alert('견적서 요청을 실패했습니다.');
    },
  })
}