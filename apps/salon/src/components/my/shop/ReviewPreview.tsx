import {
  Flex,
  HeightFitFlex,
  RatingStars,
  Text,
  WidthFitFlex,
} from '@duri-fe/ui';
import { MyShopReviewType } from '@duri-fe/utils';

import { ShopReviewBox } from './ShopReviewBox';

interface ReviewPreviewProps {
  shopRating: number;
  reviewCnt: number;
  reviewData: MyShopReviewType[];
}

const ReviewPreview = ({
  shopRating,
  reviewCnt,
  reviewData,
}: ReviewPreviewProps) => {
  return (
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
  );
};

export default ReviewPreview;
