import { RecommendeShopProps } from '@duri/assets/types/shop';
import { Flex } from '@duri-fe/ui';

import { ShopVertical } from './shop';

const RecommendedShop = ({ shopList }: { shopList: RecommendeShopProps[] }) => {
  return (
    <Flex justify="flex-start" gap={15} margin="23px 0 0 0">
      <ShopVertical shopList={shopList} />
    </Flex>
  );
};

export default RecommendedShop;
