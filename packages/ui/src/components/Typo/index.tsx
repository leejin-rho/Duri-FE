import styled from '@emotion/styled';

import { KeyOfTypo, theme } from '../../styles';

export const Text = styled.div<{
  typo?: KeyOfTypo;
  colorCode?: string;
  margin?: string;
  justify?: string;
  align?: string;
  textAlign?: string;
}>`
  ${({ typo }) => (typo ? theme.typo[typo] : '')};
  color: ${({ colorCode }) => colorCode ?? `${colorCode}`};

  display: flex;
  align-items: ${({ align }) => (align ? align : 'center')};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : 'left')};
  justify-content: ${({ justify }) => (justify ? justify : 'center')};
  margin: ${({ margin }) => (margin ? margin : '0')};
`;

export const HardText = styled(Text)`
  flex-shrink: 0;
`;
