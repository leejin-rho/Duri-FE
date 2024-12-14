import { useQuery } from '@tanstack/react-query';

import { getQuotationInfo, getRequestDetailInfo, getRequestItems } from '../quotation';

export const useGetRequestItems = () => {
  return useQuery({
    queryKey: ['getRequestItems'],
    queryFn: () => getRequestItems(),
    staleTime: 1000 * 60 * 10,
  });
};

export const useGetQuotationInfo = (quotationId: number) => {
  return useQuery({
    queryKey: ['getQuotationInfo'],
    queryFn: () => getQuotationInfo(quotationId),
    staleTime: 1000 * 60 * 10,
  });
};

export const useGetRequestDetailInfo = (requestId: number) => {
  return useQuery({
    queryKey: ['getRequestDetailInfo'],
    queryFn: () => getRequestDetailInfo(requestId),
    staleTime: 1000 * 60 * 10,
  });
};