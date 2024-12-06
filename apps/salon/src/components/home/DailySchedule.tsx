import { Flex } from "@duri-fe/ui";
import styled from "@emotion/styled";

import DailyScheduleItem from "./DailyScheduleItem";

const DailySchedule = () => {
  return (
    <ScheduleWrapper direction="column" align="flex-start" justify="flex-start" padding="20px 14px">
      <ScheduleContainer direction="column" align="flex-start" justify="flex-start">
        <DailyScheduleItem />
        <DailyScheduleItem />
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