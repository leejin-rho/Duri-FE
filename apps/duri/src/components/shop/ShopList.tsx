import { Flex, theme } from '@duri-fe/ui';

import { ShopLine } from './ShopLine';

export const ShopList = () => {
  return (
    <Flex
      direction="column"
      backgroundColor={theme.palette.White}
      padding="136px 0 0 0"
    >
      <ShopLine />
      <ShopLine />
      <ShopLine />
      <ShopLine />
      <ShopLine />
    </Flex>
  );
};
