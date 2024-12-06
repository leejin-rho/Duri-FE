import { Approve, Button, Call, Flex, HeightFitFlex, Profile, Text, theme, WidthFitFlex, Write } from "@duri-fe/ui";
import styled from "@emotion/styled";

const OngoingGrooming = () => {
  return (
    <Flex direction="column" justify="flex-start">
      <Flex justify="flex-start" padding="0 0 0 20px" height={31} backgroundColor={theme.palette.Normal500}>
        <TitleText colorCode={theme.palette.Normal800}>진행중 시술</TitleText>
      </Flex>
      <Flex direction="column" justify="space-between" padding="12px 12px 12px 12px">
        {/** 반려견 정보 */}
        <Flex align="flex-start" justify="flex-start" padding="0 6px" gap={12}>
          <ProfileContainer width={64} height={64} backgroundColor={theme.palette.Gray20} borderRadius={20}>
            <Profile width={52} height={52} color={theme.palette.Gray200} />
          </ProfileContainer>
          <WidthFitFlex direction="column" justify="flex-start" align="flex-start" gap={8}>
            <HeightFitFlex justify="space-between">
              <Text typo="Title3" colorCode={theme.palette.Black}>김댕댕</Text>
              <Text typo="Title3" colorCode={theme.palette.Gray600}>2:00 PM</Text>
            </HeightFitFlex>
            <Text typo="Caption3" colorCode={theme.palette.Gray400}>시츄, 여아, 7세, 7.3kg</Text>
            <WidthFitFlex justify="flex-start" align="flex-start" gap={4}>
              <Write width={16} height={16} color={theme.palette.Gray500} />
              <MemoText typo="Caption3" colorCode={theme.palette.Gray500}>
                여기에 손님이 적은 메모노출됩니다. 최대 두줄 노출 가능.넘으면 쩜쩜쩜넘으면 쩜쩜쩜넘으면 쩜쩜쩜넘으면 쩜쩜쩜
              </MemoText>
            </WidthFitFlex>
          </WidthFitFlex>
        </Flex>

        {/** 버튼 */}
        <Flex height={38} gap={8}>
          <StyledButton
            borderRadius="8px"
            bg={theme.palette.Gray20}
          >
            <Call width={16} />
            <Text typo="Label2">보호자 전화</Text>
          </StyledButton>
          <StyledButton
            borderRadius="8px"
            bg={theme.palette.Black}
          >
            <Approve width={16} color={theme.palette.White} />
            <Text typo="Label2" colorCode={theme.palette.White}>미용 완료했어요</Text>
          </StyledButton>
        </Flex>

      </Flex>
    </Flex>
  );
}

const TitleText = styled(Text)` 
  font-weight: 500;
  font-size: 15px;
`;

const ProfileContainer = styled(Flex)`
  flex-shrink: 0;
`

const MemoText = styled(Text)`
  width: calc(100% - 20px);
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  white-space: normal;
`;

const StyledButton = styled(Button)`
  width: calc(50% - 4px);
  gap: 4px;
`

export default OngoingGrooming;