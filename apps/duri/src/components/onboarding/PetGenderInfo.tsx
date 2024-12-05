import { useState } from 'react';
import { Control, Controller } from 'react-hook-form';

import { Button, Flex, Text, theme } from '@duri-fe/ui';

import { FormData } from '.';

interface PetGenderInfoProps {
  control: Control<FormData>;
}

const PetGenderInfo = ({ control }: PetGenderInfoProps) => {
  const [gender, setGender] = useState<string>('');

  const handleClickButton = (field: {
    onChange: (value: string) => void;
    value: string;
    name: string;
  }, value: string) => {
    field.onChange(value);
    setGender(value);
  };

  const options = [
    { label: '왕자님', value: '남자' },
    { label: '공주님', value: '여자' },
  ];

  return (
    <Flex direction="column" align="flex-start" gap={28} >
      <Text typo="Heading2" justify="flex-start">
        반려견의 품종이 어떻게 되나요?
      </Text>
      <Text typo="Label2" justify="flex-start" colorCode={theme.palette.Gray500}>
        등록한 반려견은 MY에서 변경할 수 있어요.
      </Text>

      <Flex justify='flex-start' gap={8}>
      <Controller
        name="gender"
        control={control}
        rules={{ required: '성별을 선택해주세요.' }}
        render={({ field }) => (
          <>
            {options.map(({ label, value }) => (
              <Button
                key={value}
                width="fit-content"
                height="43px"
                bg={
                  gender === value
                    ? theme.palette.Black
                    : theme.palette.White
                }
                fontColor={
                  gender === value
                    ? theme.palette.White
                    : theme.palette.Black
                }
                typo="Body2"
                border={
                  gender === value
                    ? 'none'
                    : `1px solid ${theme.palette.Gray100}`
                }
                onClick={() =>
                  handleClickButton(field, gender === value ? '' : value)
                }
              >
                {label}
              </Button>
            ))}
          </>
        )}
      />
      </Flex>
    </Flex>
  );
};

export default PetGenderInfo;
