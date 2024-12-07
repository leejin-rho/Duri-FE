import { useQuery } from '@tanstack/react-query';

import { getQuotationInfo } from '../request';

export const useGetQuotationInfo = (quotationId: string) => {
  const { data } = useQuery({
    queryKey: ['getQuotationInfo'],
    queryFn: () => getQuotationInfo(quotationId),
    staleTime: 1000 * 60 * 10,
  });
  return data;
};
