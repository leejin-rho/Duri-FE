import { Flex, Text, theme, WidthFitFlex } from '@duri-fe/ui';
import { IncomeMonthListType } from '@duri-fe/utils/src/apis/types/income';
import styled from '@emotion/styled';
import { ResponsiveLine } from '@nivo/line';
interface MonthIncomeStatisticProps {
  beforeRatio: number; //전월대비 증감
  incomeMonthList: IncomeMonthListType[]; //최근 5달 매출 리스트
}

export const MonthIncomeStatistic = ({
  beforeRatio,
  incomeMonthList,
}: MonthIncomeStatisticProps) => {
  const transformedData = [
    {
      id: 'Income',
      data: incomeMonthList.map((item) => ({
        x: item.date,
        y: item.income,
      })),
    },
  ];

  const thisMonthIncome = incomeMonthList[4].income;

  return (
    <Flex direction="column" padding="40px 20px" align="flex-start" gap={8}>
      <Text typo="Title1">이번달 매출</Text>
      <AmountText>{thisMonthIncome.toLocaleString('ko-KR')}원</AmountText>
      <WidthFitFlex gap={12}>
        <Text typo="Caption1" colorCode={theme.palette.Link}>
          전월 대비
        </Text>
        <Text typo="Label1" colorCode={theme.palette.Link}>
          {beforeRatio}%
        </Text>
      </WidthFitFlex>

      <Flex>
        <div style={{ height: 100, width: '100%' }}>
          <ResponsiveLine
            data={transformedData}
            margin={{ top: 20, right: 40, bottom: 20, left: 20 }}
            xScale={{ type: 'point' }}
            yScale={{
              type: 'linear',
              min: 2000000,
              max: 5000000,

              stacked: false,
              reverse: false,
            }}
            axisLeft={null}
            axisBottom={{
              tickSize: 0,
              tickPadding: 5,
              tickRotation: 0,
              tickValues: incomeMonthList.map((item) => item.date), // x축 값
              format: (value) => value, // 월 표시
              legendOffset: 36,
              legendPosition: 'middle',
            }}
            axisRight={{
              tickSize: 0,
              tickPadding: 6,
              tickRotation: 0,
              tickValues: incomeMonthList.map((item) => item.date), // x축 값
              format: (value) => value, // 월 표시
              legendOffset: 36,
              legendPosition: 'middle',
            }}
            gridXValues={incomeMonthList.map((item) => item.date)}
            gridYValues={[2000000, 3000000, 4000000, 5000000]} // y축 점선 값
            enableGridX={false}
            enableGridY={true}
            // gridYStrokeDasharray="3,3" // 점선 스타일
            // gridYStroke={theme.palette.Gray200} // 점선 색상
            lineWidth={2}
            colors={theme.palette.Normal700} // 꺾은선 색상
            enablePoints={false}
            useMesh={true}
          />
        </div>
      </Flex>
    </Flex>
  );
};

const AmountText = styled(Text)`
  font-size: 24px;
  font-weight: 500;
`;
