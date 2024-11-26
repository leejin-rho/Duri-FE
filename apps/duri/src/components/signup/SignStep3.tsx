import {
  Control,
  Controller,
  FieldErrors,
} from 'react-hook-form';

import { FormData } from '.';

interface SignStep3Props {
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
}

const SignStep3 = ({ control, errors }: SignStep3Props) => {
  const currentYear = new Date().getFullYear();

  // 출생 연도 리스트 생성 (현재 연도 - 0세부터 25세까지)
  const birthYears = Array.from({ length: 26 }, (_, i) =>
    (currentYear - i).toString(),
  );

  return (
    <>
      <Controller
        name="birthYear"
        control={control}
        rules={{ required: '출생 연도를 선택해주세요.' }}
        render={({ field }) => (
          <select {...field}>
            <option value="">출생 연도를 선택하세요</option>
            {birthYears.map((year) => (
              <option key={year} value={year}>
                {year}년
              </option>
            ))}
          </select>
        )}
      />
      {errors.birthYear && <p>{errors.birthYear.message}</p>}
    </>
  );
};

export default SignStep3;
