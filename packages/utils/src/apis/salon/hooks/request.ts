import { getNewRequestList } from "@duri-fe/utils"
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