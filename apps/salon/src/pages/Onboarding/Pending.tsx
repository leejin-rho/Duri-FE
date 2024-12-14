import { Doori, Flex, MobileLayout, Text, theme } from '@duri-fe/ui';
import styled from '@emotion/styled';

const OnboardingPendingPage = () => {
  return (
    <MobileLayout>
      <Container direction="column" gap={20}>
        <LogoWrapper direction="column">
          {/** TODO: 로고 */}
          <Doori height={40} />
        </LogoWrapper>
        <Title colorCode={theme.palette.Black}>가입이 완료되었어요!</Title>
        <Text typo="Body4" colorCode={theme.palette.Gray300} textAlign="center">
          가입 허가까지 3일~7일정도 소요돼요. <br />
          허가가 완료되면 네이버 메일로 알려드릴게요!
        </Text>
      </Container>
    </MobileLayout>
  );
};

const Container = styled(Flex)`
  flex-grow: 1;
`;

const LogoWrapper = styled(Flex)`
  margin-bottom: 40px;
`;

const Title = styled(Text)`
  font-size: 24px;
  font-weight: 600;
`;

export default OnboardingPendingPage;
