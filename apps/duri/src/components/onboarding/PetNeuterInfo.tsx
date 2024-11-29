import { useState } from 'react';
import { Control, Controller } from 'react-hook-form';

import { Button, Text, theme } from '@duri-fe/ui';

import { FormData } from '.';

interface PetNeuterInfoProps {
  control: Control<FormData>;
}

const PetNeuterInfo = ({ control }: PetNeuterInfoProps) => {
  const [isNeutered, setIsNeutered] = useState<boolean | undefined>();

  const handleClickButton = (field: {
    onChange: (value: boolean) => void;
    value: boolean;
    name: string;
  }, value: boolean) => {
    field.onChange(value);
    setIsNeutered(value);
  };

  const options = [
    { label: '네, 했어요!', value: true },
    { label: '아니요, 아직 안했어요.', value: false },
  ];

  return (
    <>
      <Text typo="Heading2" justify="flex-start">
        중성화 여부를 알려주세요!
      </Text>
      <Text typo="Body3" justify="flex-start" colorCode={theme.palette.Gray500}>
        등록한 반려견은 MY에서 변경할 수 있어요.
      </Text>

      <Controller
        name="isNeutered"
        control={control}
        rules={{
          validate: (value) =>
            value !== undefined || '중성화 여부를 선택해주세요.',
        }}
        render={({ field }) => (
          <>
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
                typo="Body2"
                border={
                  isNeutered === value
                    ? 'none'
                    : `1px solid ${theme.palette.Gray100}`
                }
                onClick={() => handleClickButton(field, value)}
              >
                {label}
              </Button>
            ))}
          </>
        )}
      />
    </>
  );
};

export default PetNeuterInfo;
