import React from 'react';
import {
  Control,
  FieldErrors,
  UseFormRegister,
  UseFormTrigger,
} from 'react-hook-form';

import { FormData } from '.';


interface PetNameInfoProps {
  control: Control<FormData>;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
  trigger: UseFormTrigger<FormData>;
  setDetailStep: React.Dispatch<React.SetStateAction<number>>
}

const PetNameInfo = ({
  register,
  errors,
  trigger,
  setDetailStep
}: PetNameInfoProps) => {
  const handleNextButton = async () => {
    // 'name' 필드에 대한 유효성 검사 실행
    const isValid = await trigger('name');
    if (isValid) {
      setDetailStep((prev) => prev + 1);
    }
  };
  return (
    <>
      <h2>반려견의 이름을 입력해주세요</h2>
      {/* <label>이름</label> */}
      <input {...register('name', { required: '이름을 입력해주세요' })} />
      <button type="button" onClick={handleNextButton}>
        완료
      </button>
      {errors.name && <p>{errors.name.message}</p>}
    </>
  );
};

export default PetNameInfo;
