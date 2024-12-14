import { Control, Controller, UseFormSetValue } from 'react-hook-form';

import {
  BREEDS,
  GENDER_OPTION_LIST,
  NEUTERED_OPTION_LIST,
} from '@duri/constants';
import { FormData } from '@duri/pages/My/MyPetModify';
import { Button, Dropdown, Flex, Text, theme, WidthFitFlex } from '@duri-fe/ui';

import { PetDiseaseModify } from './PetDiseaseModify';
import { PetPersonalityModify } from './PetPersonalityModify';

const integerList = Array.from({ length: 41 }, (_, i) => i.toString()); // 정수 리스트
const decimalList = Array.from({ length: 10 }, (_, i) => i.toString()); // 소수 리스트
const ageList = Array.from({ length: 26 }, (_, i) => i);

export const PetModifyForm = ({
  control,
  setValue,
  getValues,
}: {
  control: Control<FormData>;
  setValue: UseFormSetValue<FormData>;
  getValues: (name: keyof FormData) => string | number | string[] | boolean;
}) => {
  // 드롭다운에서 선택된 값 업데이트!!!
  const handleBreedSelect = (value: string | number) => {
    if (typeof value === 'string') setValue('breed', value);
  };
  const handleGenderSelect = (value: string | number) => {
    if (typeof value === 'string') setValue('gender', value);
  };
  const handleNeuterSelect = (value: string | number | boolean) => {
    if (typeof value === 'boolean') setValue('neutering', value);
  };

  return (
    <Flex direction="column" gap={17} margin="23px 0 92px 0">
      <Flex justify="flex-start" gap={65}>
        <Text typo="Title3">이름</Text>
        <Controller
          name="name"
          control={control}
          render={({ field }) => <Text typo="Body3">{field.value}</Text>}
        />
      </Flex>
      <Flex justify="flex-start" gap={65}>
        <Text typo="Title3">견종</Text>
        <Controller
          name="breed"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={BREEDS}
              defaultValue={field.value}
              width={114}
              onSelect={handleBreedSelect}
            />
          )}
        />
      </Flex>
      <Flex justify="flex-start" gap={65}>
        <Text typo="Title3">성별</Text>
        <Controller
          name="gender"
          control={control}
          render={() => (
            <WidthFitFlex gap={4}>
              {GENDER_OPTION_LIST.map(({ key, label }) => (
                <Button
                  key={label}
                  width="fit-content"
                  height="43px"
                  padding="16px 20px"
                  bg={
                    getValues('gender') === key
                      ? theme.palette.Black
                      : theme.palette.White
                  }
                  fontColor={
                    getValues('gender') === key
                      ? theme.palette.White
                      : theme.palette.Black
                  }
                  typo="Label3"
                  border={
                    getValues('gender') === key
                      ? `1px solid ${theme.palette.Black}`
                      : `1px solid ${theme.palette.Gray100}`
                  }
                  onClick={() => handleGenderSelect(key)}
                >
                  {label}
                </Button>
              ))}
            </WidthFitFlex>
          )}
        />
      </Flex>
      <Flex justify="flex-start" gap={20}>
        <Text typo="Title3">중성화 여부</Text>
        <Controller
          name="neutering"
          control={control}
          render={() => (
            <WidthFitFlex gap={4}>
              {NEUTERED_OPTION_LIST.map(({ key, label }) => (
                <Button
                  key={label}
                  width="fit-content"
                  height="43px"
                  padding="16px 20px"
                  bg={
                    getValues('neutering') === key
                      ? theme.palette.Black
                      : theme.palette.White
                  }
                  fontColor={
                    getValues('neutering') === key
                      ? theme.palette.White
                      : theme.palette.Black
                  }
                  typo="Label3"
                  border={
                    getValues('neutering') === key
                      ? `1px solid ${theme.palette.Black}`
                      : `1px solid ${theme.palette.Gray100}`
                  }
                  onClick={() => handleNeuterSelect(key)}
                >
                  {label}
                </Button>
              ))}
            </WidthFitFlex>
          )}
        />
      </Flex>

      <Flex justify="flex-start" gap={65}>
        <Text typo="Title3">나이</Text>
        <Controller
          name="age"
          control={control}
          render={({ field }) => (
            <Dropdown
              options={ageList}
              defaultValue={`${field.value}살`}
              width={114}
              onSelect={handleBreedSelect}
              suffix="살"
            />
          )}
        />
      </Flex>

      <Flex justify="flex-start" gap={51}>
        <Text typo="Title3">몸무게</Text>
        <Controller
          name="weight"
          control={control}
          rules={{
            required: '몸무게를 선택해주세요.',
            validate: (value) => {
              const [integer, decimal] = value.toString().split('.'); // 정수와 소수 분리
              const weight = parseFloat(`${integer}.${decimal}`);
              return weight > 0;
            },
          }}
          render={({ field }) => (
            <>
              <WidthFitFlex gap={12} justify="flex-start" align="flex-end">
                {/* 정수 Dropdown */}
                <Dropdown
                  width={45}
                  options={integerList}
                  defaultValue={
                    field.value ? field.value?.toString().split('.')[0] : 0
                  } // 정수 부분 초기값
                  onSelect={(value) => {
                    const decimal = field.value?.toString().split('.')[1] || 0; // 소수 추출
                    field.onChange(parseFloat(`${value}.${decimal}`)); // 정수와 소수 조합
                  }}
                />
                <Text typo="Body2" margin="0 0 6px 0">
                  .
                </Text>
                {/* 소수 Dropdown */}
                <Dropdown
                  width={45}
                  options={decimalList}
                  defaultValue={field.value?.toString().split('.')[1] ?? 0} // 소수 부분 초기값
                  onSelect={(value) => {
                    const integer = field.value?.toString().split('.')[0] || 0; // 정수 추출
                    field.onChange(parseFloat(`${integer}.${value}`)); // 정수와 소수 조합
                  }}
                />
                <Text typo="Body2" margin="0 0 6px 0">
                  kg
                </Text>
              </WidthFitFlex>
            </>
          )}
        />
      </Flex>
      <PetPersonalityModify control={control} setValue={setValue} />
      <PetDiseaseModify control={control} setValue={setValue} />
    </Flex>
  );
};
