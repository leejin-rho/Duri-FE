import { Control, Controller, FieldErrors } from 'react-hook-form';

import { FormData } from '.';

interface PetNeuterInfoProps {
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
  setDetailStep: React.Dispatch<React.SetStateAction<number>>;
}
const PetNeuterInfo = ({
  control,
  errors,
  setDetailStep,
}: PetNeuterInfoProps) => {
  const handlePrevButton = () => {
    setDetailStep((prev) => {
      return prev - 1; // 상태를 한 단계 뒤로 설정
    });
  };
  return (
    <>
      <Controller
        name="isNeutered"
        control={control}
        rules={{
          validate: (value) =>
            value !== undefined || '중성화 여부를 선택해주세요.',
        }}
        render={({ field }) => (
          <>
            <label>중성화 여부</label>
            <button type="button" onClick={() => field.onChange(true)}>
              완료
            </button>
            <button type="button" onClick={() => field.onChange(false)}>
              안함
            </button>
            {errors.isNeutered && <p>{errors.isNeutered.message}</p>}
          </>
        )}
      />

      <button type="button" onClick={handlePrevButton}>
        돌아가기
      </button>
    </>
  );
};

export default PetNeuterInfo;
