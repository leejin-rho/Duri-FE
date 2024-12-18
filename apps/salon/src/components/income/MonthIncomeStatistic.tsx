import { IncomeMonthListType } from '@duri-fe/utils/src/apis/types/income';

interface MonthIncomeStatisticProps {
  beforeRatio: number; //전월대비 증감
  incomeMonthList: IncomeMonthListType[]; //최근 5달 매출 리스트
}

export const MonthIncomeStatistic = ({
  beforeRatio,
  incomeMonthList,
}: MonthIncomeStatisticProps) => {
  console.log(incomeMonthList, beforeRatio);
  return <div>MonthIncomeStatistic</div>;
};
