import { theme } from '@duri-fe/ui';
import styled from '@emotion/styled';

import { Flex } from '../FlexBox';

interface SkeletonCardProps {
  width?: number;
  height?: number;
  borderRadius?: number;
}

export const SkeletonCard = ({
  width,
  height,
  borderRadius,
}: SkeletonCardProps) => {
  return (
    <SkeletonWrapper
      width={width}
      height={height}
      borderRadius={borderRadius}
      backgroundColor={theme.palette.Gray20}
    ></SkeletonWrapper>
  );
};

const SkeletonWrapper = styled(Flex)`
  position: relative;
  overflow: hidden;
  @keyframes skeleton-gradient {
    0% {
      background-color: rgba(165, 165, 165, 0.1);
    }
    50% {
      background-color: rgba(165, 165, 165, 0.3);
    }
    100% {
      background-color: rgba(165, 165, 165, 0.1);
    }
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: skeleton-gradient 1.5s infinite ease-in-out;
  }
`;
