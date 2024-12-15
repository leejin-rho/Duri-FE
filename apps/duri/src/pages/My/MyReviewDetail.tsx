import { useNavigate, useParams } from 'react-router-dom';

import { ReviewUserInfo } from '@duri/components/my/review/ReviewUserInfo';
import {
  Button,
  Card,
  DuriNavbar,
  Flex,
  Header,
  Image,
  MobileLayout,
  NextArrow,
  PetInfo,
  Text,
  theme,
} from '@duri-fe/ui';
import { useGetReviewDetail } from '@duri-fe/utils';

const MyReviewDetailPage = () => {
  const { reviewId } = useParams<{ reviewId: string }>();
  const { data: reviewData } = useGetReviewDetail(Number(reviewId));
  const navigate = useNavigate();
  const handleClickBackButton = () => {
    navigate('/my/review');
  };
  const handleClickShopButton = (shopId: number) => {
    navigate(`/shop/${shopId}`);
  };

  // reviewData가 존재하는 경우에만 처리
  if (!reviewData) {
    return <Text>Loading...</Text>; // 데이터가 로딩 중일 경우 처리
  }

  const {
    userImageURL,
    userName,
    reviewId: reviewDataId,
    rating,
    createdAt,
    shopId,
    shopName,
    comment,
    imgUrl,
    petInfo,
  } = reviewData;

  return (
    <MobileLayout>
      <Header
        backIcon
        title="내가 쓴 후기"
        titleAlign="start"
        onClickBack={handleClickBackButton}
      />
      {reviewData && (
        <Flex
          direction="column"
          justify="flex-start"
          gap={10}
          padding="0 10px"
          margin="0 0 104px 0"
        >
          <Card key={reviewId} borderRadius={16} padding="15px 17px">
            {/* 사용자 프로필 + 작성일자 + 버튼 */}
            <ReviewUserInfo
              reviewId={reviewDataId}
              userImageURL={userImageURL}
              userName={userName}
              rating={rating}
              createdAt={createdAt}
            />

            {/* 가게 이동 버튼 */}
            <Flex margin="15px">
              <Button
                onClick={() => handleClickShopButton(shopId)}
                padding="10px"
                borderRadius="8px"
                bg={theme.palette.Gray_White}
              >
                <Flex justify="space-between">
                  <Text typo="Body3">{shopName}</Text>
                  <NextArrow width={29} height={31} />
                </Flex>
              </Button>
            </Flex>

            <Flex
              direction="column"
              padding="0 12.5px"
              margin="0 0 15px 0"
              gap={15}
              align="flex-start"
            >
              <Flex justify="flex-start">
                {/* 리뷰 사진 */}
                {imgUrl && (
                  <Image
                    src={imgUrl}
                    alt="리뷰 사진"
                    borderRadius={8}
                    width={90}
                    height={90}
                  />
                )}
              </Flex>

              {/* 리뷰 텍스트 */}
              <Text typo="Label3">{comment}</Text>
            </Flex>

            {/* 펫 정보 */}
            {petInfo && (
              <PetInfo
                age={petInfo.age}
                breed={petInfo.breed}
                gender={petInfo.gender}
                image={petInfo.imageURL}
                name={petInfo.name}
                weight={petInfo.weight}
                neutering={petInfo.neutering}
                themeVariant="compact"
              />
            )}
          </Card>
        </Flex>
      )}
      <DuriNavbar />
    </MobileLayout>
  );
};

export default MyReviewDetailPage;
