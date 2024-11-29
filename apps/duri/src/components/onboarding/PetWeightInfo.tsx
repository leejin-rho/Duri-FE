import React from 'react';
import { Control, Controller } from 'react-hook-form';

import { Dropdown, Flex, Text, theme } from '@duri-fe/ui';

import { FormData } from '.';

interface PetWeightInfoProps {
  control: Control<FormData>;
  name: string;
}

const PetWeightInfo = ({ control, name }: PetWeightInfoProps) => {
  const integerList = Array.from({ length: 41 }, (_, i) => i.toString()); // 정수 리스트
  const decimalList = Array.from({ length: 10 }, (_, i) => i.toString()); // 소수 리스트

  return (
    <Flex direction="column" align="flex-start" gap={28} >
      <Text typo="Heading2" justify="flex-start">
        {name}의 <br />
        몸무게를 입력해주세요
      </Text>
      <Text typo="Body3" justify="flex-start" colorCode={theme.palette.Gray500}>미용실을 추천해주는 카테고리로 쓰여요.</Text>
      <Controller
        name="weight"
        control={control}
        rules={{ required: '몸무게를 선택해주세요.' }}
        render={({ field }) => (
          <>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              {/* 정수 Dropdown */}
              <Dropdown
                options={integerList}
                defaultValue={field.value.split('.')[0] || '0'} // 정수 부분 초기값
                onSelect={(value) => {
                  const decimal = field.value.split('.')[1] || '0'; // 소수 추출
                  field.onChange(`${value}.${decimal}`); // 정수와 소수 조합
                }}
              />
              <span>.</span>
              {/* 소수 Dropdown */}
              <Dropdown
                options={decimalList}
                defaultValue={field.value.split('.')[1] || '0'} // 소수 부분 초기값
                onSelect={(value) => {
                  const integer = field.value.split('.')[0] || '0'; // 정수 추출
                  field.onChange(`${integer}.${value}`); // 정수와 소수 조합
                }}
              />
              <span>kg</span>
            </div>
          </>
        )}
      />
    </Flex>
  );
};

export default PetWeightInfo;
