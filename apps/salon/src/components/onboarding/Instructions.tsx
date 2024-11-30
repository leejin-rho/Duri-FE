import React from 'react';

import { Button, Flex, MobileLayout, Text } from '@duri-fe/ui';
import styled from '@emotion/styled';

interface InstructionProps {
  onNext: () => void;
}

const Instruction: React.FC<InstructionProps> = ({ onNext }) => {
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
            두리묭실 서비스에 등록하기 위해
          </Text>
          <Text typo="Heading2" align="center">
            매장 정보의 등록이 필요해요
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

export default Instruction;
