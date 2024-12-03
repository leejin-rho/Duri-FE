import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { RecommendeShopProps, RegularShopProps } from '@duri/assets/types/shop';
import CarouselHome from '@duri/components/home/home';
import RecommendedShop from '@duri/components/home/recommendedShop';
import SpeedQuotation from '@duri/components/home/speedQuotation';
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
  useGetRecommendedShopList,
  useGetRegularShopList,
} from '@duri-fe/utils';
import styled from '@emotion/styled';

const Home = () => {
  const [regularShopList, setRegularShopList] = useState<RegularShopProps[]>(
    [],
  );
  const [recommendedShopList, setRecommendedShopList] = useState<
    RecommendeShopProps[]
  >([]);
  const recommendedListData = useGetRecommendedShopList();
  const regularListData = useGetRegularShopList();
  const navigate = useNavigate();
  const handleClickSearchIcon = () => navigate('/search');

  useEffect(() => {
    if (recommendedListData) {
      setRecommendedShopList(recommendedListData);
    }
    if (regularListData) {
      setRegularShopList(regularListData);
    }
  }, [recommendedListData, regularListData]);

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
          <CarouselHome />
        </HeightFitFlex>
        <Flex direction="column" padding="0 20px">
          {/* 단골 빠른입찰 */}
          <Flex direction="column" align="flex-start" margin="28px 0 0 0">
            <Text
              typo="Caption1"
              colorCode={theme.palette.Gray400}
              margin="0 0 6px 0"
            >
              멍멍이가 3회 이상 방문한 샵들이에요.
            </Text>
            <Text typo="Title1">단골 샵 빠른 입찰</Text>
          </Flex>
          {regularShopList && <SpeedQuotation shopList={regularShopList} />}

          {/* AI 스타일링 배너 */}
          <StyleBannerWrapper
            borderRadius={12}
            widthPer={100}
            margin="26px 0 0 0"
          >
            <AiStyleBanner height={70} />
          </StyleBannerWrapper>

          {/* 추천 샵 */}
          <Flex direction="column" align="flex-start">
            <Text
              typo="Caption1"
              colorCode={theme.palette.Gray400}
              margin="31px 0 6px 0"
            >
              피부 질환이 있는 강아지들이 주로 다니는 샵이에요!
            </Text>
            <Text typo="Title1">여기 샵은 어때요?</Text>
          </Flex>
          <RecommendedShop shopList={recommendedShopList} />
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
