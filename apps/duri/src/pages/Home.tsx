import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  LastReservationProps,
  UpcomingReservationProps,
} from '@duri/assets/types/reservation';
import { RecommendeShopProps, RegularShopProps } from '@duri/assets/types/shop';
import CarouselHome from '@duri/components/home/Home';
import RecommendedShop from '@duri/components/home/RecommendedShop';
import SpeedQuotation from '@duri/components/home/SpeedQuotation';
import {
  AiStyleBanner,
  DuriNavbar,
  Flex,
  Header,
  HeightFitFlex,
  MobileLayout,
  Text,
  theme,
} from '@duri-fe/ui';
import {
  // useGetLastReservation,
  useGetPetInfo,
  useGetRecommendedShopList,
  useGetRegularShopList,
  useGetUpcomingReservation,
} from '@duri-fe/utils';
import { usePetStore } from '@duri-fe/utils';
import styled from '@emotion/styled';


const Home = () => {
  const petData = useGetPetInfo();
  const setPetInfo = usePetStore((state) => state.setPetInfo);

  const [regularShopList, setRegularShopList] = useState<RegularShopProps[]>(
    [],
  );
  const [recommendedShopList, setRecommendedShopList] = useState<
    RecommendeShopProps[]
  >([]);
  const [upcomingReservation, setUpcomingReservation] =
    useState<UpcomingReservationProps>();
  const [lastReservation, ] =
    useState<LastReservationProps>();
  const recommendedListData = useGetRecommendedShopList();
  const regularListData = useGetRegularShopList();
  const reservationData = useGetUpcomingReservation();
  // const lastReservationData = useGetLastReservation();
  const navigate = useNavigate();
  const handleClickSearchIcon = () => navigate('/shop');

  useEffect(() => {
    if (recommendedListData) setRecommendedShopList(recommendedListData);
    if (regularListData) setRegularShopList(regularListData);
    if (reservationData) setUpcomingReservation(reservationData);
    // if (lastReservationData) setLastReservation(lastReservationData);
  }, [
    recommendedListData,
    regularListData,
    reservationData,
    // lastReservationData,
  ]);

  useEffect(()=>{
    if(petData) setPetInfo(petData)
  },[petData])

  return (
    <MobileLayout>
      <Flex direction="column" margin="0 0 114px 0">
        <HeightFitFlex
          direction="column"
          backgroundColor={theme.palette.Normal500}
          padding="0 0 37px 0"
        >
          <Header
            logoColor={theme.palette.Black}
            iconColor={theme.palette.Normal800}
            searchIcon={true}
            onClickSearch={handleClickSearchIcon}
          />
          <CarouselHome
            upcomingReservation={upcomingReservation}
            lastReservation={lastReservation}
          />
        </HeightFitFlex>
        {/* 단골 빠른입찰 */}
        <Flex direction="column" padding="0 20px">
          <Flex direction="column" align="flex-start" margin="28px 0 0 0">
            <Text
              typo="Caption1"
              colorCode={theme.palette.Gray400}
              margin="0 0 6px 0"
            >
              {/* {pet?.name}가 3회 이상 방문한 샵들이에요. */}
            </Text>
            <Text typo="Title1">단골 샵 빠른 입찰</Text>
            {regularShopList && <SpeedQuotation shopList={regularShopList} />}
          </Flex>

          {/* AI 스타일링 배너 */}
          <StyleBannerWrapper
            borderRadius={12}
            widthPer={100}
            margin="26px 0 0 0"
          >
            <AiStyleBanner height={70} />
          </StyleBannerWrapper>

          {/* 추천 샵 */}
          {recommendedShopList && (
            <RecommendedShop shopList={recommendedShopList} />
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
