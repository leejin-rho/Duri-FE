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
  return useQuery({
    queryKey: ['getClosetGrooming'],
    queryFn: () => getClosetGrooming(),
    enabled: true,
    staleTime: 10 * 60 * 1000,
  });
};

/** 오늘 스케줄 */
export const useGetDailySchedule = () => {
  return useQuery({
    queryKey: ['getDailySchedule'],
    queryFn: () => getDailySchedule(),
    enabled: true,
    staleTime: 10 * 60 * 1000,
  });
};

export const useGetHomeQuotationRequest = () => {
  return useQuery({
    queryKey: ['getHomeQuotationRequest'],
    queryFn: () => getHomeQuotationRequest(),
    enabled: true,
    staleTime: 10 * 60 * 1000,
  });
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
