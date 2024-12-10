import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { DesignerInfo, PortfolioPhotos } from '@duri/components/shop';
import {
  DuriNavbar,
  FilledHeart,
  Flex,
  Heart,
  HeightFitFlex,
  MobileLayout,
  Text,
  theme,
  WidthFitFlex,
} from '@duri-fe/ui';
import styled from '@emotion/styled';

const Portfolio = () => {
  const [isMarked, setIsMarked] = useState<boolean>(false);

  // image dummy
  const { designerId } = useParams<{ designerId: string }>();

  const images = [
    {
      id: 1,
      src: 'https://s3-alpha-sig.figma.com/img/7a9d/1693/e6a098242d4a2c8446d1acc0d8bf51ab?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oWIr3Sr2va~UzNKEF4BG2jr3NWDieuXmdrJOaLxpHdcMJKypZi9sN3TyZQCj60ZIlgmzE8Ntj-6~sQBDL1N719Z5AI7J6~WtCi9mWR6jRRNoIxUALcUvZ1lmTuHeywMpKYDzPRbebB~KbJSCv3JphfMpuGEUeS~E3MuLPwsaexSdVtpfcUQg3uYmS3-qPMxnwym0oUbYBPK0xJD28yK3ZjfiMm~FtHSnXUmXegJ4Bp74sYndmHEF1MQKtVfy7h5N-ugtkTT9LuuLerthz26tNe8h4kYfEE9edM7puOyXCIH5Xgh4lNzt4WGD0ObsbUS8XkYpXrTiobSniqq~vnYUHg__',
    },
    {
      id: 2,
      src: 'https://s3-alpha-sig.figma.com/img/7a9d/1693/e6a098242d4a2c8446d1acc0d8bf51ab?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oWIr3Sr2va~UzNKEF4BG2jr3NWDieuXmdrJOaLxpHdcMJKypZi9sN3TyZQCj60ZIlgmzE8Ntj-6~sQBDL1N719Z5AI7J6~WtCi9mWR6jRRNoIxUALcUvZ1lmTuHeywMpKYDzPRbebB~KbJSCv3JphfMpuGEUeS~E3MuLPwsaexSdVtpfcUQg3uYmS3-qPMxnwym0oUbYBPK0xJD28yK3ZjfiMm~FtHSnXUmXegJ4Bp74sYndmHEF1MQKtVfy7h5N-ugtkTT9LuuLerthz26tNe8h4kYfEE9edM7puOyXCIH5Xgh4lNzt4WGD0ObsbUS8XkYpXrTiobSniqq~vnYUHg__',
    },
    {
      id: 3,
      src: 'https://s3-alpha-sig.figma.com/img/7a9d/1693/e6a098242d4a2c8446d1acc0d8bf51ab?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oWIr3Sr2va~UzNKEF4BG2jr3NWDieuXmdrJOaLxpHdcMJKypZi9sN3TyZQCj60ZIlgmzE8Ntj-6~sQBDL1N719Z5AI7J6~WtCi9mWR6jRRNoIxUALcUvZ1lmTuHeywMpKYDzPRbebB~KbJSCv3JphfMpuGEUeS~E3MuLPwsaexSdVtpfcUQg3uYmS3-qPMxnwym0oUbYBPK0xJD28yK3ZjfiMm~FtHSnXUmXegJ4Bp74sYndmHEF1MQKtVfy7h5N-ugtkTT9LuuLerthz26tNe8h4kYfEE9edM7puOyXCIH5Xgh4lNzt4WGD0ObsbUS8XkYpXrTiobSniqq~vnYUHg__',
    },
    {
      id: 4,
      src: 'https://s3-alpha-sig.figma.com/img/7a9d/1693/e6a098242d4a2c8446d1acc0d8bf51ab?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oWIr3Sr2va~UzNKEF4BG2jr3NWDieuXmdrJOaLxpHdcMJKypZi9sN3TyZQCj60ZIlgmzE8Ntj-6~sQBDL1N719Z5AI7J6~WtCi9mWR6jRRNoIxUALcUvZ1lmTuHeywMpKYDzPRbebB~KbJSCv3JphfMpuGEUeS~E3MuLPwsaexSdVtpfcUQg3uYmS3-qPMxnwym0oUbYBPK0xJD28yK3ZjfiMm~FtHSnXUmXegJ4Bp74sYndmHEF1MQKtVfy7h5N-ugtkTT9LuuLerthz26tNe8h4kYfEE9edM7puOyXCIH5Xgh4lNzt4WGD0ObsbUS8XkYpXrTiobSniqq~vnYUHg__',
    },
    {
      id: 6,
      src: 'https://s3-alpha-sig.figma.com/img/7a9d/1693/e6a098242d4a2c8446d1acc0d8bf51ab?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oWIr3Sr2va~UzNKEF4BG2jr3NWDieuXmdrJOaLxpHdcMJKypZi9sN3TyZQCj60ZIlgmzE8Ntj-6~sQBDL1N719Z5AI7J6~WtCi9mWR6jRRNoIxUALcUvZ1lmTuHeywMpKYDzPRbebB~KbJSCv3JphfMpuGEUeS~E3MuLPwsaexSdVtpfcUQg3uYmS3-qPMxnwym0oUbYBPK0xJD28yK3ZjfiMm~FtHSnXUmXegJ4Bp74sYndmHEF1MQKtVfy7h5N-ugtkTT9LuuLerthz26tNe8h4kYfEE9edM7puOyXCIH5Xgh4lNzt4WGD0ObsbUS8XkYpXrTiobSniqq~vnYUHg__',
    },
    {
      id: 7,
      src: 'https://s3-alpha-sig.figma.com/img/7a9d/1693/e6a098242d4a2c8446d1acc0d8bf51ab?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oWIr3Sr2va~UzNKEF4BG2jr3NWDieuXmdrJOaLxpHdcMJKypZi9sN3TyZQCj60ZIlgmzE8Ntj-6~sQBDL1N719Z5AI7J6~WtCi9mWR6jRRNoIxUALcUvZ1lmTuHeywMpKYDzPRbebB~KbJSCv3JphfMpuGEUeS~E3MuLPwsaexSdVtpfcUQg3uYmS3-qPMxnwym0oUbYBPK0xJD28yK3ZjfiMm~FtHSnXUmXegJ4Bp74sYndmHEF1MQKtVfy7h5N-ugtkTT9LuuLerthz26tNe8h4kYfEE9edM7puOyXCIH5Xgh4lNzt4WGD0ObsbUS8XkYpXrTiobSniqq~vnYUHg__',
    },
    {
      id: 8,
      src: 'https://s3-alpha-sig.figma.com/img/7a9d/1693/e6a098242d4a2c8446d1acc0d8bf51ab?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oWIr3Sr2va~UzNKEF4BG2jr3NWDieuXmdrJOaLxpHdcMJKypZi9sN3TyZQCj60ZIlgmzE8Ntj-6~sQBDL1N719Z5AI7J6~WtCi9mWR6jRRNoIxUALcUvZ1lmTuHeywMpKYDzPRbebB~KbJSCv3JphfMpuGEUeS~E3MuLPwsaexSdVtpfcUQg3uYmS3-qPMxnwym0oUbYBPK0xJD28yK3ZjfiMm~FtHSnXUmXegJ4Bp74sYndmHEF1MQKtVfy7h5N-ugtkTT9LuuLerthz26tNe8h4kYfEE9edM7puOyXCIH5Xgh4lNzt4WGD0ObsbUS8XkYpXrTiobSniqq~vnYUHg__',
    },
  ];

  return (
    <MobileLayout>
      <HeaderBox>
        <MainImg
          alt="shop-image"
          src={
            'https://s3-alpha-sig.figma.com/img/b451/cdeb/1b126206922d93851b0f7d50c8e39562?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZI~FkT7vXniXT8Kwm-tEkVdtP0PUf8YfdcOEtpO0P1PQAJlG6dJz-VvaTRl8k-IiXvleuMayGOw8k53CfVHh7Qnw9Q0U9QRyhDZ71dxK7NWKSghjD6O4LcTalyZ0-RNYovDwZEfc90WDYmHid49LMyhX0qlxFyhNQtqKt-dvtu92SGG1LiTbKkH3xoeLg3QsJBTezqIvQA7UE16KuPQx-73RML9nR3gPs9~69sI-Aw3lcZC8s0xEo9lIqZ-WhjbyRWdFoXYpl8TDM8x160IDZG51zx-R3n-OFoaLHYntEj2jZchfuKNsX8GJvN6ia8XCouQ5bdvPU2lBWNDAdx9EcA__'
          }
        />
        <TextBox direction="column" gap={14}>
          <HeightFitFlex gap={10} justify="flex-start">
            <Text typo="Title4" colorCode={theme.palette.White}>
              댕댕샵
            </Text>
            <WidthFitFlex
              height="fit-content"
              onClick={() => setIsMarked(!isMarked)}
            >
              {isMarked ? (
                <FilledHeart width={20} />
              ) : (
                <Heart width={20} color={theme.palette.White} />
              )}
            </WidthFitFlex>
          </HeightFitFlex>
          <Text typo="Label3" colorCode={theme.palette.White}>
            경기도 성남시 불정로 119
          </Text>
        </TextBox>
      </HeaderBox>
      <Flex direction="column" padding="12px 5px 96px 5px" gap={12}>
        <DesignerInfo
          padding="0 6px"
          version="horizontal"
          designerId={2}
          name="박댕댕"
          age={28}
          gender="남성"
          experience={3}
          roles={['반려동물 훈련사', '애견미용 전문가']}
          imageUrl="https://s3-alpha-sig.figma.com/img/7288/e8cb/765917075a0ff1a9f4ef89045ec486ce?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oq4Y0Uqsxbln0WqYdkcYB25-3jI94a-y4BgE1iR6LiJHuy4Fij17MRJuc4~5TrOtq4EErqmiLIaAzjbAr7DcIzOgUPonCTK6SSdtCvPvRzmHzwre6RsCF5eLy19WEHwDzvRnobu0HT6tWMJK4LNEfi7UjAt93eeXaXAI89y0gYZ790waTMt-9j4Uax-XKrI6CSxwEf-rms9RdhQGUqelUoNLRnNq3btRGrE-fYNlLL4a9B2mvHVhISB-e7PvygT0wDoaxQAdAHDSD-ctiqOzl~WLCyYJ1GNcrYYaOA5ihmYMDWkHaoCPLClnIL-LSuTyipWyRFvNqc07vuNAPbjfiA__"
        />

        {designerId && (
          <PortfolioPhotos designerId={designerId} portfolios={images} />
        )}
      </Flex>
      <DuriNavbar />
    </MobileLayout>
  );
};

export default Portfolio;

const MainImg = styled.img`
  position: absolute;
  width: 100%;
  aspect-ratio: 375 / 310;
  object-fit: cover;
  z-index: -1;
`;

const HeaderBox = styled(Flex)`
  position: relative;
  z-index: 1;
  aspect-ratio: 375 / 310;
  height: auto;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70%;
    background: linear-gradient(
      180deg,
      rgba(217, 217, 217, 0) 0%,
      ${theme.palette.Black} 100%
    );
  }
`;

const TextBox = styled(Flex)`
  position: absolute;
  width: fit-content;
  height: fit-content;
  left: 20px;
  bottom: 36px;
`;
