import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PreviewOfReviews } from '@duri/components/my/review/PreviewOfReviews';
import {
  DuriNavbar,
  Flex,
  Header,
  MobileLayout,
  Text,
  theme,
} from '@duri-fe/ui';
import { useGetMyReviews } from '@duri-fe/utils';
import { MyReviewResponseType } from '@duri-fe/utils/src/apis/types/my';
import styled from '@emotion/styled';

const MyReviewPage = () => {
  const navigate = useNavigate();
  const handleNavigate = () => navigate('/my');
  const { data: reviewListData } = useGetMyReviews();
  const [reviewCount, setReviewCount] = useState<number>(0);
  const [reviewList, setReviewList] =
    useState<MyReviewResponseType['response']['reviewList']>();

  useEffect(() => {
    if (reviewListData) {
      setReviewCount(reviewListData.reviewCnt);
      setReviewList(reviewListData.reviewList);
    }
  }, [reviewListData, reviewList]);

  return (
    <MobileLayout>
      <Header
        backIcon
        title="내가 쓴 후기"
        titleAlign="start"
        onClickBack={handleNavigate}
      />
      <Flex direction="column" justify="flex-start" padding="0 20px">
        {reviewList && (
          <>
            <Flex justify="flex-start" margin="0 0 37px 0">
              <Text typo="Title1">총 {reviewCount}건</Text>
            </Flex>
            {reviewList.length > 0 ? (
              <ReviewGrid>
                {reviewList.map(
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
            ) : (
              <Text
                typo="Body2"
                margin="92px 0 0 0"
                colorCode={theme.palette.Gray300}
              >
                작성한 후기가 없어요😅
              </Text>
            )}
          </>
        )}
      </Flex>
      <DuriNavbar />
    </MobileLayout>
  );
};

export default MyReviewPage;

const ReviewGrid = styled.ul`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(2, 1fr); /* 2열로 배치 */
  gap: 4px;
  padding: 0 12px;

  @media (max-width: 375px) {
    grid-template-columns: repeat(2, 1fr); /* 2열 유지 */
    gap: 4px;
  }
`;
