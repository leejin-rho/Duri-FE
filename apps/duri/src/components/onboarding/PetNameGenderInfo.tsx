import React from 'react';
import { Control, Controller, FieldErrors, UseFormRegister } from 'react-hook-form';

import { FormData } from '.';

interface PetNameAndGenderInfoProps {
  control: Control<FormData>;
  register: UseFormRegister<FormData>;
  errors: FieldErrors<FormData>;
}

const PetNameGenderInfo = ({ control, register, errors }: PetNameAndGenderInfoProps) => {
  return (
    <>
      <h2>반려견의 이름과 성별을 입력해주세요</h2>
      <>
        {/* <label>이름</label> */}
        <input {...register('name', { required: '이름을 입력해주세요' })} />
        {errors.name && <p>{errors.name.message}</p>}
      </>
      <Controller
        name="gender"
        control={control}
        rules={{ required: '성별을 선택해주세요.' }}
        render={({ field }) => (
          <>
            {/* <label>성별</label> */}
            <button type="button" onClick={() => field.onChange('남자')}>
              남아
            </button>
            <button type="button" onClick={() => field.onChange('여자')}>
              여아
            </button>
            {errors.gender && <p>{errors.gender.message}</p>}
          </>
        )}
      />
    </>
  );
};

export default PetNameGenderInfo;