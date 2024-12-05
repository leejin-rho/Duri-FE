import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { RecommendeShopProps, RegularShopProps } from '@duri/assets/types/shop';
import CarouselHome from '@duri/components/home/Homehome';
import SpeedQuotation from '@duri/components/home/Quotation';
import RecommendedShop from '@duri/components/home/Recommend';
import {
  AiStyleBanner,
  DuriNavbar,
  Flex,
  Header,
  HeightFitFlex,
  MobileLayout,
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
          {recommendedShopList && <RecommendedShop shopList={recommendedShopList} />}
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
