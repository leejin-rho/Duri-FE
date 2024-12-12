import {
  Flex,
  MobileLayout,
  NaverLogo,
  SpeechBallonContainer,
  Text,
  theme,
} from '@duri-fe/ui';
import { salonNaverLoginRedirect } from '@duri-fe/utils';
import styled from '@emotion/styled';

const LoginPage = () => {
  const handleNaverLogin = () => {
    salonNaverLoginRedirect();
  };

  return (
    <MobileLayout>
      <Container direction="column">
        {/** 로고 */}
        <Logo src="/images/logo.png" />
        <Flex direction="column" margin="24px 0 0 0">
          <Text typo="Heading">두리묭실로</Text>
          <Text typo="Heading">쉽고 빠르게 예약해요!</Text>
          <Text
            typo="Body3"
            colorCode={theme.palette.Gray300}
            margin="8px 0 0 0"
          >
            최저가 예약부터 근처 미용샵까지
          </Text>
        </Flex>

        {/** 로그인 버튼 */}
        <Flex direction="column" margin="120px 0 0 0">
          <SpeechBallonContainer
            label="3초만에 시작하기 🚀"
            textColor={theme.palette.Gray400}
          />
          <LoginButton onClick={handleNaverLogin}>
            <NaverLogo />
          </LoginButton>
        </Flex>

        {/** 문의하기 */}
        <Contact>
          <Text typo="Body3" colorCode={theme.palette.Gray300}>
            문의하기
          </Text>
        </Contact>
      </Container>
    </MobileLayout>
  );
};

const Container = styled(Flex)`
  flex-grow: 1;
  position: relative;
`;

const Logo = styled.img``;

const LoginButton = styled.button`
  width: 60px;
  height: 60px;
  margin-top: 20px;
`;

const Contact = styled(Flex)`
  position: absolute;
  bottom: 50px;
  height: fit-content;
`;

export default LoginPage;
