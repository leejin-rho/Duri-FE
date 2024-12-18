import { salonInstance } from '../config';
import {
  GetAgeStatisticResponse,
  GetCharacterStatisticResponse,
  GetDiseaseStatisticResponse,
  GetRecentDaysResponse,
  GetSelectedMonthIncomeResponse,
  GetThisMonthIncomeResponse,
} from '../types/income';

export const getThisMonthIncome = async (): Promise<
  GetThisMonthIncomeResponse['response']
> => {
  const { data } = await salonInstance.get('statistics/income/five-month');
  return data;
};

export const getSelectedMonthIncome = async (month: number): Promise<
  GetSelectedMonthIncomeResponse['response']
> => {
  const { data } = await salonInstance.get('statistics/income/month', {
    params: { month: month },
  });
  return data;
};

export const getRecentDaysIncome = async (): Promise<
  GetRecentDaysResponse['response']
> => {
  const { data } = await salonInstance.get('statistics/age');
  return data;
};

export const getAgeStatistic = async (): Promise<
  GetAgeStatisticResponse['response']
> => {
  const { data } = await salonInstance.get('statistics/age');
  return data;
};

export const getCharacterStatistic = async (): Promise<
  GetCharacterStatisticResponse['response']
> => {
  const { data } = await salonInstance.get('statistics/character');
  return data;
};

export const getDiseaseStatistic = async (): Promise<
  GetDiseaseStatisticResponse['response']
> => {
  const { data } = await salonInstance.get('statistics/disease');
  return data;
};