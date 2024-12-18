import { Image, NextArrow, SalonTag } from '@duri-fe/ui';
import { KeyOfTypo, theme } from '@duri-fe/ui';
import styled from '@emotion/styled';

import { Flex, WidthFitFlex } from '../FlexBox';
import { Text } from '../Typo';

interface ShopInfoProps {
  image: string;
  shopName: string;
  title?: string;
  address: string;
  shopTag1: string;
  shopTag2: string;
  shopTag3: string;
  height?: number;
  onClick: () => void;
  themeVariant: 'duri' | 'salon';
}

interface ThemeVariant {
  imageSize: {
    width: number;
    height: number;
    borderRadius: number;
  };
  gap: number;
  typo: {
    shopName: KeyOfTypo;
    address: KeyOfTypo;
    tag: KeyOfTypo;
  };
  padding: string;
  backgroundColor: string;
}

export const ShopInfo = ({
  image,
  shopName,
  title = '',
  height,
  address,
  shopTag1,
  shopTag2,
  shopTag3,
  onClick,
  themeVariant,
}: ShopInfoProps) => {
  const { imageSize, typo, gap, padding, backgroundColor } =
    ShopInfoTheme[themeVariant];
  return (
    <FlexButton
      direction="column"
      borderRadius={12}
      padding={padding}
      backgroundColor={backgroundColor}
      align="flex-start"
      gap={20}
      height={height}
      onClick={onClick}
    >
      {title && <Text typo="Body2">{title}</Text>}

      <Flex padding="0 9px" gap={gap}>
        <ShadowImage
          width={imageSize.width}
          height={imageSize.height}
          borderRadius={imageSize.borderRadius}
          src={image}
        />
        <Flex direction="column" align="flex-start" gap={8}>
          <Flex justify="flex-start" gap={8}>
            <Text typo={typo.shopName}>{shopName}</Text>
            {themeVariant === 'salon' && (
              <WidthFitFlex align="flex-start">
                <NextArrow width={15} height={15} />
              </WidthFitFlex>
            )}
          </Flex>
          <Text typo={typo.address} colorCode={theme.palette.Gray400}>
            {address}
          </Text>
          {(shopTag1 || shopTag2 || shopTag3) && (
            <Flex justify="flex-start" gap={4} align="center">
              {shopTag1 && <SalonTag content={shopTag1} />}
              {shopTag2 && <SalonTag content={shopTag2} />}
              {shopTag3 && <SalonTag content={shopTag3} />}
            </Flex>
          )}
        </Flex>
      </Flex>
    </FlexButton>
  );
};

const ShopInfoTheme: Record<'duri' | 'salon', ThemeVariant> = {
  duri: {
    imageSize: { width: 72, height: 72, borderRadius: 8 },
    typo: { shopName: 'Body2', address: 'Caption4', tag: 'Caption5' },
    gap: 20,
    padding: '10px 12px',
    backgroundColor: theme.palette.Gray_White,
  },
  salon: {
    imageSize: { width: 70, height: 70, borderRadius: 40 },
    gap: 24,
    typo: { shopName: 'Label1', address: 'Caption4', tag: 'Caption5' },
    padding: '20px 22px',
    backgroundColor: theme.palette.White,
  },
};

const FlexButton = styled(Flex)`
  cursor: pointer;
`;

const ShadowImage = styled(Image)`
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
`;
