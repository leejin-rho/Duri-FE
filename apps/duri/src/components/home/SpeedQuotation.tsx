import React from 'react';

import { RegularShopType } from '@duri/assets/types/shop';
import { Flex } from '@duri-fe/ui';

import { ShopHorizontal } from './ShopHorizontal';

const SpeedQuotation = ({ shopList }: { shopList: RegularShopType[] }) => {
  return (
    <>
      <Flex gap={15}>
        <ShopHorizontal shopList={shopList} />
      </Flex>
    </>
  );
};

export default SpeedQuotation;
