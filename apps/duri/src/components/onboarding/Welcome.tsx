import React from 'react';

import { Flex, Text } from '@duri-fe/ui';
import styled from '@emotion/styled';

interface WelcomeProps {
  userName: string;
  show: boolean;
}

const Welcome = ({ userName, show }: WelcomeProps) => {
  return (
    <Container show={show} direction="column">
      <Wrapper direction="column">
        <Text typo="Heading" align="center">
          {userName}님 안녕하세요!
        </Text>
        <Text typo="Heading" align="center">
          두리묭실에 오신 것을 환영합니다 👋🏻
        </Text>
      </Wrapper>
    </Container>
  );
};

export const Container = styled(Flex)<{ show: boolean }>`
  flex-grow: 1;
  opacity: ${({ show }) => (show ? 1 : 0)};
  z-index: ${({ show }) => (show ? 1000 : 0)};
  transition: opacity 0.5s;
  position: absolute;
  max-width: 375px;
`;

export const Wrapper = styled(Flex)`
  flex-grow: 1;
`;

export default Welcome;
