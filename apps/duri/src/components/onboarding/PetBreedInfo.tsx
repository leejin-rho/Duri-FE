import React from 'react';
import {
  Control,
  Controller,
} from 'react-hook-form';

import { Dropdown, Flex, Text, theme } from '@duri-fe/ui';

import { FormData } from '.';

interface PetBreedInfoProps {
  control: Control<FormData>;
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

const PetBreedInfo = ({
  control
}: PetBreedInfoProps) => {

  return (
    <Flex direction="column" align="flex-start" gap={28} >
      <Text typo="Heading2" justify="flex-start">반려견의 품종이 어떻게 되나요?</Text>
      <Text typo="Label2" justify="flex-start" colorCode={theme.palette.Gray500}>등록한 반려견은 MY에서 변경할 수 있어요.</Text>
      <Controller
        name="breed"
        control={control}
        rules={{ required: '품종을 선택해주세요.' }}
        render={({ field }) => (
          <>
            <Dropdown options={breeds} defaultValue="품종 선택" width={114} onSelect={field.onChange} />
          </>
        )}
      />
    </Flex>
  );
};

export default PetBreedInfo;
