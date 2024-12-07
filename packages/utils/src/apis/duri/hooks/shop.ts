import { useQuery } from '@tanstack/react-query';

import { CenterInfoType } from '../../types';
import {
  getNearByShopInfo,
  getRecommendedShopInfo,
  getRegularShopInfo,
} from '../shop';

export const useGetRegularShopList = () => {
  const { data } = useQuery({
    queryKey: ['getRegularShopList'],
    queryFn: () => getRegularShopInfo(),
    staleTime: 1000 * 60 * 10,
  });

  return data;
};

export const useGetRecommendedShopList = () => {
  const { data } = useQuery({
    queryKey: ['getRecommendedShopList'],
    queryFn: () => getRecommendedShopInfo(),
    staleTime: 1000 * 60 * 10,
  });
  return data;
};

export const useGetNearByShopInfo = (
  centerInfo: CenterInfoType,
  sortby: string,
) => {
  const { data, refetch, isPending } = useQuery({
    queryKey: ['getNearByShopInfo', centerInfo],
    queryFn: () => getNearByShopInfo(centerInfo, sortby),
    enabled: !!centerInfo,
  });
  return { data, refetch, isPending };
};
