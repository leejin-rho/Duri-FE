import { theme } from '@duri-fe/ui';
import styled from '@emotion/styled';

export const Seperator = styled.div<{
  height?: string;
}>`
  width: 100%;
  height: ${({height}) => (height? `${height}` : '2px')};
  background-color: ${theme.palette.Gray20};
`;
