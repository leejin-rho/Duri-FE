import React from 'react';

import { Button, Flex, MobileLayout, Text } from '@duri-fe/ui';
import styled from '@emotion/styled';

interface WelcomeProps {
  onNext: () => void;
}

const Welcome: React.FC<WelcomeProps> = ({ onNext }) => {
  const userName = '심숭숭'; // 네이버로부터 받은 미용사 이름

  return (
    <MobileLayout>
      <Container
        direction="column"
        justify="center"
        align="center"
        padding="107px 20px 0 20px"
      >
        <Wrapper direction="column">
          <Text typo="Heading2" align="center">
            {userName}님 안녕하세요!
          </Text>
          <Text typo="Heading2" align="center">
            두리묭실에 오신 것을 환영합니다
          </Text>
        </Wrapper>
        <Button width="335px" height="54px" onClick={onNext}>
          입력하러 가기
        </Button>
      </Container>
    </MobileLayout>
  );
};

export const Container = styled(Flex)`
  height: 90vh;
`;
export const Wrapper = styled(Flex)`
  flex-grow: 1;
`;

export default Welcome;
