import { useEffect, useRef } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';

import {
  Call,
  FilledLocation,
  Flex,
  HeightFitFlex,
  Pencil,
  SalonTag,
  Star,
  Text,
  theme,
  Time,
  WidthFitFlex,
} from '@duri-fe/ui';
import { useBottomSheet } from '@duri-fe/utils';
import styled from '@emotion/styled';

import ShopInfoBottomSheet from './ShopInfoBottomSheet';

interface ShopInfoAreaProps {
  name: string;
  address: string;
  phone: string;
  openTime: string;
  closeTime: string;
  tags: string[];
  info: string;
  kakaoTalk: string;
  rating: number;
  reviewCnt: number;
  onEdit: boolean;
  setOnEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const ShopInfoArea = ({
  name,
  address,
  phone,
  openTime,
  closeTime,
  tags,
  info,
  kakaoTalk,
  rating,
  reviewCnt,
  onEdit,
  setOnEdit,
}: ShopInfoAreaProps) => {
  const { openSheet, closeSheet, bottomSheetProps } = useBottomSheet({
    maxHeight: 636,
  });

  const shopInfoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        shopInfoRef.current &&
        !shopInfoRef.current.contains(e.target as Node)
      ) {
        setOnEdit(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [shopInfoRef]);

  return (
    <>
      <HeightFitFlex direction="column" gap={8} margin="24px 0 0 0">
        <Flex gap={17} justify="flex-start" margin="0 0 9px 0">
          <Text typo="Body2">{name}</Text>
          <WidthFitFlex gap={7}>
            <Star width={14} />
            <Text typo="Label3">
              {rating} ({reviewCnt})
            </Text>
          </WidthFitFlex>
        </Flex>

        {/** 주소 */}
        <Flex gap={6} justify="flex-start" height={16}>
          <FilledLocation width={21} />
          <TextLine typo="Caption3" colorCode={theme.palette.Gray400}>
            {address}
          </TextLine>
        </Flex>

        <ShopInfoContainer
          direction="column"
          gap={8}
          ref={shopInfoRef}
          onClick={() => setOnEdit(true)}
          align="flex-start"
        >
          {/** 전화번호 */}
          <Flex gap={10} justify="flex-start" margin="0 0 0 4px">
            <Call width={16} />
            <Text typo="Caption3" colorCode={theme.palette.Link}>
              {phone}
            </Text>
          </Flex>

          {/** 영업시간 */}
          <Flex gap={10} justify="flex-start" margin="0 0 0 4px">
            <Time width={16} />
            <Text typo="Caption3">
              {openTime} ~{closeTime}
            </Text>
          </Flex>

          {/** 태그 */}
          {tags.length > 0 ? (
            <TagList gap={10} justify="flex-start" margin="0 0 0 4px">
              {tags.map((tag, index) => (
                <SalonTag
                  key={index}
                  content={tag}
                  bg={theme.palette.Gray50}
                  borderRadius={2}
                />
              ))}
            </TagList>
          ) : (
            <Flex
              justify="flex-start"
              backgroundColor={theme.palette.Gray_White}
              borderRadius={8}
              padding="4px 16px"
            >
              <Text typo="Caption3" colorCode={theme.palette.Gray500}>
                매장 태그를 추가해주세요.
              </Text>
            </Flex>
          )}

          {/** 한줄소개 */}
          <Flex
            justify="flex-start"
            backgroundColor={theme.palette.Gray_White}
            padding="12px 16px"
            borderRadius={12}
          >
            <TextHeight typo="Caption3" colorCode={theme.palette.Gray500}>
              {info === null ? '매장 한줄소개를 작성해주세요.' : info}
            </TextHeight>
          </Flex>

          {onEdit && (
            <ShopEditArea
              backgroundColor={theme.palette.Black}
              borderRadius={12}
              onClick={openSheet}
            >
              <Pencil width={16} />
              <Text typo="Label3" colorCode={theme.palette.White}>
                수정하기
              </Text>
            </ShopEditArea>
          )}
        </ShopInfoContainer>
      </HeightFitFlex>

      <BottomSheet {...bottomSheetProps}>
        <ShopInfoBottomSheet
          phone={phone}
          openTime={openTime}
          closeTime={closeTime}
          tags={tags}
          info={info}
          kakaoTalk={kakaoTalk}
          closeSheet={closeSheet}
        />
      </BottomSheet>
    </>
  );
};

const ShopInfoContainer = styled(Flex)`
  position: relative;
  cursor: pointer;
`;

const ShopEditArea = styled(Flex)`
  position: absolute;
  top: -4px;
  left: 0;
  height: calc(100% + 4px);
  background-color: rgba(17, 17, 17, 0.5);
`;

const TextLine = styled(Text)`
  display: inline;
`;

const TextHeight = styled(Text)`
  line-height: 140%;
`;

const TagList = styled(WidthFitFlex)`
  flex-wrap: wrap;
`;

export default ShopInfoArea;
