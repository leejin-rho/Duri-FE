import { Control, Controller } from 'react-hook-form';

import { Dropdown, Flex, Text, theme } from '@duri-fe/ui';

import { FormData } from '.';

interface PetBirthYearInfoProps {
  control: Control<FormData>;
  name: string
}

const PetAgeInfo = ({ control, name }: PetBirthYearInfoProps) => {
  // 나이 리스트 생성 (현재 연도 - 0세부터 25세까지)
  const ageList = Array.from({ length: 26 }, (_, i) => {
    if (i === 0) return '0살 이하';
    else return i.toString() + '살';
  });

  return (
    <Flex direction="column" align="flex-start" gap={28} >
      <Text typo="Heading2" justify="flex-start">
        {name}의 <br />
        나이를 입력해주세요
      </Text>
      <Text typo="Label2" justify="flex-start" colorCode={theme.palette.Gray500}>미용실을 추천해주는 카테고리로 쓰여요.</Text>
      <Controller
        name="age"
        control={control}
        rules={{ required: '나이를 선택해주세요.' }}
        render={({ field }) => (
          <Dropdown
            options={ageList}
            defaultValue="나이 입력"
            width={100}
            onSelect={field.onChange}
          />
        )}
      />
    </Flex>
  );
};

export default PetAgeInfo;
