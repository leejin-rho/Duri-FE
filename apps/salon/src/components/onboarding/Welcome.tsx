import React from 'react';

import { Button, Flex, HeightFitFlex, Text } from '@duri-fe/ui';
import styled from '@emotion/styled';

interface WelcomeProps {
  onNext: () => void;
}

const Welcome = ({ onNext }: WelcomeProps) => {
  const userName = '심숭숭'; // 네이버로부터 받은 미용사 이름

  return (
    <Container
      direction="column"
    >
      <Wrapper direction="column">
        <Text typo="Heading2" align="center">
          {userName}님 안녕하세요!
        </Text>
        <Text typo="Heading2" align="center">
          두리묭실에 오신 것을 환영합니다 👋🏻
        </Text>
      </Wrapper>

      <ButtonWrapper padding='0 20px'>
        <Button onClick={onNext}>
          입력하러 가기
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export const Container = styled(Flex)`
  flex-grow: 1;
`;

export const Wrapper = styled(Flex)`
  flex-grow: 1;
`;

export const ButtonWrapper = styled(HeightFitFlex)`
  position: absolute;
  bottom: 40px;
`;

export default Welcome;
