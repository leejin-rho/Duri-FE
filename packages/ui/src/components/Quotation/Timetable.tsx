import { Button, Flex, theme } from '@duri-fe/ui';
import styled from '@emotion/styled';

import { TimeType } from '../../types';

interface TimeTableProps {
  timeList: string[];
  onSelect?: (key: string, value: boolean) => void;
  selectedTimeList: TimeType;
}

export const TimeTable = ({
  timeList,
  onSelect,
  selectedTimeList,
}: TimeTableProps) => {
  const handleSelect = (index: number, isSelected: boolean) => {
    if (onSelect) {
      const key = `time${9 + index}`;
      onSelect(key, !isSelected);
    }
  };
  return (
    <Flex align="center">
      <TimeWrapper>
        {timeList?.map((time, index) => {
          const key = `time${9 + index}` as keyof TimeType;
          const isSelected = selectedTimeList[key];
          return (
            onSelect ? (
              <Button
                key={time}
                width="72px"
                height="41px"
                bg={isSelected ? theme.palette.Black : theme.palette.Gray_White}
                fontColor={isSelected ? theme.palette.White : theme.palette.Gray300}
                typo={isSelected ? 'Label2' : 'Caption1'}
                borderRadius="4px"
                onClick={() => handleSelect(index, isSelected)}
              >
                {time}
              </Button>
            ) : (
              <DefaultCursorButton
                key={time}
                width="72px"
                height="41px"
                bg={isSelected ? theme.palette.Black : theme.palette.Gray_White}
                fontColor={isSelected ? theme.palette.White : theme.palette.Gray300}
                typo={isSelected ? 'Label2' : 'Caption1'}
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
