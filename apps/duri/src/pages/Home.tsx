import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CarouselHome from '@duri/components/home/Home';
import RecommendedShop from '@duri/components/home/RecommendedShop';
import SpeedQuotation from '@duri/components/home/SpeedQuotation';
import {
  AiStyleBanner,
  Button,
  DuriNavbar,
  Flex,
  HeightFitFlex,
  MainHeader,
  MobileLayout,
  Text,
  theme,
} from '@duri-fe/ui';
import {
  useGeolocation,
  useGetPetInfo,
  useGetRecommendedShopList,
  useGetRegularShopList,
  useGetUpcomingReservation,
} from '@duri-fe/utils';
import styled from '@emotion/styled';

const Home = () => {
  const { coordinates } = useGeolocation();

  const [lat, setLat] = useState<number | null>(null);
  const [lon, setLon] = useState<number | null>(null);

  const { data: petData, isError: getPetInfoError } = useGetPetInfo();
  const { data: regularListData } = useGetRegularShopList();
  const { data: reservationData } = useGetUpcomingReservation();
  const {
    data: recommendedListData,
    isLoading: recommendedListLoading,
    isPending: recommendedListPending,
  } = useGetRecommendedShopList(lat, lon);

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/shop');
  };

  useEffect(() => {
    if (getPetInfoError) navigate('/login');
  }, [petData, getPetInfoError]);

  useEffect(() => {
    if (reservationData) console.log(reservationData);
    if (petData) console.log(petData);
  }, [reservationData, petData]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (coordinates) {
      setLat(coordinates.lat);
      setLon(coordinates.lng);
    }
  }, [coordinates]);

  return (
    <MobileLayout>
      <Flex direction="column" margin="0 0 114px 0">
        <HeightFitFlex
          direction="column"
          backgroundColor={theme.palette.Normal500}
          padding="0 0 37px 0"
        >
          <MainHeader
            logoColor={theme.palette.Black}
            iconColor={theme.palette.Normal800}
            searchIcon={true}
            onClickSearch={handleNavigate}
          />
          <CarouselHome
            upcomingReservation={
              reservationData?.reserveDday === -1 ||
              reservationData?.lastSinceDay === -1
                ? undefined
                : reservationData
            }
            lastReservation={
              // petData?.lastGrooming === undefined ? '' : petData.lastGrooming
              '2024-12-11 06:00'
            }
          />
        </HeightFitFlex>
        {/* 단골 빠른입찰 */}
        <Flex direction="column" padding="0 20px">
          <Flex direction="column" align="flex-start" margin="28px 0 0 0">
            {petData && (
              <Text
                typo="Caption1"
                colorCode={theme.palette.Gray400}
                margin="0 0 6px 0"
              >
                {petData.name}가 3회 이상 방문한 샵들이에요.
              </Text>
            )}
            <Text typo="Title1">단골 샵 빠른 입찰</Text>
            {regularListData && regularListData.homeShopList.length > 0 ? (
              <SpeedQuotation shopList={regularListData.homeShopList} />
            ) : (
              <Flex direction="column" padding="62px 99px" gap={12}>
                <Flex direction="column">
                  <Text typo="Caption4" colorCode={theme.palette.Gray400}>
                    아직 단골샵이 없어요!
                  </Text>
                  <Text typo="Caption4" colorCode={theme.palette.Gray400}>
                    단골샵을 찾으러 가볼까요?
                  </Text>
                </Flex>
                <Button
                  width="135px"
                  height="37px"
                  typo="Label4"
                  borderRadius="8px"
                  bg={theme.palette.Black}
                  fontColor={theme.palette.White}
                  onClick={handleNavigate}
                >
                  샵 둘러보기
                </Button>
              </Flex>
            )}
          </Flex>

          <a href="/ai/home">
            {/* AI 스타일링 배너 */}
            <StyleBannerWrapper
              borderRadius={12}
              widthPer={100}
              margin="26px 0 0 0"
            >
              <AiStyleBanner height={70} />
            </StyleBannerWrapper>
          </a>
        </Flex>
        <Flex direction="column">
          {/* 추천 샵 */}
          {recommendedListLoading ||
            (recommendedListPending && (
              <Flex margin="31px 0 6px 0">
                <Text typo="Caption1" colorCode={theme.palette.Gray300}>
                  Loading...
                </Text>
              </Flex>
            ))}
          {recommendedListData && (
            <RecommendedShop shopList={recommendedListData} />
          )}
        </Flex>
        <DuriNavbar />
      </Flex>
    </MobileLayout>
  );
};

export default Home;

const StyleBannerWrapper = styled(HeightFitFlex)`
  opacity: 0.9;
  box-shadow: 0px 0px 16px 0px rgba(195, 195, 195, 0.15);
  cursor: pointer;
`;
