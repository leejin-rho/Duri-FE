import { useQuery, UseQueryResult } from '@tanstack/react-query';

import {
  BaseError,
  CenterInfoType,
  SearchParamType,
  ShopInfoResponse,
} from '../../types';
import { UseQueryProps } from '../../types/tanstack';
import { getNearByShopInfo, getSearchShopResult } from '../shop';

type UseGetNearByShopProps = UseQueryProps<
  ShopInfoResponse['response'],
  BaseError
> & {
  centerInfo: CenterInfoType;
  sortby: string;
};

export const useGetNearByShopInfo = ({
  queryKey,
  options,
  centerInfo,
  sortby,
}: UseGetNearByShopProps) => {
  const { data, refetch, isPending } = useQuery({
    queryKey: ['getNearByShopInfo', centerInfo, ...(queryKey || [])],
    queryFn: () => getNearByShopInfo(centerInfo, sortby),
    enabled: !!centerInfo,
    ...options,
  });
  return { data, refetch, isPending };
};

type UseGetSearchShopResultProps = UseQueryProps<
  ShopInfoResponse['response'],
  BaseError
> & {
  searchInfo: SearchParamType;
};

export const useGetSearchShopResult = ({
  queryKey,
  options,
  searchInfo,
}: UseGetSearchShopResultProps): UseQueryResult<
  ShopInfoResponse['response'],
  BaseError
> => {
  return useQuery<ShopInfoResponse['response'], BaseError>({
    queryKey: ['getSearchShopResult', searchInfo, ...(queryKey || [])],
    queryFn: () => getSearchShopResult(searchInfo),
    enabled: !!searchInfo.search.trim(),
    ...options,
  });
};
