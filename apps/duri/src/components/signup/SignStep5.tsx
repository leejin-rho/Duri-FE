import { Control, Controller, FieldErrors } from 'react-hook-form';

import { FormData } from '.';

interface SignStep5Props {
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
  toggleArrayValue: (field: keyof FormData, value: string) => void
}

const SignStep5 = ({control, errors, toggleArrayValue}: SignStep5Props) => {
  return (
    <>
      <Controller
        name="disease"
        control={control}
        rules={{
          validate: (value: string[]) =>
            value.length > 0 || '질환에 대해 알려주세요.',
        }}
        render={() => (
          <>
            {/* <label>Disease</label> */}
            <button
              type="button"
              onClick={() => toggleArrayValue('disease', '피부 질환')}
            >
              피부 질환
            </button>
            <button
              type="button"
              onClick={() => toggleArrayValue('disease', '귀 염증')}
            >
              귀 염증
            </button>
            <button
              type="button"
              onClick={() => toggleArrayValue('disease', '관절 질환')}
            >
              관절 질환
            </button>
            <button
              type="button"
              onClick={() => toggleArrayValue('disease', '기저 질환')}
            >
              기저 질환
            </button>
            <button
              type="button"
              onClick={() => toggleArrayValue('disease', '딱히 없어요')}
            >
              딱히 없어요
            </button>
            {errors.disease && <p>{errors.disease.message}</p>}
          </>
        )}
      />
    </>
  );
};

export default SignStep5;