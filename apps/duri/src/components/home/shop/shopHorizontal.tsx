import { useNavigate } from 'react-router-dom';

import { RegularShopProps } from '@duri/assets/types/shop';
import {
  Button,
  Flex,
  HeightFitFlex,
  Image,
  NextArrow,
  Star,
  Text,
  theme,
} from '@duri-fe/ui';

export const ShopHorizontal = ({ shopList }: { shopList: RegularShopProps[] }) => {
  const navigate = useNavigate();
  const handleClickShop = (shopIdx: string) => navigate(`/shop/${shopIdx}`);
  return (
    <Flex direction="column" gap={15} margin="28px 0 0 0">
      {shopList &&
        shopList.map((shop: RegularShopProps) => (
          <HeightFitFlex key={shop.shopIdx} justify="flex-start" gap={15}>
            <Image
              width={100}
              height={100}
              borderRadius={8}
              src={shop.shopImg}
              onClick={() => handleClickShop(shop.shopIdx)}
            />
            <Flex
              direction="column"
              justify="space-between"
              align="flex-start"
              gap={20}
            >
              <Flex direction="column" align="flex-start">
                {/* onClick함수 추가해야 함!!! */}
                <Flex justify="flex-start" gap={2}>
                  <Text typo="Body2">{shop.shopName}</Text>
                  <NextArrow width={20} height={20} />
                </Flex>
                <HeightFitFlex justify="flex-start" gap={7}>
                  <Star width={14} height={14} />
                  <Text typo="Label3">
                    {shop.shopScore}&nbsp;({shop.shopReview})
                  </Text>
                </HeightFitFlex>
              </Flex>
              {/* onClick함수 추가해야 함!!! */}
              <Button
                height="37px"
                bg={theme.palette.Black}
                fontColor={theme.palette.White}
                borderRadius="8px"
                typo="Label3"
              >
                입찰 넣기
              </Button>
            </Flex>
          </HeightFitFlex>
        ))}
    </Flex>
  );
};
