import { getDetailRequest, getNewRequestList } from "@duri-fe/utils"
import { useQuery } from "@tanstack/react-query"

export const useGetNewRequestList = () => {
  const { data } = useQuery({
    queryKey: ['newRequestList'],
    queryFn: () => getNewRequestList(),
    enabled: true,
    staleTime: 10 * 60 * 1000,
  })

  return { data };
}

export const useGetDetailRequest = (requestId: number) => {
  const { data } = useQuery({
    queryKey: ['detailRequest', requestId],
    queryFn: () => getDetailRequest(requestId),
    enabled: true,
    staleTime: 10 * 60 * 1000,
  })

  return { data };
}