import { useNavigate } from 'react-router-dom';

import {
  Doori,
  FilledHome,
  HeightFitFlex,
  Text,
  theme,
  WidthFitFlex,
} from '@duri-fe/ui';
import styled from '@emotion/styled';

export const AIHeader = () => {
  const navigate = useNavigate();

  return (
    <HeightFitFlex justify="space-between" margin="0 0 43px" padding="0 6px 0">
      <LogoWrapper
        gap={13}
        onClick={() => {
          navigate('/ai');
        }}
      >
        <Doori width={75} color={theme.palette.White} />
        <TitleTypo typo="Heading" colorCode={theme.palette.White}>
          AI
        </TitleTypo>
      </LogoWrapper>

      <a href="/">
        <FilledHome width={19} color={theme.palette.White} />
      </a>
    </HeightFitFlex>
  );
};

const LogoWrapper = styled(WidthFitFlex)`
  cursor: pointer;
`;

const TitleTypo = styled(Text)`
  font-size: (26 / 16) rem;
`;
