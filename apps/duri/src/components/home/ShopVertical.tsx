import { useNavigate } from 'react-router-dom';

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
            padding="3px"
            onClick={() => handleClickShop(shop.shopId)}
          >
            {shop.imageURL ? (
              <Image
                width={146}
                height={81}
                borderRadius={8}
                src={shop.imageURL}
              />
            ) : (
              <Flex
                backgroundColor={theme.palette.Gray_White}
                width={146}
                height={81}
                borderRadius={8}
              ></Flex>
            )}
            <HeightFitFlex direction="column" align="flex-start">
              <Text typo="Title3" margin="13px 0 11px 6px">
                {shop.shopName}
              </Text>
              <Text
                typo="Caption4"
                colorCode={theme.palette.Gray500}
                margin="0 0 12px 6px"
              >
                {getShortenedAddress(shop.address)}
              </Text>
              <HeightFitFlex
                direction="column"
                align="flex-start"
                gap={3}
                margin="0 0 0 6px"
              >
                {
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
                }
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
              </HeightFitFlex>
                <Text typo="Caption4" colorCode={theme.palette.Gray500}>
                  {shop.address}
                </Text>

              <TagWrapper direction="column" align="flex-start" gap={3}>
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
            </HeightFitFlex>
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

const TagWrapper = styled(HeightFitFlex)`
  min-height: 45px;
`;