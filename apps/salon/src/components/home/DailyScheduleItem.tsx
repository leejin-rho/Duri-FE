import { Flex, Text, theme, WidthFitFlex } from "@duri-fe/ui";
import { parsePetInfo } from "@duri-fe/utils";
import styled from "@emotion/styled";

interface DailyScheduleItemProps {
  startTime: string;
  petName: string;
  breed: string;
  gender: string;
  weight: number;
  groomerName: string;
}


const DailyScheduleItem = ({
  startTime,
  petName,
  breed,
  gender,
  weight,
  groomerName
}: DailyScheduleItemProps) => {
  const petInfoStr = parsePetInfo({breed: breed, 'gender': gender, weight: weight});
  return (
    <ItemWrapper height={50} justify="flex-start" gap={16} padding="0 6px 0 0">
      <WidthFitFlex>
        <SideBar margin="0 10px 0 3px" width={1} height={50} backgroundColor={theme.palette.Gray200}>
          <Dot width={7} height={7} backgroundColor={theme.palette.Normal600} borderRadius={7} />
        </SideBar>

        <Flex width={40} justify="flex-start">
          <Text typo="Label4" colorCode={theme.palette.Normal600}>{startTime}</Text>
        </Flex>

      </WidthFitFlex>

      <NameWrapper justify="space-between">
        <Text typo="Body2">{petName}</Text>
        <Text typo="Body4" colorCode={theme.palette.Gray500}>{petInfoStr}</Text>
        <Text typo="Body4">{groomerName}쌤</Text>
      </NameWrapper>
    </ItemWrapper>
  )
}

const SideBar = styled(Flex)`
  position: relative;
`

const Dot = styled(Flex)`
  position: absolute;
`

const ItemWrapper = styled(Flex)`
  flex-shrink: 0;
`

const NameWrapper = styled(Flex)`
  flex-wrap: wrap;
`

export default DailyScheduleItem;