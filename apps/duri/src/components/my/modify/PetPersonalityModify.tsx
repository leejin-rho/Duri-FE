import { useState } from 'react';
import { Control, Controller, UseFormSetValue } from 'react-hook-form';

import { personalityOptions } from '@duri/assets/data/pet';
import { FormData } from '@duri/pages/My/MyPetModify';
import { Button, Flex, HeightFitFlex, Text, theme } from '@duri-fe/ui';
import styled from '@emotion/styled';

export const PetPersonalityModify = ({
  control,
  getStringArrayValues,
  setValue,
}: {
  control: Control<FormData>;
  setValue: UseFormSetValue<FormData>;
  getStringArrayValues: (name: keyof FormData) => string[];
}) => {
  const [personalityList, setPersonalityList] = useState<string[]>(
    getStringArrayValues('character'),
  );
  const handlePersonalityToggle = (key: string) => {
    if (personalityList.includes(key)) {
      setPersonalityList(
        personalityList.filter((disease: string) => disease !== key),
      );
    } else {
      setPersonalityList([...personalityList, key]);
    }
    setValue('character', personalityList);
  }
  return (
    <Flex direction="column" align="flex-start" margin="17px 0 0 0">
      <Text typo="Title3">성격</Text>
      <Controller
        name="character"
        control={control}
        rules={{
          validate: (value: string[]) =>
            value.length > 0 || '성격에 대해 알려주세요.',
        }}
        render={() => (
          <FitFlex justify="flex-start" gap={8} margin="19px 0 0 0">
            {personalityOptions.map(({ key, label }) => (
              <Button
                key={key}
                typo="Body3"
                width="fit-content"
                height="43px"
                bg={
                  personalityList.includes(key)
                    ? theme.palette.Black
                    : theme.palette.White
                }
                fontColor={
                  personalityList.includes(key)
                    ? theme.palette.White
                    : theme.palette.Black
                }
                border={
                  personalityList.includes(key)
                    ? `1px solid ${theme.palette.Black}`
                    : `1px solid ${theme.palette.Gray100}`
                }
                onClick={() => handlePersonalityToggle(key)}
              >
                {label}
              </Button>
            ))}{' '}
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
