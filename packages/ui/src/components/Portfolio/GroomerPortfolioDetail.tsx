import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Button,
  Card,
  Flex,
  HardText,
  Header,
  HeightFitFlex,
  Image,
  Menu,
  Modal,
  PetInfo,
  ProfileImage,
  RelativeFlex,
  SalonTag,
  Text,
  theme,
  WidthFitFlex,
} from '@duri-fe/ui';
import {
  useDeletePortfolio,
  UseGetPortfolioDetail,
  useModal,
} from '@duri-fe/utils';
import styled from '@emotion/styled';

export const GroomerPortfolioDetail = ({
  feedbackId,
  groomer = false,
}: {
  feedbackId: number;
  groomer?: boolean;
}) => {
  const navigate = useNavigate();
  const { isOpenModal, toggleModal } = useModal();

  const { data } = UseGetPortfolioDetail({
    feedbackId: feedbackId,
  });

  const { mutateAsync: deletePortfolio } = useDeletePortfolio();

  const [menuOpen, setMenuOpen] = useState<boolean>(false); // MenuWrapper 상태
  const menuRef = useRef<HTMLDivElement | null>(null); // MenuWrapper의 ref

  const handleClickMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickModifyButton = () => {
    // navigate('/portfolio/modify', { state: feedbackId });
  };

  const handleClickDeleteConfirmButton = () => {
    deletePortfolio(feedbackId);
  };

  return (
    data && (
      <>
        <RelativeFlex direction="column">
          <AbsoluteHeader
            backIcon
            titleAlign="center"
            onClickBack={() => navigate(-1)}
          />
        </RelativeFlex>

        {/** 피드백 및 후기 */}
        <RelativeFlex direction="column" gap={14}>
          <Flex
            justify="space-between"
            padding={groomer ? '0 16px 0 24px' : '0 24px'}
          >
            <WidthFitFlex gap={16}>
              <ProfileImage
                width={34}
                height={34}
                borderRadius={99}
                src={data.groomerInfo.profileImageUrl}
              />
              <Text typo="Title1">{data.groomerInfo.name}</Text>
            </WidthFitFlex>

            {/* 미용사 포폴용 - 수정삭제를 선택 할 수 있는 메뉴 노출 */}
            {groomer ? (
              <>
                <WidthFitFlex gap={8}>
                  <HardText typo="Caption4" colorCode={theme.palette.Gray400}>
                    {data.feedbackDate}
                  </HardText>
                  <MenuWrapper onClick={handleClickMenu}>
                    <Menu width={23} height={23} />
                  </MenuWrapper>
                </WidthFitFlex>
                {menuOpen && (
                  <MenuCard
                    ref={menuRef}
                    direction="column"
                    borderRadius={8}
                    width={114}
                    height={67}
                  >
                    <MenuItem onClick={handleClickModifyButton}>
                      <Text typo="Label3">수정하기</Text>
                    </MenuItem>
                    <MenuItem onClick={toggleModal}>
                      <Text typo="Label3">삭제하기</Text>
                    </MenuItem>
                  </MenuCard>
                )}
              </>
            ) : (
              <HardText typo="Caption4" colorCode={theme.palette.Gray400}>
                {data.feedbackDate}
              </HardText>
            )}
          </Flex>

          <ImageWrapper>
            <Image src={data.feedbackImages[0]} />
            <FixedPetInfo>
              <WidthFitFlex
                height={42}
                borderRadius={99}
                gap={10}
                padding="4px 10px 4px 5px"
              >
                <ProfileImage
                  width={34}
                  height={34}
                  borderRadius={99}
                  src={data.petInfo.imageUrl}
                />
                <Text>{data.petInfo.name}</Text>
              </WidthFitFlex>

              <PetInfoCard borderRadius={12}>
                <PetInfo
                  name={data.petInfo.name}
                  age={data.petInfo.age}
                  breed={data.petInfo.breed}
                  gender={data.petInfo.gender === 'F' ? '여아' : '남아'}
                  weight={data.petInfo.weight}
                  neutering={data.petInfo.neutralized}
                  image={data.petInfo.imageUrl}
                  themeVariant="compact"
                />
              </PetInfoCard>
            </FixedPetInfo>
          </ImageWrapper>

          <Flex justify="start" padding="10px 20px 0">
            <Text typo="Caption3">{data.portfolioContent}</Text>
          </Flex>
          <TagList gap={10} justify="flex-start" padding="0 20px">
            <SalonTag
              content={`#${data.friendly}`}
              bg={theme.palette.Gray_White}
              colorCode={theme.palette.Gray700}
              borderRadius={4}
              padding="12px"
            />
            <SalonTag
              content={`#${data.reaction}`}
              bg={theme.palette.Gray_White}
              colorCode={theme.palette.Gray700}
              borderRadius={4}
              padding="12px"
            />
            <SalonTag
              content={`#${data.behavior}`}
              bg={theme.palette.Gray_White}
              colorCode={theme.palette.Gray700}
              borderRadius={4}
              padding="12px"
            />
          </TagList>
        </RelativeFlex>

        <Modal isOpen={isOpenModal} toggleModal={toggleModal} closeIcon={false}>
          <Flex direction="column" gap={4}>
            <Text typo="Body2">포트폴리오 본문을</Text>
            <Text typo="Body2">삭제하시겠습니까?</Text>
          </Flex>
          <Flex direction="column" margin="16px 0 40px">
            <Text typo="Caption2" colorCode={theme.palette.Gray400}>
              삭제 후엔 복구할 수 없습니다.
            </Text>
            <Text typo="Caption2" colorCode={theme.palette.Gray400}>
              신중히 선택해주세요!
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
        </Modal>
      </>
    )
  );
};

const AbsoluteHeader = styled(Header)`
  position: absolute;
`;

const TagList = styled(HeightFitFlex)`
  overflow-x: auto;
  flex-wrap: nowrap;
  white-space: nowrap;
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const FixedPetInfo = styled.div`
  position: absolute;
  background-color: ${theme.palette.White};
  border-radius: 99px;
  bottom: 10px;
  right: 23px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  &:hover > div:last-child {
    display: block;
  }
`;

const PetInfoCard = styled(Card)`
  display: none;
  position: absolute;
  width: 257px;
  bottom: 0;
  right: 0;
  z-index: 10;

  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: ${theme.palette.Gray_White};
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
  z-index: 10;
`;

const MenuItem = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  /* padding: 0 10px; // 좌우 여백을 추가하여 텍스트가 너무 붙지 않도록 조정 */
  &:hover {
    background-color: ${theme.palette.Gray_White};
    border-radius: 8px;
  }
  z-index: 10;
`;
