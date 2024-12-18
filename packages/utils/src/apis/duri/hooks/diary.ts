import { useQuery } from '@tanstack/react-query';

import { BaseError } from '../../types';
import {
  DiaryDataResponse,
  DiaryDetailResponse,
  DiaryPetInfoResponse,
} from '../../types/diary';
import { UseQueryProps } from '../../types/tanstack';
import { getDiaryData, getDiaryDetail, getDiaryPetInfo } from '../diary';

type UseGetDiaryData = UseQueryProps<DiaryDataResponse['response'], BaseError>;

export const UseGetDiaryData = ({ queryKey, options }: UseGetDiaryData) => {
  return useQuery({
    queryKey: ['getDiaryData', ...(queryKey || [])],
    queryFn: () => getDiaryData(),
    ...options,
  });
};

type UseGetDiaryDetail = UseQueryProps<
  DiaryDetailResponse['response'],
  BaseError
> & {
  quotationId: number;
};

export const UseGetDiaryDetail = ({
  queryKey,
  options,
  quotationId,
}: UseGetDiaryDetail) => {
  return useQuery({
    queryKey: ['getDiaryDetail', quotationId, ...(queryKey || [])],
    queryFn: () => getDiaryDetail({ quotationId }),
    enabled: !!quotationId,
    ...options,
  });
};

type UseGetDiaryPetInfo = UseQueryProps<
  DiaryPetInfoResponse['response'],
  BaseError
> & {
  quotationId: number;
};

export const UseGetDiaryPetInfo = ({
  queryKey,
  options,
  quotationId,
}: UseGetDiaryPetInfo) => {
  return useQuery({
    queryKey: ['getDiaryPetInfo', quotationId, ...(queryKey || [])],
    queryFn: () => getDiaryPetInfo({ quotationId }),
    enabled: !!quotationId,
    ...options,
  });
};
