import { useQuery } from '@tanstack/react-query';

import { BaseError } from '../../types';
import {
  GetAgeStatisticResponse,
  GetCharacterStatisticResponse,
  GetDiseaseStatisticResponse,
  GetRecentDaysResponse,
  GetSelectedMonthIncomeResponse,
  GetThisMonthIncomeResponse,
} from '../../types/income';
import { UseQueryProps } from '../../types/tanstack';
import {
  getAgeStatistic,
  getCharacterStatistic,
  getDiseaseStatistic,
  getRecentDaysIncome,
  getSelectedMonthIncome,
  getThisMonthIncome,
} from '../income';

//이번달 + 최근 5달 매출 조회
type UseGetThisMonthIncomeType = UseQueryProps<
  GetThisMonthIncomeResponse['response'],
  BaseError
>;

export const useGetThisMonthIncome = ({
  queryKey,
  options,
}: UseGetThisMonthIncomeType) => {
  return useQuery({
    queryKey: ['getThisMonthIncome', ...(queryKey || [])],
    queryFn: () => getThisMonthIncome(),
    ...options,
  });
};

//선택 월 매출조회 : 12월
type UseGetSelectedMonthIncomeType = UseQueryProps<
  GetSelectedMonthIncomeResponse['response'],
  BaseError
> & {
  month: string;
};

export const useGetSelectedMonthIncome = ({
  queryKey,
  options,
  month,
}: UseGetSelectedMonthIncomeType) => {
  return useQuery({
    queryKey: ['getSelectedMonthIncome', month, ...(queryKey || [])],
    queryFn: () => getSelectedMonthIncome(month),
    ...options,
  });
};

//최근 7일 매출 조회
type UseGetRecentDaysIncomeType = UseQueryProps<
  GetRecentDaysResponse['response'],
  BaseError
>;
export const useGetRecentDaysIncome = ({
  queryKey,
  options,
}: UseGetRecentDaysIncomeType) => {
  return useQuery({
    queryKey: ['getRecentDaysIncome', ...(queryKey || [])],
    queryFn: () => getRecentDaysIncome(),
    ...options,
  });
};

//반려견 나이 누적 조회
type UseGetAgeStatisticType = UseQueryProps<
  GetAgeStatisticResponse['response'],
  BaseError
>;

export const useGetAgeStatistic = ({
  queryKey,
  options,
}: UseGetAgeStatisticType) => {
  return useQuery({
    queryKey: ['getAgeStatistic', ...(queryKey || [])],
    queryFn: () => getAgeStatistic(),
    ...options,
  });
};

//반려견 성격 누적 조회
type UseGetCharacterStatisticType = UseQueryProps<
  GetCharacterStatisticResponse['response'],
  BaseError
>;

export const useGetCharacterStatistic = ({
  queryKey,
  options,
}: UseGetCharacterStatisticType) => {
  return useQuery({
    queryKey: ['getCharacterStatistic', ...(queryKey || [])],
    queryFn: () => getCharacterStatistic(),
    ...options,
  });
};

//반려견 질환 누적 조회
type UseGetDiseaseStatisticType = UseQueryProps<
  GetDiseaseStatisticResponse['response'],
  BaseError
>;

export const useGetDiseaseStatistic = ({
  queryKey,
  options,
}: UseGetDiseaseStatisticType) => {
  return useQuery({
    queryKey: ['getDiseaseStatistic', ...(queryKey || [])],
    queryFn: () => getDiseaseStatistic(),
    ...options,
  });
};
