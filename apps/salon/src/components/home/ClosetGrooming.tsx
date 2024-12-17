// import { BottomSheet } from "react-spring-bottom-sheet";

import {
  Approve,
  Button,
  Call,
  Flex,
  HeightFitFlex,
  ProfileImage,
  Text,
  theme,
  WidthFitFlex,
  Write,
} from '@duri-fe/ui';
import { parsePetInfo, parseTimeStr } from '@duri-fe/utils';
import styled from '@emotion/styled';

interface ClosetGroomingProps {
  petName: string;
  breed: string;
  gender: string;
  age: number;
  weight: number;
  memo: string;
  userPhone: string;
  quotationId: number;
  startTime: string;
  isNow: boolean | null;
  handleOpenCompleteSheet?: () => void;
}

const ClosetGrooming = ({
  petName,
  breed,
  gender,
  age,
  weight,
  memo,
  userPhone,
  // quotationId,
  startTime,
  isNow,
  handleOpenCompleteSheet,
}: ClosetGroomingProps) => {
  const petInfoStr = parsePetInfo({
    breed: breed,
    gender: gender,
    weight: weight,
    age: age,
  });
  const startTimeStr = parseTimeStr(startTime);

  const handleCallUser = (userPhone: string) => {
    window.open(`tel:${userPhone}`);
  };

  return (
    <Flex direction="column" justify="flex-start">
      <Title
        justify="flex-start"
        padding="0 0 0 20px"
        height={31}
        backgroundColor={theme.palette.Normal500}
      >
        <TitleText colorCode={theme.palette.Normal800}>
          {isNow ? '진행중인 시술' : '예정된 시술'}
        </TitleText>
      </Title>
      <Flex
        direction="column"
        justify="space-between"
        padding="12px 12px 12px 12px"
      >
        {/** 반려견 정보 */}
        <Flex align="flex-start" justify="flex-start" padding="0 6px" gap={12}>
          <ProfileImage
            width={64}
            height={64}
            borderRadius={20}
            iconSize={52}
          />
          <Flex
            direction="column"
            justify="flex-start"
            align="flex-start"
            gap={8}
          >
            <HeightFitFlex justify="space-between">
              <Text typo="Title3" colorCode={theme.palette.Black}>
                {petName}
              </Text>
              <Text typo="Title3" colorCode={theme.palette.Gray600}>
                {startTimeStr}
              </Text>
            </HeightFitFlex>
            <Text typo="Caption3" colorCode={theme.palette.Gray400}>
              {petInfoStr}
            </Text>
            <WidthFitFlex justify="flex-start" align="flex-start" gap={4}>
              <Write width={16} height={16} color={theme.palette.Gray500} />
              <MemoText typo="Caption3" colorCode={theme.palette.Gray500}>
                {memo}
              </MemoText>
            </WidthFitFlex>
          </Flex>
        </Flex>

        {/** 버튼 */}
        <Flex height={38} gap={8}>
          <StyledButton
            borderRadius="8px"
            bg={theme.palette.Gray20}
            onClick={() => handleCallUser(userPhone)}
          >
            <Call width={16} />
            <Text typo="Label2">보호자 전화</Text>
          </StyledButton>
          {isNow ? (
            <StyledButton
              borderRadius="8px"
              bg={theme.palette.Black}
              onClick={handleOpenCompleteSheet}
            >
              <Approve width={16} color={theme.palette.White} />
              <Text typo="Label2" colorCode={theme.palette.White}>
                미용 완료했어요
              </Text>
            </StyledButton>
          ) : (
            <StyledButton
              borderRadius="8px"
              bg={theme.palette.Gray100}
              disabled
            >
              <Approve width={16} color={theme.palette.White} />
              <Text typo="Label2" colorCode={theme.palette.White}>
                미용 완료했어요
              </Text>
            </StyledButton>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

const Title = styled(Flex)`
  flex-shrink: 0;
`;

const TitleText = styled(Text)`
  font-weight: 500;
  font-size: 15px;
`;

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
`;

export default ClosetGrooming;
