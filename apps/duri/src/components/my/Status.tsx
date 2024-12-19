import { CallCenter, Flex, Text, theme } from '@duri-fe/ui';
import styled from '@emotion/styled';

interface StatusProps {
  reservationCnt: number;
  noShowCnt: number;
}

export const Status = ({ reservationCnt, noShowCnt }: StatusProps) => {
  return (
    <Flex
      borderRadius={16}
      backgroundColor={theme.palette.Normal500}
      padding="20px 0px"
      margin="0 0 22px 0"
    >
      <Flex direction="column" gap={15}>
        <Text typo="Caption2">누적예약</Text>
        <Text typo="Body2">
          {reservationCnt === -1 ? ' - ' : reservationCnt}건
        </Text>
      </Flex>
      <BorderFlex direction="column" gap={15}>
        <Text typo="Caption2">노쇼</Text>
        <Text typo="Body2">{noShowCnt === -1 ? ' - ' : noShowCnt}건</Text>
      </BorderFlex>
      <FlexButton direction="column" gap={9}>
        <Text typo="Caption2">고객센터</Text>
        <CallCenter width={25} height={25} />
      </FlexButton>
    </Flex>
  );
};

const FlexButton = styled(Flex)`
  cursor: pointer;
`;

const BorderFlex = styled(Flex)`
  border-left: solid 1.5px ${theme.palette.Normal600};
  border-right: solid 1.5px ${theme.palette.Normal600};
`;
