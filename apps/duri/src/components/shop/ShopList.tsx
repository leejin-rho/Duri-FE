import { useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';

import {
  Button,
  DownArrow,
  Filter,
  Flex,
  FrontBtn,
  HardText,
  Send,
  Seperator,
  Text,
  theme,
  WidthFitFlex,
} from '@duri-fe/ui';
import { ShopInfoType, useBottomSheet } from '@duri-fe/utils';
import styled from '@emotion/styled';

import { SendRequestQBox } from './SendRequesQBox';
import { ShopLine } from './ShopLine';

interface ShopListProps {
  nearbyShops: ShopInfoType[] | null;
  filter: 'distance' | 'rating';
  onFilterChange: (filter: 'distance' | 'rating') => void;
}

export const ShopList = ({
  nearbyShops,
  filter,
  onFilterChange,
}: ShopListProps) => {
  // 필터용
  const { openSheet: openFilterSheet, bottomSheetProps: filterSheetProps } =
    useBottomSheet({
      maxHeight: 260,
    });

  // 요청서 전송용
  const { openSheet: openRequestSheet, bottomSheetProps: requestSheetProps } =
    useBottomSheet({
      maxHeight: 552,
    });

  // 선택된 가게 취합용
  const [selectedShops, setSelectedShops] = useState<number[]>([]);
  const toggleShopSelection = (id: number) => {
    setSelectedShops((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((shopId) => shopId !== id)
        : [...prevSelected, id],
    );
  };

  return (
    <>
      <Flex
        direction="column"
        backgroundColor={theme.palette.White}
        padding="108px 0px 92px 0px"
      >
        <Flex justify="space-between" height={65} padding="4px 20px 0 20px">
          <Button
            width="fit-content"
            height="32px"
            bg={theme.palette.White}
            borderRadius="99px"
            padding="10px"
            shadow={'0px 0px 4px 0px rgba(0, 0, 0, 0.25)'}
            onClick={openFilterSheet}
          >
            <Filter width={18} height={18} color={theme.palette.Gray600} />
            <HardText
              typo="Label3"
              margin="0 0 0 4px"
              colorCode={theme.palette.Gray600}
            >
              필터
            </HardText>
          </Button>

          <WidthFitFlex gap={12}>
            <Button
              width="fit-content"
              height="32px"
              bg={theme.palette.White}
              borderRadius="99px"
              padding="10px"
              shadow={'0px 0px 4px 0px rgba(0, 0, 0, 0.25)'}
              disabled={true}
            >
              <HardText typo="Label3" colorCode={theme.palette.Gray600}>
                영업중
              </HardText>
            </Button>

            <Button
              width="fit-content"
              height="32px"
              bg={theme.palette.White}
              padding="0"
              disabled={true}
            >
              <HardText typo="Label3" colorCode={theme.palette.Gray600}>
                {filter == 'distance' ? '거리순' : '별점순'}
              </HardText>
              <DownArrow width={18} />
            </Button>
          </WidthFitFlex>
        </Flex>
        <Seperator height="5px" />
        <ScrollFlex
          direction="column"
          justify="flex-start"
          gap={28}
          padding={
            selectedShops.length > 0
              ? '17px 20px 81px 20px'
              : '17px 20px 28px 20px'
          }
        >
          {/** 각 가게 정보 박스*/}
          {nearbyShops?.map((shop) => (
            <ShopLine
              key={shop.shopId}
              id={shop.shopId}
              title={shop.shopName}
              score={shop.shopRating}
              reviewNum={120}
              distance={shop.distance}
              address={shop.shopAddress}
              phone={shop.shopPhone}
              isClicked={selectedShops.includes(shop.shopId)}
              onClick={() => toggleShopSelection(shop.shopId)}
              tags={shop.tags}
            />
          ))}
        </ScrollFlex>

        {selectedShops.length > 0 ? (
          <FrontBtn
            height="53px"
            borderRadius="0"
            bg={theme.palette.Black}
            fontColor={theme.palette.White}
            onClick={openRequestSheet}
          >
            <Send width={18} height={17} color={theme.palette.White} />
            <Text typo="Body2" margin="0 0 0 12px">
              요청서 보내기
            </Text>
          </FrontBtn>
        ) : null}

        <BottomSheet {...filterSheetProps}>
          <Flex
            direction="column"
            align="flex-start"
            padding="24px 16px 0 16px"
          >
            <Text typo="Body1" margin="0 5px 22px 5px">
              정렬
            </Text>
            <Seperator />
            <Flex
              direction="column"
              align="flex-start"
              margin="22px 5px 0 5px"
              gap={36}
            >
              <Button
                bg="transparent"
                width="fit-content"
                padding="0"
                onClick={() => onFilterChange('distance')}
              >
                <Text
                  typo="Title3"
                  colorCode={
                    filter == 'distance'
                      ? theme.palette.Normal600
                      : theme.palette.Black
                  }
                >
                  거리순
                </Text>
              </Button>
              <Button
                bg="transparent"
                width="fit-content"
                padding="0"
                onClick={() => onFilterChange('rating')}
              >
                <Text
                  typo="Title3"
                  colorCode={
                    filter == 'rating'
                      ? theme.palette.Normal600
                      : theme.palette.Black
                  }
                >
                  별점순
                </Text>
              </Button>
            </Flex>
          </Flex>
        </BottomSheet>
        <BottomSheet {...requestSheetProps}>
          <SendRequestQBox />
        </BottomSheet>
      </Flex>
    </>
  );
};

const ScrollFlex = styled(Flex)`
  height: calc(100vh - 274.5px);
  overflow-y: auto;

  .scroll {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;
