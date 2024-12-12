import { useNavigate } from 'react-router-dom';

import {
  EmptyImage,
  Flex,
  Image,
  Text,
  theme,
} from '@duri-fe/ui';
import styled from '@emotion/styled';

interface ReviewProps {
  reviewId: number;
  shopName: string;
  createdAt: string;
  reviewImageURL: string;
}

export const PreviewOfReviews = ({
  reviewId,
  shopName,
  createdAt,
  reviewImageURL,
}: ReviewProps) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
      navigate(`/my/review/${reviewId}`);
    };
  return (
    <ImageWrapper borderRadius={8} direction="column" onClick={handleNavigate}>
      {reviewImageURL ? (
        <>
          <Image src={reviewImageURL} borderRadius={8} />
          <DateTextAbsolute typo="Caption5" colorCode={theme.palette.White}>
            {createdAt}
          </DateTextAbsolute>
          <ShopNameTextAbsolute typo="Body2" colorCode={theme.palette.White}>
            {shopName}
          </ShopNameTextAbsolute>
        </>
      ) : (
        <>
          <FlexGrow>
            <EmptyImage width={40} height={40} />
          </FlexGrow>
          <DateTextAbsolute typo="Caption5" colorCode={theme.palette.White}>
            {createdAt}
          </DateTextAbsolute>
          <ShopNameTextAbsolute typo="Body2" colorCode={theme.palette.White}>
            {shopName}
          </ShopNameTextAbsolute>
        </>
      )}
    </ImageWrapper>
  );
};

const ImageWrapper = styled(Flex)`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 192px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(17, 17, 17, 0) 38%, #111 100%);
    z-index: 1;
  }
`;
const ShopNameTextAbsolute = styled(Text)`
  position: absolute;
  bottom: 21px;
  left: 13px;
  z-index: 2;
`;
const DateTextAbsolute = styled(Text)`
  position: absolute;
  bottom: 42px;
  left: 13px;
  z-index: 2;
`;
const FlexGrow = styled(Flex)`
  flex: 1
`;