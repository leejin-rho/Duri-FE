import { Flex, SpeechBalloon, Text } from '@duri-fe/ui';
import styled from '@emotion/styled';

interface SpeechBalloonProps {
  label: string;
  textColor: string;
}

export const SpeechBalloonContainer = ({
  label,
  textColor,
}: SpeechBalloonProps) => {
  return (
    <Container direction="column">
      <SpeechBalloon height={46} />
      <Label typo="Body3" colorCode={textColor}>
        {label}
      </Label>
    </Container>
  );
};

const Container = styled(Flex)`
  position: relative;
  width: fit-content;
  filter: drop-shadow(0px 0px 7.5px rgba(0, 0, 0, 0.1));
`;

// const Label = styled(Text)`
//   transform: translateY(-36px);
// `;

const Label = styled(Text)`
  position: absolute;
  transform: translateY(-4px);
`;
