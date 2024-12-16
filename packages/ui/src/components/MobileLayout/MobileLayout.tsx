import React from 'react';

import { Flex, theme } from '@duri-fe/ui';
import styled from '@emotion/styled';

interface MobileLayoutProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

export const MobileLayout = ({
  children,
  backgroundColor = `${theme.palette.White}`,
}: MobileLayoutProps) => {
  return (
    <Container
      direction="column"
      margin="0 auto"
      justify="flex-start"
      align="flex-start"
      backgroundColor={backgroundColor}
    >
      {children}
    </Container>
  );
};

const Container = styled(Flex)`
  min-height: 100vh;
  box-sizing: border-box;

  @media (min-width: 480px) {
    max-width: 375px;
  }
`;
