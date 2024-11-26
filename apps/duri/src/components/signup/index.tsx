import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import SignStep1 from './SignStep1';
import SignStep2 from './SignStep2';
import SignStep3 from './SignStep3';
import SignStep4 from './SignStep4';
import SignStep5 from './SignStep5';

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
  const [step, setStep] = useState(0);
  const toggleArrayValue = (field: keyof FormData, value: string) => {
    const currentValues = getValues(field);
    // 에러 처리 -> currentValues가 배열일 때만 처리
    if (Array.isArray(currentValues)) {
      if (currentValues.includes(value)) {
        // 이미 포함된 값이면 제거
        setValue(
          field,
          currentValues.filter((v) => v !== value)
        );
      } else {
        // 포함되지 않은 값이면 추가
        setValue(field, [...currentValues, value]);
      }
    }

    else {
      console.error(`Field "${field}" is not an array.`);
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
      weight: '0.0',
      breed: '',
      gender: '',
      isNeutered: false,
      birthYear: '',
      personality: [],
      disease: [],
    },
  });



  const onNextStep = async () => {
    // 현재 단계의 필드 유효성 검사
    let isValid = false;
    if (step === 1) {
      isValid = await trigger(['name', 'gender']);
    } else if (step === 2) {
      isValid = await trigger(['weight', 'breed', 'isNeutered']);
    } else if (step === 3) {
      isValid = await trigger(['birthYear']);
    } else if (step === 4) {
      isValid = await trigger(['personality']);
    } else if (step === 5) {
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
          {step === 1 && (
            <SignStep1 control={control} register={register} errors={errors} />
          )}
          {step === 2 && (
            <>
              <h2>{getValues('name')}의 기본 정보를 입력해주세요</h2>
              <SignStep2
                control={control}
                errors={errors}
              />
            </>
          )}
          {step === 3 && (
            <>
              {' '}
              <h2>{getValues('name')}의 나이를 입력해주세요</h2>
              <>미용실을 추천해주는 카테고리로 쓰여요.</>
              <SignStep3 control={control} errors={errors} />
            </>
          )}
          {step === 4 && (
            <>
              <h2>{getValues('name')}는 어떤 성격을 가지고 있나요?</h2>
              <>입력된 성격은 MY에서 변경 가능해요.</>
              <SignStep4 control={control} errors={errors} toggleArrayValue={toggleArrayValue} />
            </>
          )}
          {step === 5 && (
            <>
            <h2>{getValues('name')}가 갖고있는 질환이 있나요?</h2>
            <>입력된 질환은 MY에서 변경 가능해요.</>
            <SignStep5 control={control} errors={errors} toggleArrayValue={toggleArrayValue} />
            </>
          )}

          <div>
            {step > 1 && (
              <button type="button" onClick={onPrevStep}>
                돌아가기
              </button>
            )}
            {step < 5 && (
              <button type="button" onClick={onNextStep}>
                다음 단계
              </button>
            )}
            {step === 5 && <button type="submit">완료</button>}
          </div>
        </form>
      )}
    </>
  );
};

export default MultiStepForm;
