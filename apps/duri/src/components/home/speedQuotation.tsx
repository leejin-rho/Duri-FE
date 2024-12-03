import { RegularShopProps } from '@duri/assets/types/shop';
import { Flex } from '@duri-fe/ui';

import { ShopHorizontal } from './shop';

const SpeedQuotation = ({
  shopList,
}: {
  shopList: RegularShopProps[];
}) => {
  return (
      <Flex gap={15}>
        <ShopHorizontal shopList={shopList} />
      </Flex>
  );
};

export default SpeedQuotation;
