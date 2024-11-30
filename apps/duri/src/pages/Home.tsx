import { useEffect, useState } from 'react';

import { RecommendeShopProps, RegularShopProps } from '@duri/assets/types/shop';
import RecommendedShop from '@duri/components/home/recommendedShop';
import SpeedQuotation from '@duri/components/home/speedQuotation';
import {
  AiStyleBanner,
  DuriNavbar,
  Flex,
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
      <HeightFitFlex backgroundColor={theme.palette.Normal500}>
        캐러셀 표시 영역
      </HeightFitFlex>
      <Flex direction="column" padding="0 20px">
        {/* 단골 빠른입찰 */}
        <SpeedQuotation name="멍멍이" shopList={regularShopList} />

        {/* AI 스타일링 배너 */}
        <StyleBannerWrapper>
          <AiStyleBanner height={70} />
        </StyleBannerWrapper>

        {/* 추천 샵 */}
        <RecommendedShop shopList={recommendedShopList} />
      </Flex>
      <DuriNavbar />
    </MobileLayout>
  );
};

export default Home;

const StyleBannerWrapper = styled.div`
  border-radius: 12px;
  opacity: 0.9;
  box-shadow: 0px 0px 16px 0px rgba(195, 195, 195, 0.15);
  margin-top: 26px;
  width: 100%;
`;
