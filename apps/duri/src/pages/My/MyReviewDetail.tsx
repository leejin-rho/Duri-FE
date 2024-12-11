import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PetInfoType } from '@duri/assets/types';
import { ReviewDetailType } from '@duri/assets/types/my';
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
import { useGetPetInfo } from '@duri-fe/utils';

const dummy = {
  reviewCnt: 3,
  reviewList: [
    {
      userId: 1,
      userImageURL: 'https://example.com/user1.jpg',
      userName: '김철수',
      reviewId: 1,
      createdAt: '2024-12-07',
      rating: 3,
      shopId: 1,
      shopName: '강남 미용샵',
      comment: '곰돌이컷 너무 귀여운데 강쥐가 스트레스 받았던 것 같아요ㅜ.ㅜ',
      reviewImageURL:
        'https://duri-cicd-bucket.s3.ap-northeast-2.amazonaws.com/review/18760919-171f-44e8-a2d0-824394f80c1c_곰돌이컷 전.png',
    },
    {
      userId: 1,
      userImageURL: 'https://example.com/user1.jpg',
      userName: '김철수',
      reviewId: 1,
      createdAt: '2024-12-07',
      rating: 3,
      shopId: 1,
      shopName: '강남 미용샵',
      comment: '곰돌이컷 너무 귀여운데 강쥐가 스트레스 받았던 것 같아요ㅜ.ㅜ',
      reviewImageURL:
        'https://duri-cicd-bucket.s3.ap-northeast-2.amazonaws.com/review/18760919-171f-44e8-a2d0-824394f80c1c_곰돌이컷 전.png',
    },
    {
      userId: 1,
      userImageURL: 'https://example.com/user1.jpg',
      userName: '김철수',
      reviewId: 1,
      createdAt: '2024-12-07',
      rating: 3,
      shopId: 1,
      shopName: '강남 미용샵',
      comment: '곰돌이컷 너무 귀여운데 강쥐가 스트레스 받았던 것 같아요ㅜ.ㅜ',
      reviewImageURL: '',
    },
  ],
};

const MyReviewDetailPage = () => {
  // const [reviewList, setReviewList] = useState<ReviewDetailType[]>(
  const [reviewList, ] = useState<ReviewDetailType[]>(
    dummy.reviewList,
  );
  const [petInfo, setPetInfo] = useState<PetInfoType>();
  const petData = useGetPetInfo();
  const navigate = useNavigate();
  const handleClickShopButton = (shopId: number) => navigate(`/shop/${shopId}`);
  const handleNavigate = () => navigate(-1);
  useEffect(() => {
    if (petData) setPetInfo(petData);
  });

  return (
    <MobileLayout>
      <Header backIcon={true} title="내가 쓴 후기" titleAlign="start" onClickBack={handleNavigate}/>
      <Flex direction="column" justify="flex-start" gap={10} padding="0 10px" margin='0 0 104px 0'>
        {reviewList.map((review, index) => (
          <Card
            key={index}
            borderRadius={16}
            padding="15px 17px"
          >
            {/* 사용자 프로필 + 작성일자 + 버튼 */}
            <ReviewUserInfo
              reviewId={review.reviewId}
              userImageURL={review.reviewImageURL}
              userName={review.userName}
              rating={review.rating}
              createdAt={review.createdAt}
            />

            {/* 가게 이동 버튼 */}
            <Flex margin='15px'>
            <Button
              onClick={() => handleClickShopButton(review.shopId)}
              padding="10px"
              borderRadius="8px"
              bg={theme.palette.Gray_White}
            >
              <Flex justify="space-between">
                <Text typo="Body3">{review.shopName}</Text>
                <NextArrow width={29} height={31} />
              </Flex>
            </Button>
            </Flex>

            <Flex direction="column" padding="0 12.5px" margin='0 0 15px 0' gap={15}>
              <Flex justify='flex-start'>
              {/* 리뷰 사진 */}
              {review.reviewImageURL && (
                <Image
                  src={review.reviewImageURL}
                  alt="리뷰 사진"
                  borderRadius={8}
                  width={90}
                  height={90}
                />
              )}
              </Flex>

              {/* 리뷰 텍스트 */}
              <Text typo="Label3">{review.comment}</Text>
            </Flex>

            {/* 펫 정보 */}
            {petInfo && (
              <PetInfo
                age={petInfo.age}
                breed={petInfo.breed}
                gender={petInfo.gender}
                image={petInfo.image}
                name={petInfo.name}
                weight={petInfo.weight}
                neutering={petInfo.neutering}
                themeVariant='compact'
              />
            )}
          </Card>
        ))}
      </Flex>
      <DuriNavbar />
    </MobileLayout>
  );
};

export default MyReviewDetailPage;
