import { useQuery } from '@tanstack/react-query';

import { CenterInfoType } from '../../types';
import { getNearByShopInfo } from '../shop';

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
