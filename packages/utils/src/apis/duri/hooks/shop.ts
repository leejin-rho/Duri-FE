import { useQuery } from '@tanstack/react-query';

<<<<<<< HEAD
import { CenterInfoType } from '../../types';
import {
  getNearByShopInfo,
  getRecommendedShopInfo,
  getRegularShopInfo,
} from '../shop';
import { a, b } from '../shop';

export const useA = () => {
  const { data } = useQuery({
    queryKey: ['getRegularShopList'],
    queryFn: () => a(),
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


export const useB = () => {
  const { data } = useQuery({
    queryKey: ['getRecommendedShopList'],
    queryFn: () => b(),
    staleTime: 1000 * 60 * 10,
  });
  return data;
}; 

