import { useNavigate } from 'react-router-dom';

import {
  Card,
  Flex,
  HardText,
  Header,
  HeightFitFlex,
  Image,
  Menu,
  PetInfo,
  ProfileImage,
  RelativeFlex,
  SalonTag,
  Text,
  theme,
  WidthFitFlex,
} from '@duri-fe/ui';
import { UseGetPorfolioDetail } from '@duri-fe/utils';
import styled from '@emotion/styled';

export const GroomerPortfolioDetail = ({
  feedbackId,
  groomer = false,
}: {
  feedbackId: number;
  groomer?: boolean;
}) => {
  const navigate = useNavigate();

  const { data } = UseGetPorfolioDetail({
    feedbackId: feedbackId,
  });

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
        <Flex direction="column" gap={14}>
          <Flex justify="space-between" padding="0 24px">
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
              <WidthFitFlex gap={8}>
                <HardText typo="Caption4" colorCode={theme.palette.Gray400}>
                  {data.feedbackDate}
                </HardText>
                <MenuWrapper>
                  <Menu width={23} height={23} />
                </MenuWrapper>
              </WidthFitFlex>
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
                <Image
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
        </Flex>
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
