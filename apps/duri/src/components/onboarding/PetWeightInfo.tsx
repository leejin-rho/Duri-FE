import React from 'react';
import { Control, Controller } from 'react-hook-form';

import { Dropdown, Flex, Text, theme } from '@duri-fe/ui';

import { FormData } from '.';

interface PetWeightInfoProps {
  control: Control<FormData>;
  name: string;
}

const integerList = Array.from({ length: 41 }, (_, i) => i.toString()); // 정수 리스트

const decimalList = Array.from({ length: 10 }, (_, i) => i.toString()); // 소수 리스트

const PetWeightInfo = ({ control, name }: PetWeightInfoProps) => {
  return (
    <Flex direction="column" align="flex-start" gap={28}>
      <Text typo="Heading" justify="flex-start">
        {name}의 <br />
        몸무게를 입력해주세요
      </Text>
      <Text
        typo="Caption1"
        justify="flex-start"
        colorCode={theme.palette.Gray500}
      >
        미용실을 추천해주는 카테고리로 쓰여요.
      </Text>
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
            {/* style={{ display: 'flex', alignItems: 'center', gap: '4px' } */}
            <Flex
              gap={12}
              justify="flex-start"
              align="flex-end"
              margin="26px 0"
            >
              {/* 정수 Dropdown */}
              <Dropdown
                width={85}
                options={integerList}
                defaultValue={field.value.toString().split('.')[0] || '0'} // 정수 부분 초기값
                onSelect={(value) => {
                  const decimal = field.value.toString().split('.')[1] || 0; // 소수 추출
                  field.onChange(parseFloat(`${value}.${decimal}`)); // 정수와 소수 조합
                }}
              />
              <Text typo="Body2" margin="0 0 6px 0">
                .
              </Text>
              {/* 소수 Dropdown */}
              <Dropdown
                width={85}
                options={decimalList}
                defaultValue={field.value.toString().split('.')[1] || '0'} // 소수 부분 초기값
                onSelect={(value) => {
                  const integer = field.value.toString().split('.')[0] || 0; // 정수 추출
                  field.onChange(parseFloat(`${integer}.${value}`)); // 정수와 소수 조합
                }}
              />
              <Text typo="Body2" margin="0 0 6px 0">
                kg
              </Text>
            </Flex>
          </>
        )}
      />
    </Flex>
  );
};

export default PetWeightInfo;
