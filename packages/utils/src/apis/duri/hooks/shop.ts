import { useQuery } from '@tanstack/react-query';

import { getRecommendedShopInfo, getRegularShopInfo } from '../shop';

export const useGetRegularShopList = () => {
    const {data} =  useQuery({
      queryKey: ['getRegularShopList'],
      queryFn: () => getRegularShopInfo(),
      staleTime : 1000 * 60 * 10,
    })

    return data;
  };

  export const useGetRecommendedShopList = () => {
    const {data} =  useQuery({
      queryKey: ['getRecommendedShopList'],
      queryFn: () => getRecommendedShopInfo(),
      staleTime : 1000 * 60 * 10,
    })
    return data;
  };