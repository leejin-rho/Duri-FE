import { useQuery } from '@tanstack/react-query';

import { BaseError } from '../../types';
import { GroomerAndShopProfileResponse } from '../../types/my';
import { GetMyShopInfoResponse } from '../../types/my';
import { UseQueryProps } from '../../types/tanstack';
import { getGroomerInfo, getMyShopInfo } from '../my';

type UseGetGroomerInfo = UseQueryProps<
  GroomerAndShopProfileResponse['response'],
  BaseError
> & {
  groomerId: number;
};

export const UseGetGroomerInfo = ({
  queryKey,
  options,
  groomerId,
}: UseGetGroomerInfo) => {
  return useQuery({
    queryKey: ['getGroomerInfo', groomerId, ...(queryKey || [])],
    queryFn: () => getGroomerInfo({ groomerId }),
    enabled: !!groomerId,
    ...options,
  });
};

type UseGetMyShopInfo = UseQueryProps<
  GetMyShopInfoResponse['response'],
  BaseError
>;

/** [GET] /groomer/profile 미용사 마이샵 */
export const UseGetMyShopInfo = ({ queryKey, options }: UseGetMyShopInfo) => {
  return useQuery({
    queryKey: ['getMyShopInfo', ...(queryKey || [])],
    queryFn: () => getMyShopInfo(),
    ...options,
  });
};
