import { useNavigate } from 'react-router-dom';

import {
  Card,
  Flex,
  Header,
  Image,
  MobileLayout,
  PetInfo,
  SalonNavbar,
  Text,
} from '@duri-fe/ui';
import { UseGetMyShopReviewList } from '@duri-fe/utils';
import { ReviewUserInfo } from '@salon/components/my/shop/ReviewUserInfo';

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
        reviewData.map(
          ({
            reviewId,
            userImageURL,
            userName,
            rating,
            createdAt,
            imgUrl,
            comment,
            petInfo,
          }) => (
            <Flex
              key={reviewId}
              direction="column"
              justify="flex-start"
              gap={10}
              padding="0 10px"
              margin="0 0 104px 0"
            >
              <Card key={reviewId} borderRadius={16} padding="15px 17px">
                {/* 사용자 프로필 + 작성일자 + 버튼 */}
                <ReviewUserInfo
                  reviewId={reviewId}
                  userImageURL={userImageURL}
                  userName={userName}
                  rating={rating}
                  createdAt={createdAt}
                />

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
          ),
        )}
      <SalonNavbar />
    </MobileLayout>
  );
};

export default ReviewPage;
