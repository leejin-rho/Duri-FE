import React from 'react';
import {
  Control,
  Controller,
  FieldErrors,
  UseFormTrigger,
} from 'react-hook-form';

import { FormData } from '.';

interface PetGenderInfoProps {
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
  trigger: UseFormTrigger<FormData>;
  setDetailStep: React.Dispatch<React.SetStateAction<number>>;
}

const PetGenderInfo = ({
  control,
  errors,
  trigger,
  setDetailStep,
}: PetGenderInfoProps) => {
  const handlePrevButton = () => {
    setDetailStep((prev) => {
      return prev - 1; // 상태를 한 단계 뒤로 설정
    });
  };
  const handleNextButton = async () => {
    const isValid = await trigger('gender');
    if (isValid) {
      setDetailStep((prev) => prev + 1);
    }
  };
  return (
    <>
      <h2>반려견의 성별이 어떻게 되나요?</h2>
      <Controller
        name="gender"
        control={control}
        rules={{ required: '성별을 선택해주세요.' }}
        render={({ field }) => (
          <>
            {/* <label>성별</label> */}
            <button
              type="button"
              onClick={() => {
                field.onChange('남자');
                handleNextButton();
              }}
            >
              왕자님
            </button>
            <button
              type="button"
              onClick={() => {
                field.onChange('여자');
                handleNextButton();
              }}
            >
              공주님
            </button>
            {errors.gender && <p>{errors.gender.message}</p>}

            <button type="button" onClick={handlePrevButton}>
              돌아가기
            </button>
          </>
        )}
      />
    </>
  );
};

export default PetGenderInfo;
