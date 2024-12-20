import { useNavigate } from 'react-router-dom';

import ShopDefaultImage from '@assets/images/pngs/ShopDefaultImage.png';
import { RecommendedShopType } from '@duri/assets/types/shop';
import { Button, Flex, HeightFitFlex, Image, Text, theme } from '@duri-fe/ui';
import { getShortenedAddress } from '@duri-fe/utils';
import styled from '@emotion/styled';

export const ShopVertical = ({
  shopList,
}: {
  shopList: RecommendedShopType[];
}) => {
  const navigate = useNavigate();
  const handleClickShop = (shopIdx: number) => navigate(`/shop/${shopIdx}`);

  return (
    <FitFlex justify="flex-start" gap={6} padding="5px 20px">
      {shopList &&
        shopList.map((shop: RecommendedShopType) => (
          <Wrapper
            key={shop.shopId}
            direction="column"
            justify="flex-start"
            align="flex-start"
            width={152}
            height={200}
            padding="3px"
            onClick={() => handleClickShop(shop.shopId)}
          >
            <Image
              width={146}
              height={81}
              borderRadius={8}
              src={shop.imageURL === '' ? ShopDefaultImage : shop.imageURL}
            />

            <Flex
              direction="column"
              align="flex-start"
              padding="0 0 8px 0"
              margin="13px 0 8px 6px"
              gap={8}
            >
              <Text typo="Title3">{shop.shopName}</Text>
              <Text
                typo="Caption4"
                colorCode={theme.palette.Gray500}
              >
                {getShortenedAddress(shop.address)}
              </Text>
              <Flex
                direction="column"
                align="flex-start"
                gap={3}
              >
                <TagWrapper
                  direction="column"
                  justify="flex-start"
                  align="flex-start"
                  gap={3}
                >
                  {shop.shopTag1 && (
                    <Tag
                      key="tag1"
                      typo="Caption5"
                      bg={theme.palette.Gray50}
                      fontColor={theme.palette.Gray500}
                      width="fit-content"
                      height="19px"
                      borderRadius="2px"
                    >
                      {shop.shopTag1}
                    </Tag>
                  )}
                  {shop.shopTag2 && (
                    <Tag
                      key="tag2"
                      typo="Caption5"
                      bg={theme.palette.Gray50}
                      fontColor={theme.palette.Gray500}
                      width="fit-content"
                      height="19px"
                      borderRadius="2px"
                    >
                      {shop.shopTag2}
                    </Tag>
                  )}
                </TagWrapper>
              </Flex>
            </Flex>
          </Wrapper>
        ))}
    </FitFlex>
  );
};

const Tag = styled(Button)`
  padding: 10px;
`;
const Wrapper = styled(Flex)`
  border-radius: 12px;
  background: var(--bw-white, #fff);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

const FitFlex = styled(HeightFitFlex)`
  width: fit-content;
`;

const TagWrapper = styled(Flex)`
  min-height: 45px;
`;
