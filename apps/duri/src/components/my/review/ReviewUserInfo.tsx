import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClickMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickModifyButton = () => {
    navigate('/my/review/modify', { state: reviewId });
  };

  const handleClickDeleteButton = () => {
    //삭제 모달 띄우기
  }

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
        <WidthFitFlex direction="column" gap={2} align="start">
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
          width={114}
          height={67}
          gap={8}
        >
          <MenuItem onClick={handleClickModifyButton}>
            <Text typo="Label3">수정하기</Text>
          </MenuItem>
          <MenuItem onClick={handleClickDeleteButton}>
            <Text typo="Label3">삭제하기</Text>
          </MenuItem>
        </MenuCard>
      )}
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  position: relative;
`;
const MenuCard = styled(Flex)`
  position: absolute;
  top: 37.4px;
  right: 9px;
  background-color: ${theme.palette.White};
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
`;
const SingleLineText = styled(Text)`
  word-break: no-wrap;
`;

const MenuItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  padding: 0 10px; // 좌우 여백을 추가하여 텍스트가 너무 붙지 않도록 조정
  &:hover {
    background-color: ${theme.palette.Gray_White};
  }
`;
