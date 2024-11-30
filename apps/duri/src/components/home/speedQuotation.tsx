import { RegularShopProps } from '@duri/assets/types/shop';
import { Flex, Text, theme } from '@duri-fe/ui';

import { ShopHorizontal } from './shop';

const SpeedQuotation = ({
  name,
  shopList,
}: {
  name: string;
  shopList: RegularShopProps[];
}) => {
  return (
    <Flex direction="column" align="flex-start" margin="28px 0 0 0">
      <Text typo="Body3" colorCode={theme.palette.Gray400} margin='0 0 6px 0'>
        {name}가 3회 이상 방문한 샵들이에요.
      </Text>
      <Text typo="Heading4">단골 샵 빠른 입찰</Text>
      <Flex gap={15}>
        <ShopHorizontal shopList={shopList} />
      </Flex>
    </Flex>
  );
};

export default SpeedQuotation;
