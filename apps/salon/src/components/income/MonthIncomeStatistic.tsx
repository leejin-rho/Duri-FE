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

  const avgIncome =
    incomeMonthList.reduce((sum, item) => sum + item.income, 0) /
    incomeMonthList.length;

  // y축 최소값과 최대값을 구한 후, 4등분한 값들로 가로선을 그리기 위한 값
  const minIncome = Math.min(...incomeMonthList.map((item) => item.income));
  const maxIncome = Math.max(...incomeMonthList.map((item) => item.income));
  const minGridY = Math.max(0, minIncome - 500000);
  const maxGridY = maxIncome + 500000;
  const step = (maxGridY - minGridY) / 3;

  const gridYValues = [
    minGridY,
    minGridY + step,
    minGridY + step * 2,
    maxGridY,
  ];

  return (
    <Flex direction="column" padding="32px 20px" align="flex-start" gap={8}>
      <Text typo="Title1">이번달 매출</Text>
      <AmountText>{thisMonthIncome.toLocaleString('ko-KR')}원</AmountText>
      <WidthFitFlex gap={4}>
        <Text typo="Caption1" colorCode={theme.palette.Link}>
          전월 대비
        </Text>
        <Text typo="Label1" colorCode={theme.palette.Link}>
          {beforeRatio}%
        </Text>
        <Text typo="Caption1" colorCode={theme.palette.Link}>
          {beforeRatio > 0 ? '증가' : '감소'}
        </Text>
      </WidthFitFlex>

      <Flex margin="32px 0">
        <div style={{ height: 100, width: '100%' }}>
          <ResponsiveLine
            data={transformedData}
            margin={{ top: 20, right: 40, bottom: 40, left: 20 }}
            xScale={{ type: 'point' }}
            yScale={{
              type: 'linear',
              min: 'auto',
              max: 'auto',
              stacked: false,
              reverse: false,
            }}
            axisLeft={null}
            axisRight={{
              tickSize: 0,
              tickPadding: 6,
              tickRotation: 0,
              tickValues: gridYValues.map((value) => value), // y축 값
              format: (value) => value / 10000,
            }}
            axisBottom={{
              tickSize: 0,
              tickPadding: 20,
              tickRotation: 0,
              tickValues: incomeMonthList.map((item) => item.date), // x축 값
              format: (value) => value + '월', // 월 표시
              legendOffset: 36,
              legendPosition: 'middle',
            }}
            theme={{
              axis: {
                ticks: {
                  text: {
                    fill: theme.palette.Gray300, // x축 글씨 색을 회색으로 변경
                  },
                  line: {
                    stroke: theme.palette.Gray200, // x축 선 색상
                    strokeDasharray: '2 3',
                  },
                },
              },
            }}
            enableGridX={false}
            enableGridY={true}
            lineWidth={2}
            colors={theme.palette.Normal700} // 꺾은선 색상
            enablePoints={false}
            useMesh={true}
            layers={[
              'grid',
              'axes',
              'lines',
              'markers',
              'legends',
              ({ innerWidth, innerHeight }) => {
                // 평균선 추가
                const avgY =
                  (avgIncome /
                    Math.max(...incomeMonthList.map((item) => item.income))) *
                  innerHeight;

                return (
                  <g>
                    <line
                      x1={0}
                      x2={innerWidth}
                      y1={avgY}
                      y2={avgY}
                      stroke={theme.palette.Alert}
                      strokeWidth={1}
                      strokeDasharray="2 3"
                    />
                  </g>
                );
              },
            ]}
            gridYValues={gridYValues} // y축 가로선 설정 (4등분)
            onClick={(data) => console.log(data)}
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
