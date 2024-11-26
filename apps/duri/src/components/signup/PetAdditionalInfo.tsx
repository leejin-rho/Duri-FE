import {
  Control,
  Controller,
  FieldErrors,
} from 'react-hook-form';

import { FormData } from '.';

interface PetAdditionalInfoProps {
  control: Control<FormData>;
  errors: FieldErrors<FormData>;
}

const breeds: string[] = [
  '도베르만',
  '래브라도 리트리버',
  '러시안블루',
  '롯트와일러',
  '리트리버',
  '말티숑(말티즈+비숑)',
  '말티즈',
  '말티폼(말티즈+포메라니안)',
  '말티푸(말티즈+토이푸들)',
  '미니핀',
  '미디엄 푸들',
  '믹스견',
  '베들링턴 테리어',
  '보더 콜리',
  '불독',
  '비글',
  '비숑',
  '비숑 프리제',
  '빠삐용',
  '사모예드',
  '삽살개',
  '샤페이',
  '샴',
  '세인트 버나드',
  '셔틀랜드 쉽독(셀티)',
  '셰퍼드',
  '슈나우저',
  '스코티시 폴드',
  '스탠다드 푸들',
  '스피츠',
  '시바견',
  '시베리안 허스키',
  '시츄',
  '시푸(시츄+푸들)',
  '아프간 하운드',
  '알라스칸 말라뮤트',
  '올드 잉글리쉬 쉽독',
  '요크셔테리어',
  '웰시코기',
  '자이언트 슈나우져',
  '제페니즈 친',
  '진돗개',
  '차우차우',
  '치와와',
  '치와와(단모)',
  '치와와(장모)',
  '코카 스파니엘',
  '코카푸(코커 스파니엘+푸들)',
  '콜리',
  '킹 찰스 스패니얼',
  '터키시앙고라',
  '토이 푸들',
  '퍼그',
  '페르시안',
  '페키니즈',
  '포메라니안',
  '폼피츠(포메라니안+스피츠)',
  '푸들',
  '푸숑(푸들+비숑 프리제)',
  '풍산견',
  '프렌치불독',
  '화이트테리어',
];

const PetAdditionalInfo = ({ control, errors }: PetAdditionalInfoProps) => {
  return (
    <>
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
        <Controller
          name="breed"
          control={control}
          rules={{ required: '견종을 선택해주세요.' }}
          render={({ field }) => (
            <>
              <label>견종</label>
              <select {...field}>
                <option value="">견종을 선택하세요</option>
                {breeds.map((breed, index) => (
                  <option key={index} value={breed}>
                    {breed}
                  </option>
                ))}
              </select>
            </>
          )}
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
  );
};

export default PetAdditionalInfo;
