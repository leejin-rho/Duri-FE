import React from 'react';

import { Button, MobileLayout } from '@duri-fe/ui';

interface InstructionProps {
  onNext: () => void;
}

const Instruction: React.FC<InstructionProps> = ({ onNext }) => {
  return (
    <MobileLayout>
        <h2>두리몽실 서비스에 등록하기 위해 매장 정보가 필요합니다.</h2>
        <Button onClick={onNext}>입력하러 가기</Button>
    </MobileLayout>
  );
};

export default Instruction;
