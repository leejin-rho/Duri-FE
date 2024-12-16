import { useQuery } from '@tanstack/react-query';

import { BaseError } from '../../types';
import { GroomerInfoResponse } from '../../types/my';
import { UseQueryProps } from '../../types/tanstack';
import { getGroomerInfo } from '../my';

type UseGetGroomerInfo = UseQueryProps<
  GroomerInfoResponse['response'],
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
