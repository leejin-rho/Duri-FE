import { theme } from '@duri-fe/ui';
import styled from '@emotion/styled';

export const Seperator = styled.div<{
  height?: string;
  mode?: string;
  colorCode?: string;
}>`
  width: 100%;
  height: ${({ height }) => height ?? '2px'};
  background-color: ${({ mode, colorCode }) =>
    mode === 'dotted'
      ? 'none'
      : colorCode
        ? colorCode
        : `${theme.palette.Gray20}`};
  border-top: ${({ mode }) =>
    mode === 'dotted' ? `2px dashed ${theme.palette.Black}` : 'none'};
`;
