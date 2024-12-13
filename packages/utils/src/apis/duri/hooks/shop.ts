import { useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import { CenterInfoType, SearchParamType } from '../../types';
import { getNearByShopInfo, getSearchShopResult } from '../shop';

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

export const useDebouncedValue = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

export const useGetSearchShopResult = (searchInfo: SearchParamType) => {
  const { data, refetch, isPending } = useQuery({
    queryKey: ['getSearchShopResult', searchInfo],
    queryFn: () => getSearchShopResult(searchInfo),
    enabled: !!searchInfo,
  });
  return { data, refetch, isPending };
};
