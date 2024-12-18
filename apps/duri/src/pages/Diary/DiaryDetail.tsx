import { useNavigate, useParams } from 'react-router-dom';

import {
  DuriNavbar,
  Flex,
  Header,
  HeightFitFlex,
  MobileLayout,
  PetInfo,
  ProfileImage,
  RelativeFlex,
  SalonTag,
  Seperator,
  Tape,
  Text,
  theme,
  WidthFitFlex,
} from '@duri-fe/ui';
import { UseGetDiaryDetail, UseGetDiaryPetInfo } from '@duri-fe/utils';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const PetDiaryDetail = () => {
  const navigate = useNavigate();
  const { diaryId } = useParams<{ diaryId: string }>();
  const quotationId = Number(diaryId);

  const { data: diaryDetailData } = UseGetDiaryDetail({ quotationId });
  const { data: petInfoData } = UseGetDiaryPetInfo({ quotationId });

  return (
    <MobileLayout>
      <Header title="일지 보기" backIcon onClickBack={() => navigate(-1)} />
      {diaryDetailData && petInfoData && (
        <>
          <Flex borderRadius={16} padding="0 20px" margin="0 0 16px 0">
            <PetInfo
              age={petInfoData.petProfileResponse.age}
              breed={petInfoData.petProfileResponse.breed}
              gender={petInfoData.petProfileResponse.gender}
              neutering={petInfoData.petProfileResponse.neutering}
              name={petInfoData.petProfileResponse.name}
              weight={petInfoData.petProfileResponse.weight}
              character={petInfoData.petProfileResponse.character}
              diseases={petInfoData.petProfileResponse.diseases}
              image={petInfoData.petProfileResponse.image}
            />
          </Flex>
          <Flex direction="column">
            <Seperator />

            <Flex padding="16px 22px" justify="space-between">
              <Text typo="Title3">보호자</Text>
              <WidthFitFlex gap={16}>
                <Text typo="Body2" css={LightBody2}>
                  {petInfoData.customerName}
                </Text>
                <Text
                  typo="Body2"
                  css={LightBody2}
                  colorCode={theme.palette.Gray500}
                >
                  {petInfoData.customerPhone}
                </Text>
              </WidthFitFlex>
            </Flex>
            <Seperator />

            <Flex padding="16px 22px" justify="space-between">
              <Text typo="Title3">시술날짜</Text>
              <Text typo="Body2" css={LightBody2}>
                2024-12-26
              </Text>
            </Flex>
            <Seperator />

            <Flex padding="16px 22px" justify="space-between">
              <Text typo="Title3">담당자</Text>
              <WidthFitFlex gap={12}>
                <ProfileImage width={20} height={20} borderRadius={99} />
                <Text typo="Body2" css={LightBody2}>
                  미나쌤
                </Text>
              </WidthFitFlex>
            </Flex>
          </Flex>
          <Seperator />
          <Flex
            direction="column"
            align="start"
            padding="12px 22px 24px 22px"
            gap={8}
          >
            <Text typo="Title2">오늘 미용은 어땠나요?</Text>
            <Text typo="Caption1" colorCode={theme.palette.Gray400}>
              미용사님이 작성하신 미용 일지에요
            </Text>
            <Flex gap={4} justify="flex-start" margin="4px 0 0 0">
              <SalonTag
                height={23}
                content={diaryDetailData.friendly}
                bg={theme.palette.Normal100}
                colorCode={theme.palette.Normal700}
                typo="Label2"
              />
              <SalonTag
                height={23}
                content={diaryDetailData.reaction}
                bg={theme.palette.Normal100}
                colorCode={theme.palette.Normal700}
                typo="Label2"
              />
              <SalonTag
                height={23}
                content={diaryDetailData.behavior}
                bg={theme.palette.Normal100}
                colorCode={theme.palette.Normal700}
                typo="Label2"
              />
            </Flex>
          </Flex>
          <Seperator height="5px" />
          <RelativeFlex padding="25px 20px 117px 20px">
            <TapeWrapper>
              <Tape width={70} />
            </TapeWrapper>
            <HeightFitFlex
              backgroundColor={theme.palette.Normal50}
              borderRadius={24}
              padding="28px 20px"
            >
              <Text typo="Letter">{diaryDetailData.noticeContent}</Text>
            </HeightFitFlex>
          </RelativeFlex>
        </>
      )}
      <DuriNavbar />
    </MobileLayout>
  );
};

export default PetDiaryDetail;

const LightBody2 = css`
  font-weight: 400;
`;

const TapeWrapper = styled.div`
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
`;
