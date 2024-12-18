import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Flex, Modal, PetInfo, Text, theme, Trash } from '@duri-fe/ui';
import { useModal } from '@duri-fe/utils';
import styled from '@emotion/styled';

interface PetListInfo {
  id: number;
  name: string;
  image: string | null;
  breed: string;
  age: number;
  weight: number;
  neutering: boolean;
  gender: string;
  character: string[];
  diseases: string[];
}

export const SwipeCard = ({
  age,
  breed,
  character,
  diseases,
  gender,
  id,
  image,
  name,
  neutering,
  weight,
}: PetListInfo) => {
  const navigate = useNavigate();
  const { isOpenModal, toggleModal } = useModal();
  const [isSwiped, setIsSwiped] = useState<boolean>(false);
  const [swipePosition, setSwipePosition] = useState<number>(0); // 화면에 반영될 스와이프 위치
  const handleDelete = () => {
    toggleModal();
    //삭제 api 호출
  };
  const handleNotDelete = () => {
    toggleModal();
    setSwipePosition(0);
    setIsSwiped(false);
  };
  const startX = useRef<number>(0); // 터치 시작 시점 저장
  const isDragging = useRef<boolean>(false); // 마우스 드래그 여부

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX; // 초기 터치 위치 저장
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    const currentX = e.touches[0].clientX;
    const deltaX = startX.current - currentX;

    if (deltaX > 0) {
      // 왼쪽으로 50px까지 스와이프
      setSwipePosition(Math.min(deltaX, 50));
    } else {
      setSwipePosition(0); //원위치!!
    }
  };

  const handleTouchEnd = () => {
    if (swipePosition > 30) {
      // 스와이프가 50px 이상일 때 삭제 버튼 노출
      setSwipePosition(50);
      setIsSwiped(true);
    } else {
      setSwipePosition(0);
      setIsSwiped(false);
    }
  };

  // 마우스 시작 처리
  const handleMouseDown = (e: React.MouseEvent) => {
    startX.current = e.clientX;
    isDragging.current = true;
  };

  // 마우스 이동 처리
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;

    const currentX = e.clientX;
    const deltaX = startX.current - currentX;

    if (deltaX > 0) {
      setSwipePosition(Math.min(deltaX, 50));
    } else {
      setSwipePosition(0);
    }
  };

  // 마우스 종료 처리
  const handleMouseUp = () => {
    isDragging.current = false;

    if (swipePosition > 30) {
      setSwipePosition(50);
      setIsSwiped(true);
    } else {
      setSwipePosition(0);
      setIsSwiped(false);
    }
  };

  const handleClickModifyButton = () =>
    navigate('/my/pet/modify', { state: id });

  return (
    <>
      <SwipeContainer direction="column" isSwipe={isSwiped} gap={10}>
        <SwipeWrapper>
          <SwipeFlex
            backgroundColor={theme.palette.White}
            borderRadius={16}
            padding="12px 30px 16px 12px"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            swipePosition={swipePosition}
            isSwiped={isSwiped}
          >
            <PetInfo
              modify
              age={age}
              breed={breed}
              gender={gender}
              neutering={neutering}
              name={name}
              weight={weight}
              character={character}
              diseases={diseases}
              image={image === null ? undefined : image}
              onClick={handleClickModifyButton}
              themeVariant="spacious"
            />
          </SwipeFlex>
          <DeleteButton
            backgroundColor={theme.palette.Alert}
            swipePosition={swipePosition}
            onClick={handleDelete}
          >
            <Trash width={23} height={23} />
          </DeleteButton>
        </SwipeWrapper>
      </SwipeContainer>

      <Modal isOpen={isOpenModal} toggleModal={toggleModal}>
        <Flex direction="column" gap={5}>
          <Flex direction="column">
            <Text typo="Body2">반려견 정보 삭제 시</Text>
            <Text typo="Body2">복구가 불가능해요.</Text>
          </Flex>
          <Flex direction="column">
            <Text typo="Caption3" colorCode={theme.palette.Gray400}>
              정보 삭제 시 복구가 불가능합니다.
            </Text>
            <Text typo="Caption3" colorCode={theme.palette.Gray400}>
              신중히 선택해주세요.
            </Text>
          </Flex>
          <Flex gap={6} margin="28px 0 0 0">
            <Button
              typo="Body3"
              bg={theme.palette.Gray20}
              width="104px"
              height="47px"
              borderRadius="8px"
              onClick={handleNotDelete}
            >
              취소
            </Button>
            <Button
              typo="Body3"
              bg={theme.palette.Black}
              fontColor={theme.palette.White}
              width="145px"
              height="47px"
              borderRadius="8px"
            >
              삭제할게요
            </Button>
          </Flex>
        </Flex>
      </Modal>
    </>
  );
};

const SwipeContainer = styled(Flex)<{ isSwipe: boolean }>`
  padding: ${({ isSwipe }) => (isSwipe ? 0 : '0 20px')};
`;

const SwipeWrapper = styled(Flex)`
  position: relative;
  overflow: hidden;
`;

const SwipeFlex = styled(Flex)<{ swipePosition: number; isSwiped: boolean }>`
  position: relative;
  transform: ${({ swipePosition }) => `translateX(-${swipePosition}px)`};
  transition: ${({ isSwiped }) => (isSwiped ? 'transform 0.3s ease' : 'none')};
`;

const DeleteButton = styled(Flex)<{ swipePosition: number }>`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 0 16px 16px 0;
  width: ${({ swipePosition }) => `${swipePosition}px`};
  transition: width 0.4s ease;
`;
