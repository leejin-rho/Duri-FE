import { Control, Controller } from 'react-hook-form';

import { NEUTERED_OPTION_LIST } from '@duri/constants';
import { Button, Flex, Text, theme } from '@duri-fe/ui';

import { FormData } from '.';

interface PetNeuterInfoProps {
  control: Control<FormData>;
}

const PetNeuterInfo = ({ control }: PetNeuterInfoProps) => {
  const handleClickButton = (
    field: {
      onChange: (value: boolean) => void;
      value: boolean;
      name: string;
    },
    value: boolean,
  ) => {
    field.onChange(value);
  };

  return (
    <Flex direction="column" align="flex-start" gap={28}>
      <Text typo="Heading" justify="flex-start">
        중성화 여부를 알려주세요!
      </Text>
      <Text
        typo="Caption1"
        justify="flex-start"
        colorCode={theme.palette.Gray500}
      >
        등록한 반려견은 MY에서 변경할 수 있어요.
      </Text>

      <Controller
        name="neutering"
        control={control}
        rules={{
          validate: (value) =>
            value !== undefined || '중성화 여부를 선택해주세요.',
        }}
        render={({ field }) => (
          <Flex direction="column" align="flex-start" gap={8} margin="47px 0">
            {NEUTERED_OPTION_LIST.map(({ key, label }) => (
              <Button
                key={label}
                width="fit-content"
                height="43px"
                bg={
                  field.value === key
                    ? theme.palette.Black
                    : theme.palette.White
                }
                fontColor={
                  field.value === key
                    ? theme.palette.White
                    : theme.palette.Black
                }
                typo="Body3"
                border={
                  field.value === key
                    ? `1px solid ${theme.palette.Black}`
                    : `1px solid ${theme.palette.Gray100}`
                }
                onClick={() => handleClickButton(field, key)}
              >
                {label}
              </Button>
            ))}
          </Flex>
        )}
      />
    </Flex>
  );
};

export default PetNeuterInfo;
