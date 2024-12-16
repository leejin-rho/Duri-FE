import { useState } from 'react';

import { FilledHeart, Heart } from '@duri-fe/ui';
import { theme } from '@duri-fe/ui';
import { UseGetGroomerInfo } from '@duri-fe/utils';
import styled from '@emotion/styled';

import { Flex, HeightFitFlex, WidthFitFlex } from '../FlexBox';
import { Text } from '../Typo';

import { DesignerInfo } from './DesignerInfo';
import { PortfolioPhotos } from './PortfolioPhotos';

export const GroomerPortfolio = ({ groomerId }: { groomerId: number }) => {
  const [isMarked, setIsMarked] = useState<boolean>(false);

  const { data } = UseGetGroomerInfo({
    groomerId: groomerId,
  });

  return (
    <>
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
        {data && (
          <DesignerInfo
            padding="0 6px"
            version="horizontal"
            designerId={data.id}
            name={data.name}
            age={data.age}
            gender={data.gender === 'F' ? '여성' : '남성'}
            experience={data.history}
            roles={data.license}
            imageUrl={data.image}
          />
        )}

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
