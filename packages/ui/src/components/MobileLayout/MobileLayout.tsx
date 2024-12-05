import React from 'react';

import { Flex, theme } from '@duri-fe/ui';
import styled from '@emotion/styled';

export const MobileLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container
      direction="column"
      margin="0 auto"
      justify="flex-start"
      align="flex-start"
      backgroundColor={theme.palette.White}
    >
      {children}
    </Container>
  );
};

const Container = styled(Flex)`
  max-width: 375px;
  min-height: 100vh;
  box-sizing: border-box;
`;
