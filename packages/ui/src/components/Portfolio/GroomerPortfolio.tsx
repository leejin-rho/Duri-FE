import { useEffect, useState } from 'react';
import React from 'react';

import { FilledHeart, Heart, SalonTag } from '@duri-fe/ui';
import { theme } from '@duri-fe/ui';
import { UseGetGroomerInfo } from '@duri-fe/utils';
import {
  GroomerInfoType,
  ShopInfoType,
} from '@duri-fe/utils/src/apis/types/my';
import styled from '@emotion/styled';

import { Flex, HeightFitFlex, WidthFitFlex } from '../FlexBox';
import { Text } from '../Typo';

import { DesignerInfo } from './DesignerInfo';
import { PortfolioPhotos } from './PortfolioPhotos';

export const GroomerPortfolio = ({ groomerId }: { groomerId: number }) => {
  const [isMarked, setIsMarked] = useState<boolean>(false);
  const [shopProfile, setShopProfile] = useState<ShopInfoType>();
  const [groomerProfile, setGroomerProfile] = useState<GroomerInfoType>();

  const { data } = UseGetGroomerInfo({
    groomerId: groomerId,
  });

  useEffect(() => {
    if (data) {
      setGroomerProfile(data.groomerProfileDetail);
      setShopProfile(data.shopProfileDetail);
    }
  }, [data]);

  return (
    <>
      <HeaderBox>
        <MainImg alt="shop-image" src={shopProfile?.imageURL} />
        <TextBox direction="column" gap={14}>
          <HeightFitFlex gap={10} justify="flex-start">
            <Text typo="Title4" colorCode={theme.palette.White}>
              {shopProfile?.name ?? '정보 없음'}
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
            {shopProfile?.address ?? '정보 없음'}
          </Text>
          {shopProfile?.tags && (
            <Flex justify="flex-start" gap={8}>
              {shopProfile.tags[0] && (
                <SalonTag
                  content={shopProfile.tags[0]}
                  bg={theme.palette.Gray20}
                  colorCode={theme.palette.Gray500}
                />
              )}
              {shopProfile.tags[1] && (
                <SalonTag
                  content={shopProfile.tags[1]}
                  bg={theme.palette.Gray20}
                  colorCode={theme.palette.Gray500}
                />
              )}
              {shopProfile.tags[2] && (
                <SalonTag
                  content="노견전문"
                  bg={theme.palette.Gray20}
                  colorCode={theme.palette.Gray500}
                />
              )}
            </Flex>
          )}
        </TextBox>
      </HeaderBox>
      <Flex direction="column" padding="12px 5px 96px 5px" gap={12}>
        <Flex justify="flex-start">
          {groomerProfile && (
            <DesignerInfo
              padding="16px"
              version="horizontal"
              designerId={groomerProfile.id}
              name={groomerProfile.name}
              age={groomerProfile.age}
              gender={groomerProfile.gender === 'F' ? '여성' : '남성'}
              experience={groomerProfile.history}
              roles={groomerProfile.license}
              imageUrl={groomerProfile.image}
            />
          )}
        </Flex>
        {groomerId && <PortfolioPhotos groomerId={groomerId} />}
      </Flex>
    </>
  );
};

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
