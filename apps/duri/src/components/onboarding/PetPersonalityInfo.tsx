import { Control, Controller } from 'react-hook-form';

import { Button, Flex, Text, theme } from '@duri-fe/ui';
import styled from '@emotion/styled';

import { FormData } from '.';

interface PetPersonalityInfoProps {
  control: Control<FormData>;
  toggleArrayValue: (field: keyof FormData, value: string) => void;
  personalityList: string[]; // 상위 컴포넌트에서 전달된 리스트 사용
  name: string;
}

const PetPersonalityInfo = ({
  control,
  toggleArrayValue,
  personalityList, // 상위에서 전달된 리스트 사용
  name,
}: PetPersonalityInfoProps) => {
  // 성격 목록
  const personalityOptions = [
    '예민해요',
    '낯가려요',
    '입질이 있어요',
    '사람을 좋아해요',
    '얌전해요',
    '낯선 손길은 무서워요',
  ];

  // 성격 선택 토글 처리 함수
  const handleToggle = (value: string) => {
    const currentValues = [...personalityList]; // 현재 선택된 값들을 복사

    if (currentValues.includes(value)) {
      // 이미 포함된 값이면 제거
      toggleArrayValue('character', value); // 상위에서 상태 업데이트
    } else {
      // 포함되지 않은 값이면 추가
      toggleArrayValue('character', value); // 상위에서 상태 업데이트
    }
  };

  return (
    <Flex direction="column" align="flex-start" gap={28}>
      <Text typo="Heading2" justify="flex-start">
        {name}는 <br />
        어떤 성격을 가지고 있나요?
      </Text>
      <Text typo="Caption1" justify="flex-start" colorCode={theme.palette.Gray500}>
        입력된 성격은 MY에서 변경가능해요.
      </Text>
      <Controller
        name="character"
        control={control}
        rules={{
          validate: (value: string[]) =>
            value.length > 0 || '성격에 대해 알려주세요.',
        }}
        render={() => (
          <FitFlex justify='flex-start' gap={8} margin='47px 0'>
            {personalityOptions.map((value) => (
              <Button
                key={value}
                typo='Body3'
                width='fit-content'
                height="43px"
                bg={
                  personalityList.includes(value)
                    ? theme.palette.Black
                    : theme.palette.White
                }
                fontColor={
                  personalityList.includes(value)
                    ? theme.palette.White
                    : theme.palette.Black
                }
                border={
                  personalityList.includes(value)
                    ? `1px solid ${theme.palette.Black}`
                    : `1px solid ${theme.palette.Gray100}`
                }
                onClick={() => handleToggle(value)}
              >
                {value}
              </Button>
            ))}
          </FitFlex>
        )}
      />
    </Flex>
  );
};

export default PetPersonalityInfo;

const FitFlex = styled(Flex)`
  max-width: 375px;
  width: 100%;
  flex-wrap: wrap;
  word-break: break-all;
`;
