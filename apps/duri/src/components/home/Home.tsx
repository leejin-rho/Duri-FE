import { SetStateAction, useState } from 'react';
import React from 'react';

import {
  LastReservationProps,
  UpcomingReservationProps,
} from '@duri/assets/types/reservation';
import { Button, Flex, HeightFitFlex, Text, theme } from '@duri-fe/ui';
import styled from '@emotion/styled';
import { differenceInDays } from 'date-fns';
import {
  Swiper as OriginalSwiper,
  SwiperSlide as OriginalSwiperSlide,
} from 'swiper/react';

import LastReservation from './reservation/lastReservation';
import UpcomingReservation from './reservation/upcomingReservation';

const CarouselHome = ({
  upcomingReservation,
  lastReservation,
}: {
  upcomingReservation?: UpcomingReservationProps;
  lastReservation?: LastReservationProps;
}) => {
  console.log(upcomingReservation, lastReservation)
  const [swiperIndex, setSwiperIndex] = useState<number>(0); // 슬라이드 인덱스 상태
  const currentDate = new Date();
  let daysDifference;
  if (lastReservation)
    daysDifference = differenceInDays(
      currentDate,
      lastReservation.reservationDate,
    ); // 일수 차이 계산

  const slides = [
    upcomingReservation && (
      <UpcomingReservation reservationDate={upcomingReservation.reservationDate}
      salonAddress={upcomingReservation.salonAddress}
      salonName={upcomingReservation.salonName}
      salonImage={upcomingReservation.salonImage}
      totalPrice={upcomingReservation.totalPrice}
      salonPhone={upcomingReservation.salonPhone}
      />
    ),
    lastReservation && daysDifference && (
      <LastReservation daysDifference={daysDifference} />
    ),
    // 여기는 이제 아무것도 이력이 없는 유저한테 띄울 컴포넌트가 드가야 함!
    // (!upcomingReservation && !lastReservation) ?? (
    //   <Wrapper
    //     borderRadius={12}
    //     padding="27px 20px"
    //     backgroundColor={theme.palette.White}
    //   >
    //     <Text>예약하시오</Text>
    //   </Wrapper>
    // ),
  ];

  return (
    <HeightFitFlex direction="column" align="flex-start">
      <Text
        typo="Body1"
        colorCode={theme.palette.Normal900}
        margin="18px 0 23px 25px"
      >
        미용한지 <br />
        {daysDifference}일이 지났어요 <br />
        매일매일 빗질 잘 해주세요!
      </Text>

      <CustomSwiperWrapper>
        <CustomSwiper
          slidesPerView={1.18}
          spaceBetween={8}
          centeredSlides={true}
          onSlideChange={(e: { realIndex: SetStateAction<number> }) => {
            setSwiperIndex(e.realIndex);
          }} // 슬라이드 변경 완료 시 인덱스 업데이트
        >
          {slides.map((slide, index) => (
            <CustomSwiperSlide isActive={index === swiperIndex} key={index}>
              {slide}
            </CustomSwiperSlide>
          ))}
        </CustomSwiper>
      </CustomSwiperWrapper>
      <Flex margin="9px 0 0 0" gap={4}>
        {/* Bullets */}
        {slides.map((i, index) => (
          <Bullet
            key={index}
            width={swiperIndex === index ? '18px' : '5px'}
            height="4px"
            bg={
              swiperIndex === index
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
  max-height: 171px;
  min-height: 141px;
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



const Bullet = styled(Button)`
  padding: 0;
  transition: all 0.3s ease;
`;
