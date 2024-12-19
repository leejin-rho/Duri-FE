import { BaseResponse } from './base';

export interface IncomeMonthListType {
  date: string;
  income: number;
}

export interface GetThisMonthIncomeResponse extends BaseResponse {
  response: {
    shopId: number;
    beforeRatio: number;
    incomeMonthList: IncomeMonthListType[];
  };
}

export interface GetSelectedMonthIncomeResponse extends BaseResponse {
  response: {
    shopId: number;
    incomeMonthList: IncomeMonthListType[];
    beforeRatio: number;
    nowRatio: number;
  };
}

export interface GetRecentDaysResponse extends BaseResponse {
  response: {
    shopId: number;
    incomeMonthList: IncomeMonthListType[];
  };
}

export interface GetAgeStatisticResponse extends BaseResponse {
  response: {
    shopId: number;
    ageList: {
      standard: string;
      ratio: number;
      count: number;
    }[];
  };
}

export interface GetDiseaseStatisticResponse extends BaseResponse {
  response: {
    shopId: number;
    diseaseList: {
      standard: string;
      ratio: number;
      count: number;
    }[];
  };
}

export interface GetCharacterStatisticResponse extends BaseResponse {
  response: {
    shopId: number;
    characterList: {
      standard: string;
      ratio: number;
      count: number;
    }[];
  };
}
