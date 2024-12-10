import { getDetailRequest, getNewRequestList, TimeType } from "@duri-fe/utils"
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

  const timeList: TimeType = {
    time9: data?.quotationDetails.time9 || false,
    time10: data?.quotationDetails.time10 || false,
    time11: data?.quotationDetails.time11 || false,
    time12: data?.quotationDetails.time12 || false,
    time13: data?.quotationDetails.time13 || false,
    time14: data?.quotationDetails.time14 || false,
    time15: data?.quotationDetails.time15 || false,
    time16: data?.quotationDetails.time16 || false,
    time17: data?.quotationDetails.time17 || false,
    time18: data?.quotationDetails.time18 || false,
  }

  return { data, timeList };
}