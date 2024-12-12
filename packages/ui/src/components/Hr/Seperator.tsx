import { theme } from '@duri-fe/ui';
import styled from '@emotion/styled';

export const Seperator = styled.div<{
  width?: string;
  height?: string;
  mode?: string;
  colorCode?: string;
}>`
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? '2px'};
  background-color: ${({ mode, colorCode }) =>
    mode === 'dotted'
      ? 'none'
      : colorCode
        ? colorCode
        : `${theme.palette.Gray20}`};
  border-top: ${({ mode, colorCode }) =>
    mode === 'dotted' 
      ? colorCode 
        ? `2px dashed ${colorCode}`
        : `2px dashed ${theme.palette.Gray700}`
      : 'none'};
`;
