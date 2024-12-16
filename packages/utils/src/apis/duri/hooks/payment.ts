import { useQuery } from '@tanstack/react-query';

import { getUUID } from '../payment';

export const useGetUuid = () => {
  return useQuery({
    queryKey: ['getUuid'],
    queryFn: () => getUUID(),
    staleTime: 1000 * 60 * 5,
  });
};
