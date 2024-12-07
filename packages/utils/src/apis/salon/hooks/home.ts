import { getClosetGrooming, getDailySchedule, getHomeQuotationRequest } from "@duri-fe/utils";
import { useQuery } from "@tanstack/react-query";

/** 진행중인 시술 */
export const useGetClosetGrooming = () => {
  const { data, isPending } = useQuery({
    queryKey: ['getClosetGrooming'],
    queryFn: () => getClosetGrooming(),
    enabled: true,
    staleTime: 10 * 60 * 1000,
  })

  return { data, isPending };
}

/** 오늘 스케줄 */
export const useGetDailySchedule = () => {
  const { data, isPending } = useQuery({
    queryKey: ['getDailySchedule'],
    queryFn: () => getDailySchedule(),
    enabled: true,
    staleTime: 10 * 60 * 1000,
  })

  return { data, isPending };
}

export const useGetHomeQuotationRequest = () => {
  const { data, isPending } = useQuery({
    queryKey: ['getHomeQuotationRequest'],
    queryFn: () => getHomeQuotationRequest(),
    enabled: true,
    staleTime: 10 * 60 * 1000,
  })

  return { data, isPending };
}