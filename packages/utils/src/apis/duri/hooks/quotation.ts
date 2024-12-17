import { useQuery } from '@tanstack/react-query';

import { getDetailRequestQuotaion, getQuotationList } from '../quotation';

import { getRequestItems } from './../quotation';

export const useGetRequestItems = () => {
  const { data } = useQuery({
    queryKey: ['getRequestItems'],
    queryFn: () => getRequestItems(),
    staleTime: 1000 * 60 * 10,
  });
  return data;
};

export const useGetDetailRequestQuotation = (requestId: number) => {
  return useQuery({
    queryKey: ['getRequestDetailInfo'],
    queryFn: () => getDetailRequestQuotaion(requestId),
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
