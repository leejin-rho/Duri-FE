import { RequestProps, TimeProps } from '@duri/assets/types/request';
import {
  Button,
  Flex,
  theme,
} from '@duri-fe/ui';
import styled from '@emotion/styled';

interface TimeTableProps {
  timeList: string[];
  onSelect: (key: string, value: boolean) => void;
  selectedTimeList: RequestProps;
}

const TimeTable = ({
  timeList,
  onSelect,
  selectedTimeList,
}: TimeTableProps) => {
  const handleSelect = (index: number, isSelected: boolean) => {
    const key = `time${9 + index}`; // 예: time9, time10, ...
    onSelect(key, !isSelected); // 상태 반전하여 전달
  };
  return (
      <Flex align="center">
        <TimeWrapper>
          {timeList?.map((time, index) => {
            const key = `time${9 + index}` as keyof TimeProps;
            const isSelected = selectedTimeList[key];
            // 4개마다 새로운 줄을 만들어서 렌더링
            return (
              <Button
                key={time}
                width="72px"
                height="41px"
                bg={isSelected ? theme.palette.Black : theme.palette.Gray20}
                fontColor={
                  isSelected ? theme.palette.White : theme.palette.Black
                }
                typo="Label2"
                borderRadius="4px"
                onClick={() => handleSelect(index, isSelected)}
              >
                {time}
              </Button>
            );
          })}
        </TimeWrapper>
      </Flex>
  );
};

export default TimeTable;

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
