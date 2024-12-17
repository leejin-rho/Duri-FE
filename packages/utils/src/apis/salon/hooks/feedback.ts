import {
  BaseError,
  getPetInfoByQuotationId,
  GetPetInfoByQuotationIdResponse,
  UseQueryProps,
} from '@duri-fe/utils';
import { useQuery } from '@tanstack/react-query';

type UseGetPetInfoByQuotationIdProps = UseQueryProps<
  GetPetInfoByQuotationIdResponse['response'],
  BaseError
> & {
  quotationId: number;
};

export const useGetPetInfoByQuotationId = ({
  queryKey,
  options,
  quotationId,
}: UseGetPetInfoByQuotationIdProps) => {
  return useQuery({
    queryKey: ['getPetInfoByQuotationId', quotationId, ...(queryKey || [])],
    queryFn: () => getPetInfoByQuotationId(quotationId),
    enabled: !!quotationId,
    ...options,
  });
};
