import { Flex } from "@duri-fe/ui";
import styled from "@emotion/styled";
import { ScheduleType } from "@salon/Assets/types/home";

import DailyScheduleItem from "./DailyScheduleItem";

interface DailyScheduleProps {
  dailyScheduleData: ScheduleType[];
}

const DailySchedule = ({
  dailyScheduleData
}: DailyScheduleProps) => {
  return (
    <ScheduleWrapper direction="column" align="flex-start" justify="flex-start" padding="20px 14px">
      <ScheduleContainer direction="column" align="flex-start" justify="flex-start">
        {dailyScheduleData.map((schedule, index) => (
          <DailyScheduleItem 
            key={index}
            startTime={schedule.startTime}
            petName={schedule.petName}
            breed={schedule.breed}
            gender={schedule.gender}
            weight={schedule.weight}
            groomerName={schedule.groomerName}
          />
        ))}
      </ScheduleContainer>
    </ScheduleWrapper>
  )
}

const ScheduleWrapper = styled(Flex)`
  overflow-y: hidden;
`

const ScheduleContainer = styled(Flex)`
  overflow-y: scroll;
`;

export default DailySchedule;