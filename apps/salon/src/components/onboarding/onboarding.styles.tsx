import { HeightFitFlex, theme } from '@duri-fe/ui';
import styled from '@emotion/styled';

export const UnderlinedText = styled.a`
  color: ${theme.palette.Gray300};
  font-size: 14px;
  font-weight: 600;
  text-decoration: underline;
`;

export const ContactContainer = styled(HeightFitFlex)`
  position: absolute;
  width: calc(100% - 40px);
  bottom: 100px;
`;

export const ButtonWrapper = styled(HeightFitFlex)`
  position: absolute;
  width: calc(100% - 40px);
  bottom: 40px;
`;
