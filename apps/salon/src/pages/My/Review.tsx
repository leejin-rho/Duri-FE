import { useNavigate } from 'react-router-dom';

import { Flex, Header, MobileLayout, SalonNavbar, Text } from '@duri-fe/ui';
import { UseGetMyShopReviewList } from '@duri-fe/utils';
import { ShopReviewBox } from '@salon/components/my/shop/ShopReviewBox';

const ReviewPage = () => {
  const navigate = useNavigate();
  const { data: reviewData } = UseGetMyShopReviewList({});

  // reviewData가 존재하는 경우에만 처리
  if (!reviewData) {
    return <Text>Loading...</Text>; // 데이터가 로딩 중일 경우 처리
  }

  const handleClickBackButton = () => {
    navigate(-1);
  };

  return (
    <MobileLayout>
      <Header
        backIcon
        title="후기 관리"
        titleAlign="start"
        onClickBack={handleClickBackButton}
      />
      {reviewData &&
        reviewData.map((review) => (
          <Flex
            key={review.reviewId}
            direction="column"
            justify="flex-start"
            gap={10}
            padding="0 10px"
            margin="0 0 104px 0"
          >
            <ShopReviewBox key={review.reviewId} review={review} />
          </Flex>
        ))}
      <SalonNavbar />
    </MobileLayout>
  );
};

export default ReviewPage;
