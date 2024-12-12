import { useState } from 'react';
import { Control, Controller } from 'react-hook-form';

import { Button, Flex, Text, theme } from '@duri-fe/ui';

import { FormData } from '.';

interface PetGenderInfoProps {
  control: Control<FormData>;
}

const PetGenderInfo = ({ control }: PetGenderInfoProps) => {
  const [gender, setGender] = useState<string>('');

  const handleClickButton = (
    field: {
      onChange: (value: string) => void;
      value: string;
      name: string;
    },
    value: string,
  ) => {
    field.onChange(value);
    setGender(value);
  };

  const options = [
    { label: '왕자님', value: 'M' },
    { label: '공주님', value: 'F' },
  ];

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

      <Flex justify="flex-start">
        <Controller
          name="gender"
          control={control}
          rules={{ required: '성별을 선택해주세요.' }}
          render={({ field }) => (
            <Flex margin="47px 0" justify="flex-start" gap={8}>
              {options.map(({ label, value }) => (
                <Button
                  key={value}
                  width="fit-content"
                  height="43px"
                  bg={
                    gender === value ? theme.palette.Black : theme.palette.White
                  }
                  fontColor={
                    gender === value ? theme.palette.White : theme.palette.Black
                  }
                  typo="Body3"
                  border={
                    gender === value
                      ? `1px solid ${theme.palette.Black}`
                      : `1px solid ${theme.palette.Gray100}`
                  }
                  onClick={() =>
                    handleClickButton(field, gender === value ? '' : value)
                  }
                >
                  {label}
                </Button>
              ))}
            </Flex>
          )}
        />
      </Flex>
    </Flex>
  );
};

export default PetGenderInfo;
