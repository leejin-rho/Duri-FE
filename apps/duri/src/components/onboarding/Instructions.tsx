import React from 'react';

import { Button, Flex, HeightFitFlex, Text } from '@duri-fe/ui';
import styled from '@emotion/styled';

interface InstructionProps {
  onNext: () => void;
  show: boolean;
}

const Instruction = ({ onNext, show }: InstructionProps) => {
  return (
    <Container show={show} direction="column">
      <Wrapper direction="column">
        <Text typo="Heading" align="center">
          두리묭실 서비스에 등록하기 위해
        </Text>
        <Text typo="Heading" align="center">
          반려견의 정보를 입력해주세요!
        </Text>
      </Wrapper>

      <ButtonWrapper padding="0 20px">
        <Button onClick={onNext}>입력하러 가기</Button>
      </ButtonWrapper>
    </Container>
  );
};

export const Container = styled(Flex)<{ show: boolean }>`
  flex-grow: 1;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transition: opacity 1s;
`;

export const Wrapper = styled(Flex)`
  flex-grow: 1;
`;

export const ButtonWrapper = styled(HeightFitFlex)`
  position: absolute;
  bottom: 40px;
`;

export default Instruction;
