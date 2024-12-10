import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Flex, Modal, PetInfo, Text, theme, Trash } from '@duri-fe/ui';
import { useModal } from '@duri-fe/utils';
import styled from '@emotion/styled';

const character = ['character1'];
const diseases = ['disease1', 'disease2'];

export const ModifyPetInfoCard = ({ petId }: { petId: number }) => {
  const navigate = useNavigate();
  const { isOpenModal, toggleModal } = useModal();
  const [isSwiped, setIsSwiped] = useState<boolean>(false);
  const [swipePosition, setSwipePosition] = useState<number>(0); // 화면에 반영될 스와이프 위치
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
    navigate('/my/pet/modify', { state: petId });

  const handleDelete = () => {
    toggleModal();
    setSwipePosition(0);
  };
  const handleNotDelete = () => {
    toggleModal();
    setSwipePosition(0);
    setIsSwiped(false);
  };

  return (
    <>
      <SwipeContainer direction="column" isSwipe={isSwiped}>
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
              modify={true}
              age={4}
              breed="시츄"
              gender="F"
              neutering={true}
              name="뭉뭉이"
              weight={4.1}
              character={character}
              diseases={diseases}
              image="https://s3-alpha-sig.figma.com/img/2b3d/3445/169b817c088e24ca9f6999b9f7c18e5a?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UNX-HCHQvf6OGFxdmOjpEf~gbzgcXfr7L~ZILgiSxtXRAt2cDJemS7sJOHFn177dH4-rXFgC0mu0iSo4mT02cqw0ybPZ7D-2GK5ch4XLi20GbfJjcy3yPJSXbtOonwpHQFjJDgbjRDu0VK~iz3DJSvLzAjmn5GvFaikpRDWTtJX51eL-YTGIBt7Q1vYxt66nU2dyREh1wb7u5chrtXImto2iEdFviMwJgZKP~f3K1457j~KdS~gM5gtOtm7ozWPTjdraKskNXGJhWWe9wfE74HFPFG~Tj~lY89I2fPd5TNnQI0CCghKbFOLIUyGtrJ0KceIW-gsIic-A3GWQ9IFCyg__"
              onClick={handleClickModifyButton}
            />
          </SwipeFlex>
          <DeleteButton
            backgroundColor={theme.palette.Alert}
            swipePosition={swipePosition}
            borderRadius={8}
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
            <Text typo="Body2">새롭게 서비스를 시작해야 해요.</Text>
          </Flex>
          <Flex direction="column">
            <Text typo="Caption3" colorCode={theme.palette.Gray400}>
              온보딩으로 돌아가게 됩니다.
            </Text>
            <Text typo="Caption3" colorCode={theme.palette.Gray400}>
              삭제하시겠습니까?
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
              아니요
            </Button>
            <Button
              typo="Body3"
              bg={theme.palette.Black}
              fontColor={theme.palette.White}
              width="145px"
              height="47px"
              borderRadius="8px"
            >
              네
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
  width: ${({ swipePosition }) => `${swipePosition}px`};
  transition: width 0.4s ease;
`;
