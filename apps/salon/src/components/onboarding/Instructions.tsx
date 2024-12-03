import React from 'react';

import { Button, Flex, HeightFitFlex, Text } from '@duri-fe/ui';
import styled from '@emotion/styled';

interface InstructionProps {
  onNext: () => void;
}

const Instruction: React.FC<InstructionProps> = ({ onNext }) => {
  return (
    <Container
      direction="column"
    >
      <Wrapper direction="column">
        <Text typo="Heading2" align="center">
          두리묭실 서비스에 등록하기 위해
        </Text>
        <Text typo="Heading2" align="center">
          매장 정보의 등록이 필요해요
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

export default Instruction;
