import { useQuery } from '@tanstack/react-query';

import { getRequestItems } from '../quotation';

export const useGetRequestItems = () => {
  const {data} = useQuery({
    queryKey: ['getRequestItems'],
    queryFn: () => getRequestItems(),
    staleTime: 1000 * 60 * 10,
  });
  return data;
}