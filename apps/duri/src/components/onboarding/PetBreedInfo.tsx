import React from 'react';
import { Control, Controller } from 'react-hook-form';

import { breeds } from '@duri/assets/data';
import { Dropdown, Flex, Text, theme } from '@duri-fe/ui';

import { FormData } from '.';

interface PetBreedInfoProps {
  control: Control<FormData>;
}

const PetBreedInfo = ({ control }: PetBreedInfoProps) => {
  return (
    <Flex direction="column" align="flex-start" gap={28}>
      <Text typo="Heading" justify="flex-start">
        반려견의 품종이 어떻게 되나요?
      </Text>
      <Text
        typo="Caption1"
        justify="flex-start"
        colorCode={theme.palette.Gray500}
      >
        등록한 반려견은 MY에서 변경할 수 있어요.
      </Text>
      <Controller
        name="breed"
        control={control}
        rules={{ required: '품종을 선택해주세요.' }}
        render={({ field }) => (
          <Flex margin="26px 0" justify="flex-start">
            <Dropdown
              options={breeds}
              defaultValue="품종 선택"
              width={114}
              onSelect={field.onChange}
            />
          </Flex>
        )}
      />
    </Flex>
  );
};

export default PetBreedInfo;
