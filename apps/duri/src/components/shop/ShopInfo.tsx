import { BottomSheet } from 'react-spring-bottom-sheet';
import { useNavigate } from 'react-router-dom';

import {
  BeforeArrow,
  Call,
  DesignerInfo,
  DownArrow,
  FilledLocation,
  Flex,
  HeightFitFlex,
  RatingStars,
  Star,
  Text,
  theme,
  Time,
  WidthFitFlex,
} from '@duri-fe/ui';
import {
  useBottomSheet,
  useGetShopDetailInfo,
  UseGetShopReviewList,
} from '@duri-fe/utils';
import styled from '@emotion/styled';

import { SendRequestQBox } from './SendRequesQBox';
import { ShopPhotos } from './ShopPhotos';
import { ShopReviewBox } from './ShopReviewBox';

interface ShopInfoProps {
  shopIdx: number;
  lat: number;
  lng: number;
}

export const ShopInfo = ({
  shopIdx,
  lat,
  lng,
  isForBottomSheet,
}: ShopInfoProps & { isForBottomSheet?: boolean }) => {
  const navigate = useNavigate();

  console.log(shopIdx);

  const { closeSheet, bottomSheetProps } = useBottomSheet({
    maxHeight: 556,
  });

  const { data: shopData } = useGetShopDetailInfo({
    shopBaseInfo: {
      shopId: shopIdx,
      lat: lat,
      lon: lng,
    },
  });

  const { data: reviewData } = UseGetShopReviewList({
    shopId: shopIdx,
  });

  if (!shopData) return null;

  const {
    shopDetail: {
      shopId,
      shopImage,
      shopName,
      shopAddress,
      shopPhone,
      shopOpenTime,
      shopCloseTime,
      shopRating,
      reviewCnt,
      distance,
    },
    groomerProfileDetail: {
      id: groomerId,
      name: groomerName,
      gender: groomerGender,
      age: groomerAge,
      history: groomerHistory,
      image: groomerImage,
      info: groomerInfo,
      license: groomerLicense,
    },
    shopImages,
  } = shopData;

  return (
    shopData && (
      <>
        <HeightFitFlex
          justify="flex-start"
          padding="0 5px"
          onClick={
            isForBottomSheet
              ? () => {}
              : () => {
                  navigate(-1);
                }
          }
        >
          {isForBottomSheet ? (
            <DownArrow width={42} />
          ) : (
            <BeforeArrow width={42} />
          )}
        </HeightFitFlex>
        <ShopInfoContainer
          direction="column"
          align="flex-start"
          padding="0 20px 160px 20px"
          key={shopId}
        >
          <MainImg src={shopImage} />
          {/**헤더 */}
          <HeightFitFlex direction="column" gap={8} margin="24px 0 0 0">
            <Flex gap={17} justify="flex-start" margin="0 0 9px 0">
              <Text typo="Body2">{shopName}</Text>
              <WidthFitFlex gap={7}>
                <Star width={14} />
                <Text typo="Label3">
                  {shopRating} ({reviewCnt})
                </Text>
              </WidthFitFlex>
            </Flex>

            <Flex gap={6} justify="flex-start">
              <FilledLocation width={21} />
              <TextLine typo="Caption3" colorCode={theme.palette.Gray400}>
                <MarkText>{distance}m | </MarkText>
                {shopAddress}
              </TextLine>
            </Flex>

            <Flex gap={10} justify="flex-start" margin="0 0 0 4px">
              <Call width={16} />
              <Text typo="Caption3" colorCode={theme.palette.Link}>
                {shopPhone}
              </Text>
            </Flex>

            <Flex gap={10} justify="flex-start" margin="0 0 0 4px">
              <Time width={16} />
              <Text typo="Caption3">
                {shopOpenTime.hour}:{shopOpenTime.minute} ~ {shopCloseTime.hour}
                :{shopCloseTime.minute}
              </Text>
            </Flex>
          </HeightFitFlex>

          <HeightFitFlex
            justify="flex-start"
            backgroundColor={theme.palette.Gray_White}
            padding="15px 16px"
            borderRadius={12}
            margin="26px 0 0 0"
          >
            <TextHeight typo="Caption2" colorCode={theme.palette.Gray500}>
              {groomerInfo}
            </TextHeight>
          </HeightFitFlex>

          {/**디자이너 */}
          <HeightFitFlex
            direction="column"
            margin="18px 0"
            align="flex-start"
            gap={24}
          >
            <Text typo="Title3">디자이너 소개</Text>
            <DesignerInfo
              version="vertical"
              designerId={groomerId}
              name={groomerName}
              age={groomerAge}
              gender={groomerGender === 'F' ? '여성' : '남성'}
              experience={groomerHistory}
              roles={groomerLicense}
              imageUrl={groomerImage}
            />
          </HeightFitFlex>

          {/**샵 내부 */}
          <HeightFitFlex
            direction="column"
            gap={24}
            margin="36px 0 0 0"
            align="flex-start"
          >
            <Text typo="Title3">샵 내부</Text>
            <ShopPhotos images={shopImages} />
          </HeightFitFlex>

          {/**리뷰 */}
          <HeightFitFlex
            direction="column"
            align="flex-start"
            margin="32px 0 0 0"
            gap={24}
          >
            <WidthFitFlex gap={7}>
              <Text typo="Title3">리뷰</Text>
              <WidthFitFlex>
                <Text typo="Label3">{shopRating}</Text>
                <RatingStars score={shopRating} size={14} />
                <Text typo="Label3">({reviewCnt})</Text>
              </WidthFitFlex>
            </WidthFitFlex>
            {reviewData && reviewData.length > 0 ? (
              reviewData.map((review) => (
                <ShopReviewBox key={review.reviewId} review={review} />
              ))
            ) : (
              <Flex height={48}>
                <Text>아직 등록된 리뷰가 없습니다.</Text>
              </Flex>
            )}
          </HeightFitFlex>
        </ShopInfoContainer>
        {/* <FrontBtn
          height="53px"
          borderRadius="0"
          bg={theme.palette.Black}
          fontColor={theme.palette.White}
          onClick={openSheet}
        >
          <Send width={18} height={17} color={theme.palette.White} />
          <Text typo="Body2" margin="0 0 0 12px">
            요청서 보내기
          </Text>
        </FrontBtn> */}
        <BottomSheet {...bottomSheetProps}>
          <SendRequestQBox closeBottomSheet={closeSheet} />
        </BottomSheet>
      </>
    )
  );
};
const ShopInfoContainer = styled(Flex)`
  overflow-y: auto;
`;

const MarkText = styled.span`
  font-weight: 600;
`;

const TextLine = styled(Text)`
  display: inline;
`;

const TextHeight = styled(Text)`
  line-height: 140%;
`;

const MainImg = styled.img`
  width: 100%;
  aspect-ratio: 330 / 180;
  border-radius: 12px;
  object-fit: cover;
`;
