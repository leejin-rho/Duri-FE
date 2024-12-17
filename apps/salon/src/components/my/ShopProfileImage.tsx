import ShopDefaultImage from '@assets/images/ShopDefaultImage.png';
import { Image, WidthFitFlex } from '@duri-fe/ui';
import styled from '@emotion/styled';

interface ShopProfileImageProps {
  width?: number;
  height?: number;
  src: string;
  borderRadius?: number;
}

export const ShopProfileImage = ({
  width,
  height,
  src,
  borderRadius,
}: ShopProfileImageProps) => {
  return (
    <>
      {src ? (
        <Image
          width={width}
          height={height}
          src={src}
          borderRadius={borderRadius}
        />
      ) : (
        <WidthFitFlex borderRadius={borderRadius}>
          <DefaultImage src={ShopDefaultImage} width={width} height={height} borderRadius={borderRadius} />
        </WidthFitFlex>
      )}
    </>
  );
};

const DefaultImage = styled.img<{ borderRadius?: number }>`
  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}px` : '0px'};
`;
