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
  return (
    <HeightFitFlex justify="space-between" margin="0 0 43px" padding="0 6px 0">
      <WidthFitFlex gap={13}>
        <Doori width={75} color={theme.palette.White} />
        <TitleTypo typo="Heading" colorCode={theme.palette.White}>
          AI
        </TitleTypo>
      </WidthFitFlex>
      <a href="/">
        <FilledHome width={19} color={theme.palette.White} />
      </a>
    </HeightFitFlex>
  );
};
const TitleTypo = styled(Text)`
  font-size: (26 / 16) rem;
`;
