import { useState } from 'react';

import {
  Flex,
  Menu,
  ProfileImage,
  RatingStars,
  Text,
  theme,
  WidthFitFlex,
} from '@duri-fe/ui';
import styled from '@emotion/styled';

interface ReviewUserInfoProps {
  reviewId: number;
  userImageURL: string;
  userName: string;
  rating: number;
  createdAt: string;
}

export const ReviewUserInfo = ({
  reviewId,
  createdAt,
  rating,
  userImageURL,
  userName,
}: ReviewUserInfoProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClickMenu = () => setIsOpen(!isOpen);

  console.log(reviewId);

  return (
    <Wrapper justify="space-between">
      {/* 사용자 프로필, 평점 */}
      <WidthFitFlex justify="flex-start" gap={15.58}>
        <ProfileImage
          width={34}
          height={34}
          borderRadius={34}
          src={userImageURL}
        />
        <WidthFitFlex direction="column" gap={2}>
          <Text typo="Body3">{userName}</Text>
          <Flex>
            <RatingStars size={12} score={rating} />
          </Flex>
        </WidthFitFlex>
      </WidthFitFlex>
      {/* 오른쪽 버튼, 작성일자 */}
      <WidthFitFlex gap={8}>
        <SingleLineText typo="Caption5" colorCode={theme.palette.Gray300}>
          {createdAt}
        </SingleLineText>
        <WidthFitFlex onClick={handleClickMenu}>
          <Menu width={23} height={23} />
        </WidthFitFlex>
      </WidthFitFlex>
      {isOpen && (
        <MenuCard
          direction="column"
          borderRadius={8}
          height="67px"
          padding="15px 32.5px"
          gap={8}
        >
          <Text typo="Label3">수정하기</Text>
          <Text typo="Label3">삭제하기</Text>
        </MenuCard>
      )}
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  position: relative;
`;
const MenuCard = styled(WidthFitFlex)`
  position: absolute;
  top: 37.4px;
  right: 9px;
  background-color: ${theme.palette.White};
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
`;
const SingleLineText = styled(Text)`
  word-break: no-wrap;
`;
