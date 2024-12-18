import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Button,
  Flex,
  Menu,
  Modal,
  ProfileImage,
  RatingStars,
  Text,
  theme,
  WidthFitFlex,
} from '@duri-fe/ui';
import { useDeleteReview, useModal } from '@duri-fe/utils';
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

  const { isOpenModal, toggleModal } = useModal();

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { mutateAsync: deleteReview } = useDeleteReview(() => {
    navigate('/my/review', { replace: true });
  });

  const handleClickMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickModifyButton = () => {
    navigate('/my/review/modify', { state: reviewId });
  };

  const handleClickDeleteButton = () => {
    //삭제 모달 띄우기
    toggleModal();
  };

  const handleClickDeleteConfirmButton = () => {
    deleteReview(reviewId);
  };

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
        <MenuWrapper onClick={handleClickMenu}>
          <Menu width={23} height={23} />
        </MenuWrapper>
      </WidthFitFlex>
      {isOpen && (
        <MenuCard direction="column" borderRadius={8} width={114} height={67}>
          <MenuItem onClick={handleClickModifyButton}>
            <Text typo="Label3">수정하기</Text>
          </MenuItem>
          <MenuItem onClick={handleClickDeleteButton}>
            <Text typo="Label3">삭제하기</Text>
          </MenuItem>
        </MenuCard>
      )}
      {isOpenModal && (
        <Modal isOpen={isOpenModal} toggleModal={toggleModal} closeIcon={false}>
          <Flex direction="column" gap={24}>
            <Text typo="Body2">후기를 삭제하시겠습니까?</Text>
            <Flex direction="column" margin="16px 0 40px" gap={4}>
              <Text typo="Caption2" colorCode={theme.palette.Gray400}>
                후기 삭제 후
              </Text>
              <Text typo="Caption2" colorCode={theme.palette.Gray400}>
                복구할 수 없습니다.
              </Text>
            </Flex>
            <Flex gap={6}>
              <Button
                width="104px"
                height="47px"
                padding="10px"
                bg={theme.palette.Gray20}
                borderRadius="8px"
                typo="Body3"
                onClick={toggleModal}
              >
                아니오
              </Button>
              <Button
                width="145px"
                height="47px"
                padding="10px"
                bg={theme.palette.Alert}
                borderRadius="8px"
                typo="Body3"
                fontColor={theme.palette.White}
                onClick={handleClickDeleteConfirmButton}
              >
                네
              </Button>
            </Flex>
          </Flex>
        </Modal>
      )}
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  position: relative;
`;

const SingleLineText = styled(Text)`
  word-break: no-wrap;
`;

const MenuWrapper = styled(WidthFitFlex)`
  cursor: pointer;
`;

const MenuCard = styled(Flex)`
  position: absolute;
  top: 37.4px;
  right: 9px;
  background-color: ${theme.palette.White};
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
`;

const MenuItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: ${theme.palette.Gray_White};
  }
`;
