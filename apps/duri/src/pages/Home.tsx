import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { defaultPetInfo } from '@duri/assets/data/pet';
import {
  PetInfoType,
  RecommendedShopType,
  RegularShopType,
} from '@duri/assets/types';
import { UpcomingReservationType } from '@duri/assets/types/reservation';
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
  useGetPetInfo,
  // useGetRecommendedShopList,
  // useGetRegularShopList,
  useGetUpcomingReservation,
} from '@duri-fe/utils';
import styled from '@emotion/styled';

const Home = () => {
  const petData = useGetPetInfo();
  const [petInfo, setPetInfo] = useState<PetInfoType>(defaultPetInfo);
  // const [regularShopList, setRegularShopList] = useState<RegularShopType[]>([]);
  const [regularShopList] = useState<RegularShopType[]>([]);
  // 사용자 lat, lon 정보가 필요함!!!!
  // const [recommendedShopList, setRecommendedShopList] = useState<
  const [recommendedShopList, ] = useState<
    RecommendedShopType[]
  >([]);
  const [upcomingReservation, setUpcomingReservation] =
    useState<UpcomingReservationType>();
  // const recommendedListData = useGetRecommendedShopList();
  // const regularListData = useGetRegularShopList();
  const reservationData = useGetUpcomingReservation();

  const navigate = useNavigate();
  const handleNavigate = () => navigate('/shop');

  useEffect(() => {
    // if (recommendedListData) console.log(recommendedListData)
    // if (recommendedListData) setRecommendedShopList(recommendedListData);
    if (reservationData) setUpcomingReservation(reservationData);
  }, [reservationData]);

  useEffect(() => {
    if (petData) setPetInfo(petData);
  }, [petData]);

  // useEffect(()=>{
  //   if(regularListData) setRegularShopList(regularListData.homeShopList)
  // },[regularListData])

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
              upcomingReservation?.reserveDday === -1 ||
              upcomingReservation?.lastSinceDay === -1
                ? undefined
                : upcomingReservation
            }
            lastReservation={petData?.lastGrooming}
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
                {petInfo.name}가 3회 이상 방문한 샵들이에요.
              </Text>
            )}
            <Text typo="Title1">단골 샵 빠른 입찰</Text>
            {regularShopList.length > 0 ? (
              <SpeedQuotation shopList={regularShopList} />
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

          {/* AI 스타일링 배너 */}
          <StyleBannerWrapper
            borderRadius={12}
            widthPer={100}
            margin="26px 0 0 0"
          >
            <AiStyleBanner height={70} />
          </StyleBannerWrapper>

          {/* 추천 샵 */}
          {recommendedShopList.length > 0 && (
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
