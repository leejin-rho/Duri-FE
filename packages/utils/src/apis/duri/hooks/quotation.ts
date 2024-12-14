import { useQuery } from '@tanstack/react-query';

import { getQuotationList, gettDetailRequestQuotaion } from '../quotation';

export const useGetDetailRequestQuotation = (requestId: number) => {
  return useQuery({
    queryKey: ['getRequestDetailInfo'],
    queryFn: () => gettDetailRequestQuotaion(requestId),
    staleTime: 1000 * 60 * 10,
  });
};

export const useGetQuotationList = (
  quotationReqId: number,
  lat: number | null,
  lon: number | null,
) => {
  return useQuery({
    queryKey: ['getQuotationList', quotationReqId, lat, lon],
    queryFn: () => getQuotationList(quotationReqId, lat!, lon!),
    staleTime: 1000 * 60 * 10,
    enabled: lat !== null && lon !== null,
  });
};
