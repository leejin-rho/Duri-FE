import React from 'react';

import { RecommendedShopType } from '@duri/assets/types';
import { Flex, Text, theme } from '@duri-fe/ui';
import styled from '@emotion/styled';

import { ShopVertical } from './ShopVertical';

const RecommendedShop = ({ shopList }: { shopList: RecommendedShopType[] }) => {
  if (!shopList || shopList.length === 0) {
    return <></>;
  }
  return (
    <>
      <Flex direction="column" align="flex-start" padding="0 20px">
        {shopList && (
          <Text
            typo="Caption1"
            colorCode={theme.palette.Gray400}
            margin="31px 0 6px 0"
          >
            {shopList[0].recommendFeature} 강아지들이 주로 다니는 샵이에요!
          </Text>
        )}
        <Text typo="Title1">여기 샵은 어때요?</Text>
      </Flex>
      <ShopWrapper justify="flex-start" margin="23px 0 0 0" height={220}>
        <ShopVertical shopList={shopList} />
      </ShopWrapper>
    </>
  );
};

export default RecommendedShop;

const ShopWrapper = styled(Flex)`
  overflow-x: auto;
  overflow-y: hidden;
`;
