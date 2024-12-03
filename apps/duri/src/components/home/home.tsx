import { SetStateAction, useState } from 'react';

import { Button, Flex, HeightFitFlex, Text, theme } from '@duri-fe/ui';
import styled from '@emotion/styled';
import {
  Swiper as OriginalSwiper,
  SwiperSlide as OriginalSwiperSlide,
} from 'swiper/react';

const CarouselHome = () => {
  const [swiperIndex, setSwiperIndex] = useState<number>(0); // 슬라이드 인덱스 상태

  return (
    <HeightFitFlex direction="column" align="flex-start">
      <Text
        typo="Heading3"
        colorCode={theme.palette.Normal900}
        margin="33px 0 23px 25px"
      >
        미용한지 <br />
        12일이 지났어요 <br />
        매일매일 빗질 잘 해주세요!
      </Text>
      {/* Swiper를 감싸는 Wrapper */}
      <CustomSwiperWrapper>
        <CustomSwiper
          slidesPerView={1.5}
          spaceBetween={8}
          centeredSlides={true}
          onSlideChange={(e: { realIndex: SetStateAction<number> }) => {
            setSwiperIndex(e.realIndex);
          }} // 슬라이드 변경 완료 시 인덱스 업데이트
        >
          {[0, 1, 2].map((i) => (
            <CustomSwiperSlide key={i} isActive={swiperIndex === i}>
              <Card backgroundColor={theme.palette.White} borderRadius={12}>
                카드 {i}
              </Card>
            </CustomSwiperSlide>
          ))}
        </CustomSwiper>
      </CustomSwiperWrapper>
      <Flex margin="9px 0 0 0" gap={4}>
        {/* Bullets */}
        {[0, 1, 2].map((i) => (
          <Bullet
            key={i}
            width={swiperIndex === i ? '18px' : '5px'}
            height="4px"
            bg={
              swiperIndex === i
                ? theme.palette.Normal700
                : theme.palette.Gray100
            }
          />
        ))}
      </Flex>
    </HeightFitFlex>
  );
};

export default CarouselHome;

// Swiper를 감싸는 Wrapper 스타일
const CustomSwiperWrapper = styled(Flex)`
  overflow: hidden;
`;

// Swiper를 커스텀한 스타일 컴포넌트
const CustomSwiper = styled(OriginalSwiper)`
  width: 100%;
  padding: 0 16px;
  .swiper-wrapper {
    display: flex;
    align-items: center;
    justify-content: start;
    width: fit-content;
    height: fit-content;
  }
`;

// SwiperSlide를 커스텀한 스타일 컴포넌트
const CustomSwiperSlide = styled(OriginalSwiperSlide)<{ isActive: boolean }>`
  transition: transform 0.3s ease;
  height: ${({ isActive }) =>
    isActive ? '171px !important' : '141px !important'};
  width: ${({ isActive }) =>
    isActive ? '317px !important' : '316px !important'};
`;

const Card = styled(Flex)`
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
`;

const Bullet = styled(Button)`
  padding: 0;
  transition: all 0.3s ease;
`;
