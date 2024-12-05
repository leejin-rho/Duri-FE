import { RegularShopProps } from '@duri/assets/types/shop';
import { Flex, Text, theme } from '@duri-fe/ui';

import { ShopHorizontal } from './ShopHorizontal';

const SpeedQuotation = ({ shopList }: { shopList: RegularShopProps[] }) => {
  return (
    <>
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
      <Flex gap={15}>
        <ShopHorizontal shopList={shopList} />
      </Flex>
    </>
  );
};

export default SpeedQuotation;
