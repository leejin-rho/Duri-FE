import { useQuery } from '@tanstack/react-query';

import { getQuotationInfo, getRequestItems } from '../quotation';

export const useGetRequestItems = () => {
  const {data} = useQuery({
    queryKey: ['getRequestItems'],
    queryFn: () => getRequestItems(),
    staleTime: 1000 * 60 * 10,
  });
  return data;
}

export const useGetQuotationInfo = (quotationId: number) => {
  const { data } = useQuery({
    queryKey: ['getQuotationInfo'],
    queryFn: () => getQuotationInfo(quotationId),
    staleTime: 1000 * 60 * 10,
  });
  return data;
};
