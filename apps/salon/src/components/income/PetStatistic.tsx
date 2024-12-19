import { useState } from 'react';

import { Flex, Text, theme, WidthFitFlex } from '@duri-fe/ui';
import styled from '@emotion/styled';
import { ResponsivePie } from '@nivo/pie';
import { PET_STATISTIC_MENT } from '@salon/constants/statistic';

import { TabBarItem } from '../quotation/TabBarItem';

interface PetStatisticProps {
  agePetStatistic?: {
    standard: string;
    ratio: number;
    count: number;
  }[];

  diseasePetStatistic?: {
    standard: string;
    ratio: number;
    count: number;
  }[];

  characterPetStatistic?: {
    standard: string;
    ratio: number;
    count: number;
  }[];
}

const colorScheme = [
  `${theme.palette.Normal200}`,
  `${theme.palette.Normal500}`,
  `${theme.palette.Normal600}`,
  `${theme.palette.Normal800}`,
  `${theme.palette.Normal900}`,
  `${theme.palette.Gray300}`,
];

export const PetStatistic = ({
  agePetStatistic,
  characterPetStatistic,
  diseasePetStatistic,
}: PetStatisticProps) => {
  const [selectedTab, setSelectedTab] = useState<'나이' | '질환' | '성격'>(
    '나이',
  );
  // 각 탭에 해당하는 데이터 (Props로 전달된 데이터를 사용)
  const dataMap = {
    나이: agePetStatistic,
    질환: diseasePetStatistic,
    성격: characterPetStatistic,
  };

  // 선택된 탭에 맞는 데이터가 없으면 빈 배열 반환
  const chartData = (dataMap[selectedTab] ?? []).map((item, index) => ({
    id: item.standard,
    label: item.standard,
    value: item.count,
    ratio: item.ratio,
    color: colorScheme[index % colorScheme.length], // 순환하여 색상 적용
  }));

  const handleToggleTab = (currTab: '나이' | '질환' | '성격') => {
    setSelectedTab(currTab);
  };

  return (
    <Flex direction="column">
      <Flex direction="column" align="flex-start" gap={8} padding="0 20px">
        <Text typo="Title2">반려견 통계</Text>
        <Text typo="Caption1">우리 매장에는 이런 아이들이 자주 왔어요.</Text>
      </Flex>
      <Flex
        height={37}
        justify="flex-start"
        backgroundColor={theme.palette.White}
        margin="24px 0 0"
      >
        <TabBarItem
          label="나이"
          selected={selectedTab === '나이'}
          typo={selectedTab === '나이' ? 'Title3' : 'Label3'}
          onClick={() => handleToggleTab('나이')}
        />
        <TabBarItem
          label="질환"
          selected={selectedTab === '질환'}
          typo={selectedTab === '질환' ? 'Title3' : 'Label3'}
          onClick={() => handleToggleTab('질환')}
        />
        <TabBarItem
          label="성격"
          selected={selectedTab === '성격'}
          typo={selectedTab === '성격' ? 'Title3' : 'Label3'}
          onClick={() => handleToggleTab('성격')}
        />
      </Flex>

      {/* 통계 상단 타이틀 */}
      <Flex justify="flex-start" padding="0 20px" margin="24px 0 0">
        {dataMap[selectedTab] && dataMap[selectedTab]?.length > 0 ? (
          <RelativeText typo="Title3">
            {PET_STATISTIC_MENT[selectedTab]?.[
              dataMap[selectedTab][0].standard
            ] ?? '다양한 아이들이 자주 와요!'}
            <TextHighlight width={selectedTab === '성격' ? '50px' : '62px'} />
          </RelativeText>
        ) : (
          <Text typo="Title3">아직 방문한 고객이 없어요😞</Text>
        )}
      </Flex>

      <Flex padding="0 20px" margin="28px 0 0" gap={48}>
        <Flex width={150} height={150}>
          <ResponsivePie
            data={chartData}
            innerRadius={0.9} // 파이 차트 안쪽 반지름 크기
            padAngle={1} // 조각 간의 간격
            cornerRadius={1} // 조각 모서리의 둥글기
            colors={({ data }) => data.color}
            enableArcLinkLabels={false} // 링크 레이블 표시 여부
            enableArcLabels={true} // 차트 안에 레이블 표시 여부
            arcLinkLabelsSkipAngle={10} // 링크 레이블이 보이려면 이 각도 이상일 때만 표시
            arcLabelsRadiusOffset={0.5} // 레이블이 원에서 떨어지는 거리
            arcLinkLabelsThickness={2} // 링크 레이블 두께
            arcLinkLabelsColor={{ from: 'color', modifiers: [['darker', 0.6]] }} // 링크 레이블 색상
            arcLabelsTextColor="transparent" // 레이블 텍스트 색상
            tooltip={() => null} // 툴팁 비활성화
          />
        </Flex>
        <WidthFitFlex direction="column" gap={6}>
          {chartData &&
            chartData.map((item) => (
              <BarColorFlex
                justify="space-between"
                color={item.color}
                key={item.label}
                width={130}
                height={22}
                padding="10px 10px 10px 16px"
              >
                <Text typo="Label3">{item.label}</Text>
                <Text typo="Label2" colorCode={theme.palette.Gray300}>
                  {item.ratio}%
                </Text>
              </BarColorFlex>
            ))}
        </WidthFitFlex>
      </Flex>
    </Flex>
  );
};

const BarColorFlex = styled(Flex)<{ color: string }>`
  border-left: 3px solid ${({ color }) => color};
`;

const RelativeText = styled(Text)`
  position: relative;
`;

const TextHighlight = styled.div<{ width: string }>`
  position: absolute;
  width: ${({ width }) => (width ? width : '62px')};
  height: 9px;
  background-color: ${theme.palette.Normal500};
  opacity: 0.5;
  left: -3px;
  top: 8px;
`;
