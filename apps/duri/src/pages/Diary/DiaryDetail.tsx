import { useNavigate } from 'react-router-dom';

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
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const PetDiaryDetail = () => {
  const navigate = useNavigate();

  const character = ['character1'];
  const diseases = ['disease1', 'disease2'];

  return (
    <MobileLayout>
      <Header
        title="일지 보기"
        backIcon={true}
        onClickBack={() => navigate(-1)}
      />
      <Flex borderRadius={16} padding="0 20px" margin="0 0 16px 0">
        <PetInfo
          age={4}
          breed="시츄"
          gender="F"
          neutering={true}
          name="뭉뭉이"
          weight={4.1}
          character={character}
          diseases={diseases}
          image="https://s3-alpha-sig.figma.com/img/2b3d/3445/169b817c088e24ca9f6999b9f7c18e5a?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UNX-HCHQvf6OGFxdmOjpEf~gbzgcXfr7L~ZILgiSxtXRAt2cDJemS7sJOHFn177dH4-rXFgC0mu0iSo4mT02cqw0ybPZ7D-2GK5ch4XLi20GbfJjcy3yPJSXbtOonwpHQFjJDgbjRDu0VK~iz3DJSvLzAjmn5GvFaikpRDWTtJX51eL-YTGIBt7Q1vYxt66nU2dyREh1wb7u5chrtXImto2iEdFviMwJgZKP~f3K1457j~KdS~gM5gtOtm7ozWPTjdraKskNXGJhWWe9wfE74HFPFG~Tj~lY89I2fPd5TNnQI0CCghKbFOLIUyGtrJ0KceIW-gsIic-A3GWQ9IFCyg__"
        />
      </Flex>
      <Flex direction="column">
        <Seperator />

        <Flex padding="16px 22px" justify="space-between">
          <Text typo="Title3">보호자</Text>
          <WidthFitFlex gap={16}>
            <Text typo="Body2" css={LightBody2}>
              김찬별
            </Text>
            <Text
              typo="Body2"
              css={LightBody2}
              colorCode={theme.palette.Gray500}
            >
              010-4837-3032
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
            content="무서워했어요"
            bg={theme.palette.Normal100}
            colorCode={theme.palette.Normal700}
            typo="Label2"
          />
          <SalonTag
            height={23}
            content="라뽀가 많이 형성됐어요"
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
          <Text typo="Letter">
            오늘 신참이 미용 아주 잘하고 갔습니다^^. 처음에는 조금
            긴장하는것같았는데, 이후에는 침착하게 미용 잘 받았어요. 기분좋게
            끝났으니 걱정마시고 좋은하루보내세요~
          </Text>
        </HeightFitFlex>
      </RelativeFlex>
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
