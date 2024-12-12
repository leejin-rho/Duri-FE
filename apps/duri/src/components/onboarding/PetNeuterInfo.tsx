import { useState } from 'react';
import { Control, Controller } from 'react-hook-form';

import { Button, Flex, Text, theme } from '@duri-fe/ui';

import { FormData } from '.';

interface PetNeuterInfoProps {
  control: Control<FormData>;
}

const PetNeuterInfo = ({ control }: PetNeuterInfoProps) => {
  const [isNeutered, setIsNeutered] = useState<boolean | undefined>();

  const handleClickButton = (
    field: {
      onChange: (value: boolean) => void;
      value: boolean;
      name: string;
    },
    value: boolean,
  ) => {
    field.onChange(value);
    setIsNeutered(value);
  };

  const options = [
    { label: '네, 했어요!', value: true },
    { label: '아니요, 아직 안했어요.', value: false },
  ];

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
            {options.map(({ label, value }) => (
              <Button
                key={value ? 'yes' : 'no'}
                width="fit-content"
                height="43px"
                bg={
                  isNeutered === value
                    ? theme.palette.Black
                    : theme.palette.White
                }
                fontColor={
                  isNeutered === value
                    ? theme.palette.White
                    : theme.palette.Black
                }
                typo="Body3"
                border={
                  isNeutered === value
                    ? `1px solid ${theme.palette.Black}`
                    : `1px solid ${theme.palette.Gray100}`
                }
                onClick={() => handleClickButton(field, value)}
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
