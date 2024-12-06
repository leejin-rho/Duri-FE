import { Flex, Text, theme } from "@duri-fe/ui";
import { parsePetInfo } from "@duri-fe/utils";
import styled from "@emotion/styled";


const DailyScheduleItem = () => {
  const petInfoStr = parsePetInfo({breed: '시츄', 'gender': 'F', weight: 7.3});
  return (
    <ItemWrapper height={50} justify="flex-start">
      <SideBar margin="0 3px" width={1} height={50} backgroundColor={theme.palette.Gray200}>
        <Dot width={7} height={7} backgroundColor={theme.palette.Normal600} borderRadius={7} />
      </SideBar>

      <Text typo="Label4" colorCode={theme.palette.Normal600} margin="0 16px 0 6px">12:00</Text>

      <Flex justify="space-between">
        <Text typo="Body2">신참이</Text>
        <Text typo="Body4" colorCode={theme.palette.Gray500}>{petInfoStr}</Text>
        <Text typo="Body4" >000쌤</Text>
      </Flex>
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

export default DailyScheduleItem;