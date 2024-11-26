import { Control, Controller, FieldErrors } from 'react-hook-form';

import { FormData } from '.';

interface SignStep4Props {
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
  toggleArrayValue: (field: keyof FormData, value: string) => void
}

const SignStep4 = ({ control, errors, toggleArrayValue }: SignStep4Props) => {

  return (
    <>
      <Controller
        name="personality"
        control={control}
        rules={{
          validate: (value: string[]) =>
            value.length > 0 || '성격에 대해 알려주세요.',
        }}
        render={() => (
          <>
            <button
              type="button"
              onClick={() => toggleArrayValue('personality', '예민해요')}
            >
              예민해요
            </button>
            <button
              type="button"
              onClick={() => toggleArrayValue('personality', '낯가려요')}
            >
              낯가려요
            </button>
            <button
              type="button"
              onClick={() => toggleArrayValue('personality', '입질이 있어요')}
            >
              입질이 있어요
            </button>
            <button
              type="button"
              onClick={() => toggleArrayValue('personality', '사람을 좋아해요')}
            >
              사람을 좋아해요
            </button>
            <button
              type="button"
              onClick={() => toggleArrayValue('personality', '얌전해요')}
            >
              얌전해요
            </button>
            <button
              type="button"
              onClick={() =>
                toggleArrayValue('personality', '낯선 손길은 무서워요')
              }
            >
              낯선 손길은 무서워요
            </button>
            {errors.personality && <p>{errors.personality.message}</p>}
          </>
        )}
      />
    </>
  );
};

export default SignStep4;
