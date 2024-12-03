import { useNavigate } from 'react-router-dom';

import { RegularShopProps } from '@duri/assets/types/shop';
import {
  Button,
  Flex,
  HeightFitFlex,
  Image,
  NextArrow,
  Send,
  Star,
  Text,
  theme,
} from '@duri-fe/ui';
import styled from '@emotion/styled';

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
              <Wrapper direction='column' align='flex-start'>
                {/* onClick함수 추가해야 함!!! */}
                <Flex justify='flex-start' gap={2}>
                  <Text typo='Title3'>{shop.shopName}</Text>
                  <NextArrow width={20} height={20} />
                </Flex>
                <HeightFitFlex align='flex-start' gap={7}>
                  <Star width={14} height={14} />
                  <Flex justify='flex-start' gap={3}>
                  <Text typo='Label1'>
                    {shop.shopScore}
                  </Text>
                  <Text typo='Label3' justify='flex-start'>
                  ({shop.shopReview})
                  </Text>
                  </Flex>
                </HeightFitFlex>
              </Wrapper>
              {/* onClick함수 추가해야 함!!! */}
              <Button
                height="37px"
                bg={theme.palette.Black}
                fontColor={theme.palette.White}
                borderRadius="8px"
                typo="Label2"
              >
                <Send width={18} height={17} /> &nbsp;
                입찰 넣기
              </Button>
            </Flex>
          </HeightFitFlex>
        ))}
    </Flex>
  );
};

const Wrapper = styled(HeightFitFlex)`
  cursor: pointer;
`