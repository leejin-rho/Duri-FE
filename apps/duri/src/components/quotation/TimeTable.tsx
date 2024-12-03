import { RequestProps, TimeProps } from '@duri/assets/types/request';
import {
  Button,
  theme,
  WidthFitFlex,
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
      <WidthFitFlex align="center">
        <TimeWrapper
          justify="center"
          gap={8}
          //   width="315px"
          margin="16px 0 0 0"
        >
          {timeList?.map((time, index) => {
            const key = `time${9 + index}` as keyof TimeProps;
            const isSelected = selectedTimeList[key];
            // 4개마다 새로운 줄을 만들어서 렌더링
            return (
              <Button
                key={time}
                width="72px"
                height="41px"
                bg={isSelected ? theme.palette.Normal500 : theme.palette.Gray20}
                fontColor={
                  isSelected ? theme.palette.Normal800 : theme.palette.Gray300
                }
                typo="Label2"
                borderRadius="4px"
                onClick={() => handleSelect(index, isSelected)}
                border={
                  isSelected
                    ? `1px solid ${theme.palette.Normal700}`
                    : `1px solid ${theme.palette.Gray20}`
                }
              >
                {time}
              </Button>
            );
          })}
        </TimeWrapper>
      </WidthFitFlex>
  );
};

export default TimeTable;

const TimeWrapper = styled(WidthFitFlex)`
  flex-wrap: wrap;
  width: fit-content;
`;
