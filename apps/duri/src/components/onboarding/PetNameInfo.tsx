import React, { useState } from 'react';
import { Control, UseFormRegister, UseFormTrigger } from 'react-hook-form';

import { Button, Flex, Text, TextField, theme } from '@duri-fe/ui';

import { FormData } from '.';

interface PetNameInfoProps {
  control: Control<FormData>;
  register: UseFormRegister<FormData>;
  trigger: UseFormTrigger<FormData>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const PetNameInfo = ({ register, trigger, setStep }: PetNameInfoProps) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(true); // 버튼 활성화 상태 관리

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();
    setIsButtonDisabled(value.length === 0); // 입력값이 없으면 비활성화
  };

  const handleNextButton = async () => {
    const isValid = await trigger('name'); // 유효성 검사
    if (isValid) {
      setStep((prev) => prev + 1); // 다음 단계로 이동
    }
  };

  return (
    <Flex direction="column" align="flex-start" gap={28}>
      <Text typo="Heading" justify="flex-start">
        반려견의 <br />
        이름을 입력해주세요
      </Text>
      <Text
        typo="Caption1"
        justify="flex-start"
        colorCode={theme.palette.Gray500}
      >
        등록한 반려견은 MY에서 변경할 수 있어요.
      </Text>
      <Text
        typo="Caption1"
        justify="flex-start"
        colorCode={theme.palette.Gray500}
      >
        Tip! <br />
        반려견 이름에서 ‘~이&apos;를 포함해서 적어주세요. <br />
        필요없다면 그대로 적어주세요.
      </Text>
      <Text
        typo="Caption1"
        justify="flex-start"
        colorCode={theme.palette.Gray500}
      >
        ex. 신참 &gt; 신참이 <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 초코 &gt;
        초코
      </Text>
      <Flex justify="center" gap={8} margin="66px 0 0 0">
        <TextField
          placeholder="반려견 이름"
          placeholderTypo={theme.typo.Caption1}
          isRound={true}
          width={172}
          height={50}
          fontColor={theme.palette.Black}
          {...register('name', { required: '이름을 입력해주세요' })}
          onChange={handleInputChange} // 입력값 변화 감지
        />
        {isButtonDisabled ? (
          <Button
            width="66px"
            height="50px"
            typo="Label2"
            bg={theme.palette.Gray50}
          >
            완료
          </Button>
        ) : (
          <Button
            width="66px"
            height="50px"
            onClick={handleNextButton}
            typo="Label2"
          >
            완료
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default PetNameInfo;
