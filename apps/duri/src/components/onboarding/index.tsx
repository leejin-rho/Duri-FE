import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import PetBirthYearInfo from './PetBirthYearInfo';
import PetBreedInfo from './PetBreedInfo';
import PetDiseaseInfo from './PetDiseaseInfo';
import PetGenderInfo from './PetGenderInfo';
import PetNameInfo from './PetNameInfo';
import PetNeuterInfo from './PetNeuterInfo';
import PetPersonalityInfo from './PetPersonalityInfo';
import PetWeightInfo from './PetWeightInfo';

export interface FormData {
  name: string;
  weight: string;
  breed: string;
  gender: string;
  isNeutered: boolean;
  birthYear: string;
  personality: string[];
  disease: string[];
}

const MultiStepForm = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<number>(0);

  const detailSteps = ['이름', '견종', '몸무게', '성별', '중성화 여부'];
  const [detailStep, setDetailStep] = useState<number>(0);

  const toggleArrayValue = (field: keyof FormData, value: string) => {
    const currentValues = getValues(field);
    // 에러 처리 -> currentValues가 배열일 때만 처리
    if (Array.isArray(currentValues)) {
      if (currentValues.includes(value)) {
        // 이미 포함된 값이면 제거
        setValue(
          field,
          currentValues.filter((v) => v !== value),
        );
      } else {
        // 포함되지 않은 값이면 추가
        setValue(field, [...currentValues, value]);
      }
    }
  };

  const {
    control,
    trigger,
    handleSubmit,
    setValue,
    getValues,
    register,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: '',
      weight: '',
      breed: '',
      gender: '',
      isNeutered: undefined,
      birthYear: '',
      personality: [],
      disease: [],
    },
  });

  const onNextStep = async () => {
    // 현재 단계의 필드 유효성 검사
    let isValid = false;
    if (step === 1) {
      isValid = await trigger(['isNeutered']);
    } else if (step === 2) {
      isValid = await trigger(['birthYear']);
    } else if (step === 3) {
      isValid = await trigger(['personality']);
    } else if (step === 4) {
      isValid = await trigger(['disease']);
    }

    // 유효할 경우에만 다음 단계로 이동
    if (isValid && step < 5) {
      setStep(step + 1);
    }
  };

  const onPrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const onSubmit = (data: FormData) => {
    console.log('Form Data:', data);
    navigate('/');
  };

  return (
    <>
      {step === 0 ? (
        <>
          두리묭실 서비스를 이용하기 위해 반려견의 정보를 입력해주세요!
          <button type="button" onClick={() => setStep(step + 1)}>
            입력하러 가기
          </button>
        </>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          {step === 1 && detailSteps[detailStep] === '이름' && (
            <PetNameInfo
              control={control}
              register={register}
              trigger={trigger}
              errors={errors}
              setDetailStep={setDetailStep}
            />
          )}
          {step === 1 && detailSteps[detailStep] === '견종' && (
            <PetBreedInfo
              control={control}
              trigger={trigger}
              errors={errors}
              setDetailStep={setDetailStep}
            />
          )}
          {step === 1 && detailSteps[detailStep] === '몸무게' && (
            <PetWeightInfo
              control={control}
              errors={errors}
              trigger={trigger}
              setDetailStep={setDetailStep}
            />
          )}
          {step === 1 && detailSteps[detailStep] === '성별' && (
            <PetGenderInfo
              control={control}
              trigger={trigger}
              errors={errors}
              setDetailStep={setDetailStep}
            />
          )}
          {step === 1 && detailSteps[detailStep] === '중성화 여부' && (
            <PetNeuterInfo
              control={control}
              errors={errors}
              setDetailStep={setDetailStep}
            />
          )}
          {step === 2 && (
            <>
              <h2>{getValues('name')}의 나이를 입력해주세요</h2>
              <>미용실을 추천해주는 카테고리로 쓰여요.</>
              <PetBirthYearInfo control={control} errors={errors} />
            </>
          )}
          {step === 3 && (
            <>
              <h2>{getValues('name')}는 어떤 성격을 가지고 있나요?</h2>
              <>입력된 성격은 MY에서 변경 가능해요.</>
              <PetPersonalityInfo
                control={control}
                errors={errors}
                toggleArrayValue={toggleArrayValue}
              />
            </>
          )}
          {step === 4 && (
            <>
              <h2>{getValues('name')}가 갖고있는 질환이 있나요?</h2>
              <>입력된 질환은 MY에서 변경 가능해요.</>
              <PetDiseaseInfo
                control={control}
                errors={errors}
                toggleArrayValue={toggleArrayValue}
              />
            </>
          )}

          <div>
            {step > 1 && (
              <button type="button" onClick={onPrevStep}>
                돌아가기
              </button>
            )}
            {step < 4 && detailSteps[detailStep] === '중성화 여부' && (
              <button type="button" onClick={onNextStep}>
                다음 단계
              </button>
            )}
            {step === 4 && <button type="submit">완료</button>}
          </div>
        </form>
      )}
    </>
  );
};

export default MultiStepForm;
