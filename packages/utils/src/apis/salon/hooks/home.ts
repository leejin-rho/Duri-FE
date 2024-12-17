import {
  BaseError,
  getClosetGrooming,
  getDailySchedule,
  getGroomersProfileList,
  getHomeQuotationRequest,
  getHomeShopInfo,
  GroomersListProfileResponse,
  HomeShopInfoResponse,
  putGroomingComplete,
  PutGroomingCompleteResponse,
  putGroomingNoshow,
} from '@duri-fe/utils';
import {
  useMutation,
  UseMutationResult,
  useQuery,
} from '@tanstack/react-query';

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

/** 요청서 확인 */
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

/** 홈 상점 정보 */
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

export const usePutGroomingComplete = (): UseMutationResult<
  PutGroomingCompleteResponse['response'],
  BaseError,
  number
> => {
  return useMutation({
    mutationFn: (quotationId: number) => putGroomingComplete(quotationId),
  });
};

export const usePutGroomingNoshow = (): UseMutationResult<
  PutGroomingCompleteResponse['response'],
  BaseError,
  number
> => {
  return useMutation({
    mutationFn: (quotationId: number) => putGroomingNoshow(quotationId),
  });
};

type UseGetGroomerProfile = UseQueryProps<
  GroomersListProfileResponse['response'],
  BaseError
>;

export const useGetGroomersList = ({
  queryKey,
  options,
}: UseGetGroomerProfile) => {
  return useQuery({
    queryKey: ['getPortfolioDetail', ...(queryKey || [])],
    queryFn: () => getGroomersProfileList(),
    staleTime: 1000 * 60 * 5,
    ...options,
  });
};
