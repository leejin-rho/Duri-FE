import React from 'react';

import { RecommendedShopType } from '@duri/assets/types';
import { Flex, Text, theme } from '@duri-fe/ui';

import { ShopVertical } from './ShopVertical';

const RecommendedShop = ({ shopList }: { shopList: RecommendedShopType[] }) => {
  return (
    <>
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
      <Flex justify="flex-start" gap={15} margin="23px 0 0 0">
        <ShopVertical shopList={shopList} />
      </Flex>
    </>
  );
};

export default RecommendedShop;
