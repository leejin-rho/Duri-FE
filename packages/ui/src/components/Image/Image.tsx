import styled from '@emotion/styled';

export const Image = styled.img<{
  width?: number;
  height?: number;
  borderRadius?: number;
}>`
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: ${({ height }) => (height ? `${height}px` : '100%')};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? `${borderRadius}px` : '0px'};
  flex-shrink: 0;
  object-fit: cover;
`;
