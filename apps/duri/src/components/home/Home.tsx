import { SetStateAction, useState } from 'react';
import React from 'react';

import { UpcomingReservationType } from '@duri/assets/types';
import { Button, Flex, HeightFitFlex, Text, theme } from '@duri-fe/ui';
import styled from '@emotion/styled';
import { differenceInDays } from 'date-fns';
import {
  Swiper as OriginalSwiper,
  SwiperSlide as OriginalSwiperSlide,
} from 'swiper/react';

import LastReservation from './reservation/LastReservation';
import UpcomingReservation from './reservation/UpcomingReservation';

const CarouselHome = ({
  upcomingReservation,
  lastReservation,
}: {
  upcomingReservation?: UpcomingReservationType;
  lastReservation?: string
}) => {
  const [swiperIndex, setSwiperIndex] = useState<number>(0); // 슬라이드 인덱스 상태
  const currentDate = new Date();
  
  let daysDifference;
  if (lastReservation)
    daysDifference = differenceInDays(currentDate, new Date(lastReservation)); // 일수 차이 계산
  const slides = [
    upcomingReservation ? (
      <UpcomingReservation
        reservationDate={upcomingReservation.reservationDate}
        lastSinceDay={upcomingReservation.lastSinceDay}
        shopId={upcomingReservation.shopId}
        address={upcomingReservation.address}
        name={upcomingReservation.name}
        imageURL={upcomingReservation.imageURL}
        price={upcomingReservation.price}
        phone={upcomingReservation.phone}
        kakaoURL={upcomingReservation.kakaoURL}
        reserveDday={upcomingReservation.reserveDday}
      />
    ) : (
      <Wrapper
        borderRadius={12}
        padding="27px 20px"
        backgroundColor={theme.palette.White}
      >
        <Text typo="Caption4" colorCode={theme.palette.Gray400}>
          예약된 미용이 없어요😔
        </Text>
      </Wrapper>
    ), //다가오는 예약이 없는 경우
    lastReservation ? (
      <LastReservation daysDifference={daysDifference} />
    ) : (
      <Wrapper
        borderRadius={12}
        padding="27px 20px"
        backgroundColor={theme.palette.White}
      >
        <Text typo="Caption4" colorCode={theme.palette.Gray400}>
          시술 이력이 없어요😔
        </Text>
      </Wrapper>
    ),
  ];


  return (
    <HeightFitFlex direction="column" align="flex-start">
      {lastReservation ? (
        <Text
          typo="Body1"
          colorCode={theme.palette.Normal900}
          margin="18px 0 23px 25px"
        >
          미용한지 <br />
          {daysDifference}일이 지났어요 <br />
          매일매일 빗질 잘 해주세요!
        </Text>
      ) : (
        <Text
          typo="Body1"
          colorCode={theme.palette.Normal900}
          margin="18px 0 23px 25px"
        >
          두리 서비스가 처음이시네요! <br />
          두리와 찾아볼까요? 👀
        </Text>
      )}

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

const Wrapper = styled(Flex)`
  flex-shrink: 0;
  position: relative;
`;
