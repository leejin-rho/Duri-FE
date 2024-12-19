import { Flex, Text } from '@duri-fe/ui';
import { IncomeMonthListType } from '@duri-fe/utils/src/apis/types/income';

import { ResponsiveBarChart } from './ResponsiveBarChart';

interface RecentIncomeStatisticProps {
  incomeMonthList: IncomeMonthListType[]; //선택, 이전, 이번달 매출 리스트
}

export const RecentIncomeStatistic = ({
  incomeMonthList,
}: RecentIncomeStatisticProps) => {
  return (
    <Flex direction="column">
      <Flex direction="column" align="flex-start" gap={8} padding="0 20px">
        <Text typo="Title2">매장 매출 통계</Text>
        <Text typo="Caption1">최근 일주일간의 매장 매출을 보여줍니다.</Text>
      </Flex>
      <Flex margin="24px 0" padding="0 20px" height={180}>
        <ResponsiveBarChart data={incomeMonthList} />
      </Flex>
    </Flex>
  );
};
