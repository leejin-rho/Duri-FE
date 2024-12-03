import { Control, Controller } from 'react-hook-form';

import { Button, Flex, Text, theme } from '@duri-fe/ui';

import { FormData } from '.';

interface PetDiseaseInfoProps {
  control: Control<FormData>;
  toggleArrayValue: (field: keyof FormData, value: string) => void;
  diseaseList: string[];
  name: string;
}

const PetDiseaseInfo = ({
  control,
  toggleArrayValue,
  name,
  diseaseList,
}: PetDiseaseInfoProps) => {
  const diseaseOptions = [
    '피부 질환',
    '귀 염증',
    '관절 질환',
    '기저 질환',
    '딱히 없어요',
  ];

  // 성격 선택 토글 처리 함수
  const handleToggle = (value: string) => {
    const currentValues = [...diseaseList]; // 현재 선택된 값들을 복사

    if (currentValues.includes(value)) {
      // 이미 포함된 값이면 제거
      toggleArrayValue('disease', value); // 상위에서 상태 업데이트
    } else {
      // 포함되지 않은 값이면 추가
      toggleArrayValue('disease', value); // 상위에서 상태 업데이트
    }
  };
  return (
    <>
      <Controller
        name="disease"
        control={control}
        rules={{
          validate: (value: string[]) =>
            value.length > 0 || '질환에 대해 알려주세요.',
        }}
        render={() => (
          <Flex direction="column" align="flex-start" gap={28}>
            <Text typo="Heading2" justify="flex-start">
              {name}가 <br />
              갖고있는 질환이 있나요?
            </Text>
            <Text
              typo="Caption1"
              justify="flex-start"
              colorCode={theme.palette.Gray500}
            >
              입력된 성격은 MY에서 변경가능해요.
            </Text>
            <Flex direction="column" align="flex-start" gap={8} margin='47px 0'>
              {diseaseOptions.map((value) => (
                <Button
                  key={value}
                  typo='Body3'
                  width="fit-content"
                  height="43px"
                  bg={
                    diseaseList.includes(value)
                      ? theme.palette.Black
                      : theme.palette.White
                  }
                  fontColor={
                    diseaseList.includes(value)
                      ? theme.palette.White
                      : theme.palette.Black
                  }
                  border={
                    diseaseList.includes(value)
                      ? 'none'
                      : `1px solid ${theme.palette.Gray100}`
                  }
                  onClick={() => handleToggle(value)}
                >
                  {value}
                </Button>
              ))}
            </Flex>
          </Flex>
        )}
      />
    </>
  );
};

export default PetDiseaseInfo;
