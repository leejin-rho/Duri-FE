import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Flex, PetInfo, theme, Trash } from '@duri-fe/ui';
import styled from '@emotion/styled';

const character = ['character1'];
const diseases = ['disease1', 'disease2'];

export const ModifyPetInfoCard = ({ petId }: { petId: number }) => {
  const navigate = useNavigate();
  const [isSwiped, setIsSwiped] = useState<boolean>(false);
  const [swipePosition, setSwipePosition] = useState<number>(0); // 화면에 반영될 스와이프 위치
  const startX = useRef<number>(0); // 터치 시작 시점 저장

  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX; // 초기 터치 위치 저장
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    const currentX = e.touches[0].clientX;
    const deltaX = startX.current - currentX;

    if (deltaX > 0) {
      // 왼쪽으로 스와이프
      setSwipePosition(Math.min(deltaX, 50)); // 최대 -100까지
    } else {
      // 오른쪽으로 복귀
      setSwipePosition(0);
    }
  };

  const handleTouchEnd = () => {
    if (swipePosition > 30) {
      // 스와이프가 50px 이상일 때 삭제 버튼 노출
      setSwipePosition(50);
      setIsSwiped(true);
    } else {
      // 원래 위치로 복귀
      setSwipePosition(0);
      setIsSwiped(false);
    }
  };

  const handleClickModifyButton = () =>
    navigate('/my/pet/modify', { state: petId });

//   const handleDelete = () => {
//   };

  return (
    <SwipeContainer direction="column" isSwipe={isSwiped}>
      <SwipeWrapper>
        <SwipeFlex
          backgroundColor={theme.palette.White}
          borderRadius={16}
          padding="12px 30px 16px 12px"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          swipePosition={swipePosition}
          isSwiped={isSwiped}
        >
          <PetInfo
            modify={true}
            age={4}
            breed="시츄"
            gender="F"
            neutering={true}
            name="뭉뭉이"
            weight={4.1}
            character={character}
            diseases={diseases}
            onClick={handleClickModifyButton}
          />
        </SwipeFlex>
        <DeleteButton
          backgroundColor={theme.palette.Alert}
          swipePosition={swipePosition}
          borderRadius={8}
        >
          <Trash width={23} height={23} />
        </DeleteButton>
      </SwipeWrapper>
    </SwipeContainer>
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
  width: ${({ swipePosition }) => `${swipePosition}px`};
  transition: width 0.4s ease;
`;
