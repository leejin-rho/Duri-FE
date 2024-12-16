import {
  BaseError,
  getClosetGrooming,
  getDailySchedule,
  getHomeQuotationRequest,
  getHomeShopInfo,
  HomeShopInfoResponse,
} from '@duri-fe/utils';
import { useQuery } from '@tanstack/react-query';

import { UseQueryProps } from '../../types/tanstack';

/** 진행중인 시술 */
export const useGetClosetGrooming = () => {
  const { data, isPending } = useQuery({
    queryKey: ['getClosetGrooming'],
    queryFn: () => getClosetGrooming(),
    enabled: true,
    staleTime: 10 * 60 * 1000,
  });

  return { data, isPending };
};

/** 오늘 스케줄 */
export const useGetDailySchedule = () => {
  const { data, isPending } = useQuery({
    queryKey: ['getDailySchedule'],
    queryFn: () => getDailySchedule(),
    enabled: true,
    staleTime: 10 * 60 * 1000,
  });
  console.log(data);

  return { data, isPending };
};

export const useGetHomeQuotationRequest = () => {
  const { data, isPending } = useQuery({
    queryKey: ['getHomeQuotationRequest'],
    queryFn: () => getHomeQuotationRequest(),
    enabled: true,
    staleTime: 10 * 60 * 1000,
  });

  return { data, isPending };
};

type UseGetHomeShopInfoProps = UseQueryProps<
  HomeShopInfoResponse['response'],
  BaseError
>;

export const useGetHomeShopInfo = ({
  queryKey,
  options,
}: UseGetHomeShopInfoProps) => {
  return useQuery({
    queryKey: ['getHomeShopInfo', ...(queryKey || [])],
    queryFn: () => getHomeShopInfo(),
    ...options,
  });
};
