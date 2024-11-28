import React from 'react';
import {
  Control,
  Controller,
  FieldErrors,
  UseFormTrigger,
} from 'react-hook-form';

import { FormData } from '.';

interface PetWeightInfoProps {
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
  trigger: UseFormTrigger<FormData>;
  setDetailStep: React.Dispatch<React.SetStateAction<number>>;
}

const PetWeightInfo = ({
  control,
  errors,
  trigger,
  setDetailStep,
}: PetWeightInfoProps) => {
  const handlePrevButton = () => {
    setDetailStep((prev) => {
      return prev - 1; // 상태를 한 단계 뒤로 설정
    });
  };
  const handleNextButton = async () => {
    const isValid = await trigger('weight');
    if (isValid) {
      setDetailStep((prev) => prev + 1);
    }
  };
  return (
    <>
      <Controller
        name="weight"
        control={control}
        rules={{ required: '몸무게를 선택해주세요.' }}
        render={({ field }) => (
          <>
            <label>몸무게</label>
            <>
              {/* 정수 선택 */}
              <select
                value={field.value.split('.')[0]} // 정수 부분
                onChange={(e) => {
                  const decimal = field.value.split('.')[1] || '0'; //소수 추출
                  field.onChange(`${e.target.value}.${decimal}`); // 정수와 소수 조합
                }}
              >
                {Array.from({ length: 41 }, (_, i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select>

              <span>.</span>

              {/* 소수 선택 */}
              <select
                value={field.value.split('.')[1]} // 소수 부분
                onChange={(e) => {
                  const integer = field.value.split('.')[0] || '0'; //정수 추출
                  field.onChange(`${integer}.${e.target.value}`); // 정수와 소수 조합
                }}
              >
                {Array.from({ length: 10 }, (_, i) => (
                  <option key={i} value={i}>
                    {i}
                  </option>
                ))}
              </select> kg
            </>
          </>
        )}
      />
      {errors.weight && <p>{errors.weight.message}</p>}
      <button type="button" onClick={handlePrevButton}>
        돌아가기
      </button>
      <button type="button" onClick={handleNextButton}>
        다음 단계
      </button>
    </>
  );
};

export default PetWeightInfo;
