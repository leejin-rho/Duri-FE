import {
  Control,
  Controller,
  UseFormSetValue,
  useWatch,
} from 'react-hook-form';

import { DISEASE_OPTION_LIST } from '@duri/constants/pet';
import { FormData } from '@duri/pages/My/MyPetModify';
import { Button, Flex, HeightFitFlex, Text, theme } from '@duri-fe/ui';
import styled from '@emotion/styled';

export const PetDiseaseModify = ({
  control,
  setValue,
}: {
  control: Control<FormData>;
  setValue: UseFormSetValue<FormData>;
}) => {
  const diseaseList = useWatch({
    control,
    name: 'diseases', // 'character' 필드를 감시
    defaultValue: [], // 기본값 설정
  });

  const handleDiseaseToggle = (key: string) => {
    const updatedList = diseaseList.includes(key)
      ? diseaseList.filter((item: string) => item !== key)
      : [...diseaseList, key];

    setValue('diseases', updatedList); // 폼 상태 업데이트
  };

  return (
    <Flex direction="column" align="flex-start" margin="17px 0 0 0">
      <Text typo="Title3">질환</Text>
      <Controller
        name="diseases"
        control={control}
        rules={{
          validate: (value: string[]) =>
            value.length > 0 || '성격에 대해 알려주세요.',
        }}
        render={({ field }) => (
          <FitFlex justify="flex-start" gap={8} margin="19px 0 0 0">
            {DISEASE_OPTION_LIST.map(({ key, label }) => (
              <Button
                key={key}
                typo="Body3"
                width="fit-content"
                height="43px"
                bg={
                  field.value?.includes(key)
                    ? theme.palette.Black
                    : theme.palette.White
                }
                fontColor={
                  field.value?.includes(key)
                    ? theme.palette.White
                    : theme.palette.Black
                }
                border={
                  field.value?.includes(key)
                    ? `1px solid ${theme.palette.Black}`
                    : `1px solid ${theme.palette.Gray100}`
                }
                onClick={() => handleDiseaseToggle(key)}
              >
                {label}
              </Button>
            ))}
          </FitFlex>
        )}
      />
    </Flex>
  );
};

const FitFlex = styled(HeightFitFlex)`
  max-width: 375px;
  width: 100%;
  flex-wrap: wrap;
  word-break: break-all;
`;
