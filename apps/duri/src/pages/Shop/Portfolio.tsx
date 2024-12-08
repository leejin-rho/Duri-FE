import { useState } from 'react';

import {
  AbsoluteFlex,
  FilledHeart,
  Heart,
  HeightFitFlex,
  MobileLayout,
  RelativeFlex,
  Text,
  theme,
  WidthFitFlex,
} from '@duri-fe/ui';
import styled from '@emotion/styled';

const Portfolio = () => {
  const [isMarked, setIsMarked] = useState<boolean>(false);

  return (
    <MobileLayout>
      <RelativeFlex>
        <MainImg
          src={
            'https://s3-alpha-sig.figma.com/img/b451/cdeb/1b126206922d93851b0f7d50c8e39562?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZI~FkT7vXniXT8Kwm-tEkVdtP0PUf8YfdcOEtpO0P1PQAJlG6dJz-VvaTRl8k-IiXvleuMayGOw8k53CfVHh7Qnw9Q0U9QRyhDZ71dxK7NWKSghjD6O4LcTalyZ0-RNYovDwZEfc90WDYmHid49LMyhX0qlxFyhNQtqKt-dvtu92SGG1LiTbKkH3xoeLg3QsJBTezqIvQA7UE16KuPQx-73RML9nR3gPs9~69sI-Aw3lcZC8s0xEo9lIqZ-WhjbyRWdFoXYpl8TDM8x160IDZG51zx-R3n-OFoaLHYntEj2jZchfuKNsX8GJvN6ia8XCouQ5bdvPU2lBWNDAdx9EcA__'
          }
        />
        <AbsoluteFlex direction="column" width="fit-content">
          <HeightFitFlex gap={10} justify="flex-start">
            <Text colorCode={theme.palette.White}>댕댕샵</Text>
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
            <Gradation />
          </HeightFitFlex>
          <Text colorCode={theme.palette.White}>경기도 성남시 불정로 119</Text>
        </AbsoluteFlex>
      </RelativeFlex>
    </MobileLayout>
  );
};

export default Portfolio;

const MainImg = styled.img`
  width: 100%;
  position: relative;
  aspect-ratio: 375 / 310;
  object-fit: cover;
`;

const Gradation = styled.div`
  background: linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, #111 100%);
`;
