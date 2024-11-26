import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import { useForm, Controller } from 'react-hook-form';

interface FormData {
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
  const currentYear = new Date().getFullYear();

  // 출생 연도 리스트 생성 (현재 연도 - 0세부터 25세까지)
  const birthYears = Array.from({ length: 26 }, (_, i) =>
    (currentYear - i).toString(),
  );

  // 몸무게 드롭다운
  const weightFirstOptions = Array.from({ length: 40 }, (_, i) => i + 1);
  const weightSecondOptions = Array.from({ length: 9 }, (_, i) => i + 1);

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
      age: null,
      personality: [],
      disease: [],
    },
  });

  const setStepValue = (field: keyof FormData, value: any) => {
    setValue(field, value); // `setValue`를 사용하여 특정 필드에 값을 설정
  };

  const toggleArrayValue = (field: keyof FormData, value: string) => {
    const currentValues = getValues(field) || []; // 현재 배열 값 가져오기
    if (currentValues.includes(value)) {
      // 이미 포함된 값이면 제거
      setValue(
        field,
        currentValues.filter((v: string) => v !== value),
      );
    } else {
      // 포함되지 않은 값이면 추가
      setValue(field, [...currentValues, value]);
    }
  };

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
      {step === 0 && (
        <div>두리묭실 서비스를 이용하기 위해 반려견의 정보를 입력해주세요!</div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 1 && (
          <>
            <h2>반려견의 이름과 성별을 입력해주세요</h2>
            <>
              {/* <label>이름</label> */}
              <input
                {...register('name', { required: '이름을 입력해주세요' })}
              />
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
        )}

        {step === 2 && (
          <>
            <h2>{getValues('name')}의 기본 정보를 입력해주세요</h2>
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
                      </select>
                    </>
                  </>
                )}
              />
              {errors.weight && <p>{errors.weight.message}</p>}
            </>
            <>
              <label>견종</label>
              <input
                {...register('breed', { required: '견종을 선택해주세요.' })}
              />
              {errors.breed && <p>{errors.breed.message}</p>}
            </>
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
          </>
        )}

        {step === 3 && (
          <>
            <h2>{getValues('name')}의 나이를 입력해주세요</h2>
            <>미용실을 추천해주는 카테고리로 쓰여요.</>
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
        )}

        {step === 4 && (
          <>
            <h2>{getValues('name')}는 어떤 성격을 가지고 있나요?</h2>
            <>입력된 성격은 MY에서 변경 가능해요.</>
            <Controller
              name="personality"
              control={control}
              rules={{
                validate: (value: string[]) =>
                  value.length > 0 || '성격에 대해 알려주세요.',
              }}
              render={({ field }) => (
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
                    onClick={() =>
                      toggleArrayValue('personality', '입질이 있어요')
                    }
                  >
                    입질이 있어요
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      toggleArrayValue('personality', '사람을 좋아해요')
                    }
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
        )}

        {step === 5 && (
          <>
            <h2>{getValues('name')}가 갖고있는 질환이 있나요?</h2>
            <>입력된 질환은 MY에서 변경 가능해요.</>
            <Controller
              name="disease"
              control={control}
              rules={{
                validate: (value: string[]) =>
                  value.length > 0 || '질환에 대해 알려주세요.',
              }}
              render={({ field }) => (
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
        )}

        <div>
          {step === 0 && <button type="button" onClick={()=>setStep(step + 1)}>입력하러 가기</button>}
          {step > 1 && (
            <button type="button" onClick={onPrevStep}>
              돌아가기
            </button>
          )}
          {step > 0 && step < 5 && (
            <button type="button" onClick={onNextStep}>
              다음 단계
            </button>
          )}
          {step === 5 && <button type="submit">완료</button>}
        </div>
      </form>
    </>
  );
};

export default MultiStepForm;
