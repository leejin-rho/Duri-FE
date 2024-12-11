import { Button, Flex, theme } from '@duri-fe/ui';
import styled from '@emotion/styled';

import { TimeType } from '../../types';

interface TimeTableProps {
  timeList: string[];
  onSelect?: (key: string, value: boolean) => void;
  selectedTimeList: TimeType;
  reservationTimeList: TimeType;
  // color?: string;
}

export const TimeTableGroomer = ({
  timeList,
  onSelect,
  selectedTimeList,
  reservationTimeList,
  // color = 'default',
}: TimeTableProps) => {
  const handleReserve = (index: number, isSelected: boolean, isReserved: boolean) => {
    if (onSelect && isSelected) {
      const key = `time${9 + index}`;
      onSelect(key, !isReserved);
    }
  };

  return (
    <Flex align="center">
      <TimeWrapper>
        {timeList?.map((time, index) => {
          const key = `time${9 + index}` as keyof TimeType;
          const isSelected = selectedTimeList[key];
          const isReserved = reservationTimeList[key];

          return (
              onSelect ? (
                <Button
                  key={time}
                  width="72px"
                  height="41px"
                  bg={isReserved ? theme.palette.Black : isSelected ? theme.palette.Normal500 : theme.palette.Gray_White}
                  fontColor={isReserved ? theme.palette.White : isSelected ? theme.palette.Normal700 : theme.palette.Gray300}
                  typo={isSelected ? 'Label2' : 'Caption1'}
                  border={isReserved ? 'none' : isSelected ? `1px solid ${theme.palette.Normal700}` : 'none'}
                  borderRadius="4px"
                  onClick={() => handleReserve(index, isSelected, isReserved)}
                  disabled={!isSelected}
                >
                  {time}
                </Button>
              ) : (
                <DefaultCursorButton
                  key={time}
                  width="72px"
                  height="41px"
                  bg={isSelected ? theme.palette.Normal500 : theme.palette.Gray_White}
                  fontColor={isSelected ? theme.palette.Normal700 : theme.palette.Gray300}
                  typo={isSelected ? 'Label2' : 'Caption1'}
                  border={isSelected ? `1px solid ${theme.palette.Normal700}` : 'none'}
                  borderRadius="4px"
                >
                  {time}
                </DefaultCursorButton>
              )
          );
        })}
      </TimeWrapper>
    </Flex>
  );
};

const TimeWrapper = styled.div`
  display: grid;
  gap: 8px;
  width: fit-content;
  margin: 12px 0 0 0;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
`;

const DefaultCursorButton = styled(Button)`
  cursor: default !important;
`;
