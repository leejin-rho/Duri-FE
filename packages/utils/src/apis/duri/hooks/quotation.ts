import { useQuery } from '@tanstack/react-query';

import { BaseError, RequestDetailResponse } from '../../types';
import { UseQueryProps } from '../../types/tanstack';
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

type UseGetDetailRequestQuotation = UseQueryProps<
  RequestDetailResponse['response'],
  BaseError
> & {
  requestId: number;
};

// 견적서 매장 순위 조회용
export const useGetDetailRequestQuotation = ({
  queryKey,
  requestId,
  options,
}: UseGetDetailRequestQuotation) => {
  return useQuery({
    queryKey: ['getRequestDetailInfo', requestId,  ...(queryKey || [])],
    queryFn: () => getDetailRequestQuotaion(requestId),
    staleTime: 1000 * 60 * 0, //항상 최신상태!!
    ...options,
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
