import { BottomSheet } from 'react-spring-bottom-sheet';
import { useNavigate } from 'react-router-dom';

import { RegularShopType } from '@duri/assets/types/shop';
import {
  Button,
  Flex,
  HeightFitFlex,
  NextArrow,
  ProfileImage,
  Send,
  Star,
  Text,
  theme,
  WidthFitFlex,
} from '@duri-fe/ui';
import { useBottomSheet } from '@duri-fe/utils';
import styled from '@emotion/styled';

import { SendRequestQBox } from '../shop/SendRequesQBox';

export const ShopHorizontal = ({
  shopList,
  home = true,
}: {
  shopList: RegularShopType[];
  home: boolean;
}) => {
  const navigate = useNavigate();
  const handleClickShop = (shopIdx: number) => navigate(`/shop/${shopIdx}`);
  const { openSheet, bottomSheetProps } = useBottomSheet({
    maxHeight: 556,
  });
  return (
    <Flex direction="column" gap={20} margin="28px 0 0 0">
      {shopList &&
        shopList.map((shop: RegularShopType) => (
          <HeightFitFlex key={shop.shopId} justify="flex-start" gap={15}>
            <ImageBox onClick={() => handleClickShop(shop.shopId)}>
              <ProfileImage
                width={100}
                height={100}
                borderRadius={8}
                src={shop.imageURL}
              />
            </ImageBox>
            <Flex
              direction="column"
              justify="space-between"
              align="flex-start"
              gap={20}
            >
              <Flex justify="space-between">
                <Wrapper direction="column" align="flex-start">
                  <Flex justify="flex-start" gap={2} onClick={() => handleClickShop(shop.shopId)}>
                    <Text typo="Title3">{shop.shopName}</Text>
                    <NextArrow width={20} height={20} />
                  </Flex>
                  <HeightFitFlex align="flex-start" gap={7} margin="8px 0 0 0">
                    <Star width={14} height={14} />
                    <Flex justify="flex-start" gap={3}>
                      <Text typo="Label1">{shop.rating}</Text>
                      <Text typo="Label3" justify="flex-start">
                        ({shop.reviewCnt})
                      </Text>
                    </Flex>
                  </HeightFitFlex>
                </Wrapper>
                {!home && (
                  <WidthFitFlex>
                    <LineText typo="Caption5" colorCode={theme.palette.Gray300}>
                      {shop.visitCnt}회 방문했어요
                    </LineText>
                  </WidthFitFlex>
                )}
              </Flex>
              {/* onClick함수 추가해야 함!!! */}
              <Button
                height="37px"
                bg={theme.palette.Black}
                fontColor={theme.palette.White}
                borderRadius="8px"
                typo="Label2"
                onClick={openSheet}
              >
                <Send width={18} height={17} /> &nbsp; 입찰 넣기
              </Button>
            </Flex>
          </HeightFitFlex>
        ))}
      <BottomSheet {...bottomSheetProps}>
        <SendRequestQBox />
      </BottomSheet>
    </Flex>
  );
};

const Wrapper = styled(HeightFitFlex)`
  cursor: pointer;
  width: fit-content;
`;
const LineText = styled(Text)`
  word-break: no-wrap;
`;
const ImageBox = styled(WidthFitFlex)`
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;
