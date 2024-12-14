import { useNavigate } from 'react-router-dom';

// import { ReviewType } from '@duri/assets/types/my';
import { PreviewOfReviews } from '@duri/components/my/review/PreviewOfReviews';
import { Flex, Header, MobileLayout, Text, theme } from '@duri-fe/ui';
import { useGetMyReviews } from '@duri-fe/utils';
import styled from '@emotion/styled';

const MyReviewPage = () => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate(-1);
  const { data: reviewListData } = useGetMyReviews();

  const dummy = [
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
      reviewId: 2,
      createdAt: '2024-12-07',
      rating: 4,
      shopId: 1,
      shopName: '강남 미용샵',
      comment: '잘 모르겠어요~~',
      reviewImageURL:
        'https://duri-cicd-bucket.s3.ap-northeast-2.amazonaws.com/review/78cf2dd0-a693-4eb7-af65-49e9e6ed49d1_강쥐사진146511514.jpg',
    },
    {
      userId: 1,
      userImageURL: 'https://example.com/user1.jpg',
      userName: '김철수',
      reviewId: 3,
      createdAt: '2024-12-07',
      rating: 1,
      shopId: 1,
      shopName: '강남 미용샵',
      comment: '',
      reviewImageURL: '',
    },
  ];

  return (
    <MobileLayout>
      <Header
        backIcon
        title="내가 쓴 후기"
        titleAlign="start"
        onClickBack={handleNavigate}
      />
      <Flex direction="column" justify="flex-start" padding="0 20px">
        {reviewListData ? (
          <>
            <Flex justify="flex-start" margin="0 0 37px 0">
              <Text typo="Title1">총 {reviewListData?.reviewCnt}건</Text>
            </Flex>
            {reviewListData.reviewList.length > 0 && (
              <ReviewGrid>
                {dummy.map(
                  ({ reviewId, shopName, createdAt, reviewImageURL }) => {
                    return (
                      <li key={reviewId}>
                        <PreviewOfReviews
                          reviewId={reviewId}
                          shopName={shopName}
                          createdAt={createdAt}
                          reviewImageURL={reviewImageURL}
                        />
                      </li>
                    );
                  },
                )}
              </ReviewGrid>
            )}
          </>
        ) : (
          <Text
            typo="Body2"
            margin="92px 0 0 0"
            colorCode={theme.palette.Gray300}
          >
            작성한 후기가 없어요😅
          </Text>
        )}
      </Flex>
    </MobileLayout>
  );
};

export default MyReviewPage;

const ReviewGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2열로 배치 */
  gap: 4px;
  padding: 0 12px;

  @media (max-width: 375px) {
    grid-template-columns: repeat(2, 1fr); /* 2열 유지 */
    gap: 4px;
  }
`;
