import { useState } from 'react';

import { Max, Min, SalonTag, theme } from '@duri-fe/ui';
import { IncomeMonthListType } from '@duri-fe/utils/src/apis/types/income';
import {
  BarCustomLayerProps,
  BarDatum,
  ComputedBarDatum,
  ResponsiveBar,
} from '@nivo/bar';

interface CustomBarDatum extends BarDatum {
  date: string;
  income: number;
}

export const ResponsiveBarChart = ({
  data,
}: {
  data: IncomeMonthListType[];
}) => {
  const date = new Date();
  const day = date.getDate().toString();

  const [clickedBar, setClickedBar] =
    useState<ComputedBarDatum<CustomBarDatum> | null>(null);

  const handleBarClick = (bar: ComputedBarDatum<CustomBarDatum>) => {
    setClickedBar(bar);
  };

  const processedData = data.map((item) => ({
    ...item,
    value: item.income ?? 0,
  }));

  return (
    <ResponsiveBar<CustomBarDatum>
      data={processedData}
      keys={['income']}
      indexBy="date"
      margin={{ top: 50, right: 0, bottom: 50, left: 0 }}
      padding={0}
      defs={[
        {
          id: 'gray-gradient',
          type: 'linearGradient',
          colors: [
            { offset: 0, color: 'rgba(175, 174, 183, 0.4)' },
            { offset: 100, color: 'rgba(78, 77, 81, 0)' },
          ],
        },
        {
          id: 'green-gradient',
          type: 'linearGradient',
          colors: [
            { offset: 0, color: '#E0F931' },
            { offset: 100, color: 'rgba(224, 249, 49, 0)' },
          ],
        },
      ]}
      fill={[
        {
          match: (d) => d.data.indexValue === day,
          id: 'green-gradient',
        },
        {
          match: '*',
          id: 'gray-gradient',
        },
      ]}
      colors={{ scheme: 'greens' }}
      borderWidth={0}
      axisLeft={null}
      enableGridX={false}
      enableGridY={false}
      enableLabel={false}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: 'transparent',
            },
          },
          ticks: {
            line: {
              stroke: 'transparent',
            },
          },
        },
      }}
      isInteractive={false}
      layers={[
        'grid',
        'axes',
        'bars',
        ({ bars, height }: BarCustomLayerProps<CustomBarDatum>) => {
          const validBars = bars.filter(
            (bar) => bar.data.value !== null && bar.data.value !== undefined,
          );
          const avg =
            validBars.reduce((acc, bar) => acc + (bar.data.value || 0), 0) /
            bars.length;

          const maxValue = Math.max(
            ...validBars.map((bar) => bar.data.value || 0),
          );

          // y 좌표 계산 (마진값을 height에서 빼야한대요)
          const avgY = height - 100 - (avg / maxValue) * (height - 100); // 최대값에 대한 비율로 높이를 계산

          return (
            <g>
              {/* 평균선 */}
              <line
                x1={bars[0]?.x}
                x2={bars[bars.length - 1]?.x + bars[bars.length - 1].width}
                y1={avgY}
                y2={avgY} // 동일한 Y 좌표
                stroke={theme.palette.Alert}
                strokeWidth={1}
                strokeDasharray="2 3"
              />
              {/* 양옆 보더 및 상단 경계선 */}
              {bars.map((bar) => (
                <g
                  key={bar.key}
                  onClick={() => handleBarClick(bar)}
                  cursor="pointer"
                >
                  {clickedBar && (
                    <foreignObject
                      x={clickedBar.x + clickedBar.width / 2 - 35}
                      y={clickedBar.y - 50}
                      width={100}
                      height={40}
                      style={{ overflow: 'visible' }}
                    >
                      <SalonTag
                        content={`${clickedBar.data.value}원`}
                        borderRadius={8}
                        padding="10px"
                        height={29}
                        bg={theme.palette.Gray_White}
                        typo="Caption4"
                        colorCode={theme.palette.Black}
                      />
                    </foreignObject>
                  )}

                  {/* 상단 경계선 */}
                  <line
                    x1={bar.x}
                    x2={bar.x + bar.width}
                    y1={bar.y}
                    y2={bar.y}
                    stroke={bar.data.indexValue === day ? '#BBD029' : '#BDBCC3'}
                    strokeWidth={3}
                  />
                  {/* 왼쪽 경계선 */}
                  <line
                    x1={bar.x}
                    x2={bar.x}
                    y1={bar.y}
                    y2={bar.y + bar.height}
                    stroke={bar.data.indexValue === day ? '#BBD029' : '#BDBCC3'}
                    strokeWidth={0.3}
                  />
                  {/* 오른쪽 경계선 */}
                  <line
                    x1={bar.x + bar.width}
                    x2={bar.x + bar.width}
                    y1={bar.y}
                    y2={bar.y + bar.height}
                    stroke={bar.data.indexValue === day ? '#BBD029' : '#BDBCC3'}
                    strokeWidth={0.3}
                  />
                </g>
              ))}
              {/* 최대/최소값 표시 */}
              {validBars.map((bar) => {
                const maxValue = Math.max(
                  ...validBars.map((b) => b.data.value || 0),
                );
                const minValue = Math.min(
                  ...validBars.map((b) => b.data.value || 0),
                );

                // 최대값, 최소값이 유효하지 않으면 렌더링하지 않음
                if (maxValue === minValue || maxValue === 0) {
                  return null;
                }

                const isMax = bar.data.value === maxValue;
                const isMin = bar.data.value === minValue;
                if (isMax || isMin) {
                  return (
                    <g
                      key={bar.key}
                      transform={`translate(${bar.x + bar.width / 7}, ${bar.y - 110})`}
                    >
                      {isMax ? <Max width={38} /> : <Min width={38} />}
                    </g>
                  );
                }
                return null;
              })}
            </g>
          );
        },
      ]}
    />
  );
};
