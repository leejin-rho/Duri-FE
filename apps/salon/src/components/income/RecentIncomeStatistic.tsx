import { IncomeMonthListType } from '@duri-fe/utils/src/apis/types/income';

interface RecentIncomeStatisticProps {
  incomeMonthList: IncomeMonthListType[]; //선택, 이전, 이번달 매출 리스트
  beforeRatio: number; //전월 대비 증감
  nowRatio: number; //이번달 대비 증감
}

export const RecentIncomeStatistic = ({
  incomeMonthList,
  beforeRatio,
  nowRatio,
}: RecentIncomeStatisticProps) => {
  console.log(incomeMonthList, beforeRatio, nowRatio);
  return <div>RecentIncomeStatistic</div>;
};
